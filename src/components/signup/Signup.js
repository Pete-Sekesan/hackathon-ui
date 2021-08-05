import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Upload from "../Upload/Upload";
import AuthAPIService from "../../services/auth-api-service";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Spinner from "../Spinner/Spinner";
import TokenService from "../../services/token-service";
import AppContext from "../../AppContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {
  const [imgUrl, setImgUrl] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [loggedInState, setLoggedInState] = useState(null);
  const [error, setError] = useState(null);
  const { setUserId, setUsername, setUserUrl, userId, setWallets } = useContext(
    AppContext
  );

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    const user = { username: username.value, password: password.value };
    setLoggedInState(true);
    setError(null);
    // create user
    AuthAPIService.postUser({
      username: username.value,
      password: password.value,
      user_url: imgUrl,
    })
      .then(() => {
        AuthAPIService.loginUser(user).then((loginResponse) => {
          // store auth token in local storage[]
          console.log("login");
          console.log(loginResponse);
          TokenService.saveAuthToken(loginResponse.authToken);
          console.log(loginResponse.authToken);
          const jwt = TokenService.readJwtToken(loginResponse);
          setUserId(jwt.user_id);
          setUsername(jwt.username);
          setUserUrl(jwt.user_url);
          TokenService.saveUserURL(jwt.user_url);
          TokenService.saveUserName(jwt.username);
          TokenService.saveUserId(jwt.user_id);
        });
      })

      .then(() => {
        AuthAPIService.postWallet({
          total: 500,
        }).then((res) => {
          props.history.push("/dashboard");
        });
      })
      .catch((res) => {
        setError(res.error);
        setLoggedInState(null);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {loggedInState && <Spinner />}
        <Upload
          setImgUrl={setImgUrl}
          previewSource={previewSource}
          setPreviewSource={setPreviewSource}
        />
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          {error !== null && <p>{error}</p>}
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
