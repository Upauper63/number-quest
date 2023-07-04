import React, { useEffect, useState } from 'react'

const AddIndex = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [collectCount, setCollectCount] = useState(0);
  const [questions, setQuestions] = useState([]);  

  const makeQuestions = () => {
    let newQuestions = []
    for(let i=0; i < 9; i++){
      let newQuestion = [i, i+1, i+2]
      newQuestions = [...newQuestions, newQuestion]

    }
    setQuestions(newQuestions)
  }
  useEffect(() => makeQuestions(), [])
  return (
    <div>
      {isFinished && <div>結果</div>}
      <div>{questions.map((q, idx) => <p key={idx}>{q}</p>)}</div>
      <div>□ = <input type="number" /></div>

    </div>
  )
}

export default AddIndex