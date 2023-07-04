import styles from "../styles/Home.module.css";
import { Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      direction={"column"}
      mt={5}
      spacing={5}
    >
      <Grid item>
        <Typography variant="h4" textAlign={"center"}>
          □ の計算練習！
        </Typography>
      </Grid>
      <Grid item mt={2}>
        <Link href="add" passHref>
          <Button variant="contained">足し算</Button>
        </Link>
      </Grid>
    </Grid>
  );
}
