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
import Upload from '../Upload/Upload';
import AuthAPIService from '../../services/auth-api-service';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Spinner from '../Spinner/Spinner';


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

  const [imgUrl, setImgUrl] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [loggedInState, setLoggedInState] = useState(null);
  const [error, setError] = useState(null);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      password,
    } = e.target;
    setLoggedInState(true);
    setError(null);
    // create user
    AuthAPIService.postUser({
      username: username.value,
      password: password.value,
      user_url: imgUrl,
    })
      .then(() => {
        props.history.push("/login");
      })
      .catch((res) => {
        setError(res.error);
        setLoggedInState(null);
      });
  };

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        {loggedInState && <Spinner />}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
                      value={username}
                      onChange={e =>setUsername(e.target.value)}
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
            value={password}
            type="password"
                      id="password"
                      onChange={e =>setPassword(e.target.value)}
            autoComplete="current-password"
                  />
                
          <Upload  setImgUrl={setImgUrl}
            previewSource={previewSource}
            setPreviewSource={setPreviewSource} />
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
      <Box mt={8}>
     
      </Box>
    </Container>
  );
}