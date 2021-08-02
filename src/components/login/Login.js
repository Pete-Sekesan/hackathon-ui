import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TokenService from "../../services/token-service";
import AuthApiService from "../../services/auth-api-service";
import Spinner from "../Spinner/Spinner";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export default function SignIn(props) {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [loggedInState, setLoggedInState] = useState(null);

    const handleLogin = (e) => {
    e.preventDefault();
    setLoggedInState(true);
    const { username, password } = e.target;
    const user = { username: username.value, password: password.value };
    setError(null);
    AuthApiService.loginUser(user)
      .then((loginResponse) => {
        // store auth token in local storage
        TokenService.saveAuthToken(loginResponse.authToken);
        props.history.push("/dashboard");
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
          Log In
        </Typography>
        {loggedInState && <Spinner />}
        {error !== null && <h3 className="error-message">{error}</h3>}
        <form className={classes.form} noValidate onSubmit={handleLogin}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
         
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
  );
}