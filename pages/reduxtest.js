import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import { testAction } from "../store/actions/testAction";
import { useSnackbar } from "notistack";
import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

export default function ReduxTest() {
  const dispatch = useDispatch();
  const [word, setWord] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = (e) => {
    e.preventDefault();
    closeSnackbar();
    if (word) {
      dispatch(testAction(word));
      setWord("");
    } else {
      enqueueSnackbar("word champ Obligatoire", { variant: "error" });
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Card>
          <CardContent>
            <Typography style={{ textAlign: "center", fontWeight: "600" }}>
              tester REDUX
            </Typography>
            <form>
              <TextField
                id="filled-basic"
                label="word"
                variant="filled"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                fullWidth
                style={{ margin: "10px  0 10px" }}
              />
              <Button
                variant="contained"
                fullWidth
                disableElevation
                color="primary"
                onClick={handleClick}
              >
                Dipacth action
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
