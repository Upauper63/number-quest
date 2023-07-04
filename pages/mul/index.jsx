import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MulIndex = () => {
  const [tmpIndex, setTmpIndex] = useState(0);
  const [tmpAnswer, setTmpAnswer] = useState();
  const [tmpResult, setTmpResult] = useState();
  const [isConfirm, setIsConfirm] = useState(false);

  const [isFinished, setIsFinished] = useState(false);
  const [collectCount, setCollectCount] = useState(0);
  const checkIsFinished = () => {
    if (tmpIndex == 9) {
      setIsFinished(true);
    }
  };

  const [questions, setQuestions] = useState([]);
  const [hidePoses, setHidePoses] = useState([]);
  const makeQuestions = () => {
    let newQuestions = [];
    let newHidePoses = [];
    for (let i = 0; i < 10; i++) {
      // TODO 2桁位置ランダムにしたい
      if (i % 2 == 0) {
        let num1 = 0;
        while (num1 == 0) {
          num1 = Math.floor(Math.random() * 100);
        }
        let num2 = 0;
        while (num2 == 0) {
          num2 = Math.floor(Math.random() * 10);
        }
        let newQuestion = [num1, num2, num1 * num2];
        newQuestions = [...newQuestions, newQuestion];
        newHidePoses = [...newHidePoses, Math.floor(Math.random() * 2)];
      } else {
        let num1 = 0;
        while (num1 == 0) {
          num1 = Math.floor(Math.random() * 10);
        }
        let num2 = 0;
        while (num2 == 0) {
          num2 = Math.floor(Math.random() * 100);
        }
        let newQuestion = [num1, num2, num1 * num2];
        newQuestions = [...newQuestions, newQuestion];
        newHidePoses = [...newHidePoses, Math.floor(Math.random() * 2)];
      }
    }
    setQuestions(newQuestions);
    setHidePoses(newHidePoses);
  };

  const checkAnswer = (tmpIndex, tmpAnswer) => {
    if (questions[tmpIndex][hidePoses[tmpIndex]] == tmpAnswer) {
      setCollectCount(collectCount + 1);
      setTmpResult(true);
    } else {
      setTmpResult(false);
    }
    setIsConfirm(true);
  };

  useEffect(() => makeQuestions(), []);
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      mt={5}
      spacing={5}
    >
      {isFinished && (
        <>
          <Grid>
            <Typography component={"span"} variant={"h4"}>
              結果：{collectCount * 10}点！
            </Typography>
          </Grid>
          <Grid mt={5}>
            <Link href="/" passHref>
              <Button variant="contained">戻る</Button>
            </Link>
          </Grid>
        </>
      )}
      {isConfirm && tmpResult == true && (
        <>
          <Grid mt={7}>
            <Typography component={"span"} variant={"h4"}>
              正解！
            </Typography>
          </Grid>
          <Grid mt={9}>
            <Button
              variant="contained"
              onClick={() => (
                setTmpIndex(tmpIndex + 1),
                setIsConfirm(false),
                checkIsFinished()
              )}
            >
              次へ
            </Button>
          </Grid>
        </>
      )}
      {isConfirm && tmpResult == false && (
        <>
          <Grid mt={7}>
            <Typography component={"span"} variant={"h4"}>
              残念！
            </Typography>
          </Grid>
          <Grid mt={9}>
            <Button
              variant="contained"
              onClick={() => (
                setTmpIndex(tmpIndex + 1),
                setIsConfirm(false),
                checkIsFinished()
              )}
            >
              次へ
            </Button>
          </Grid>
        </>
      )}

      {!isFinished && !isConfirm && questions.length && (
        <>
          <Grid item>
            {hidePoses[tmpIndex] == 0 ? (
              <Typography component={"span"} variant={"h4"}>
                □
              </Typography>
            ) : (
              <Typography component={"span"} variant={"h4"}>
                {questions[tmpIndex][0]}
              </Typography>
            )}{" "}
            <Typography component={"span"} variant={"h4"}>
              {" "}
              ×{" "}
            </Typography>{" "}
            {hidePoses[tmpIndex] == 1 ? (
              <Typography component={"span"} variant={"h4"}>
                □
              </Typography>
            ) : (
              <Typography component={"span"} variant={"h4"}>
                {questions[tmpIndex][1]}
              </Typography>
            )}
            <Typography component={"span"} variant={"h4"}>
              {" "}
              = {questions[tmpIndex][2]}
            </Typography>
          </Grid>
          <Grid item style={{ display: "flex", alignItems: "center" }}>
            <Typography component={"span"} variant={"h4"}>
              □ ={" "}
            </Typography>
            <input
              type="number"
              inputMode="numeric"
              autoFocus
              style={{
                verticalAlign: "middle",
                height: "2rem",
                fontSize: "1.5rem",
                width: "150px",
              }}
              onChange={(e) => setTmpAnswer(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => checkAnswer(tmpIndex, tmpAnswer)}
            >
              チェック！
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default MulIndex;
