import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TokenService from "../../services/token-service";
import AppContext from "../../AppContext";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  body: {
    backgroundColor: "#000000",
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const { setUserId, setUsername, setUserUrl } = useContext(AppContext);

  const logout = () => {
    TokenService.clearUserId();
    TokenService.clearUserName();
    TokenService.clearUserURL();
    TokenService.clearAuthToken();
    setUserId(null);
    setUsername(null);
    setUserUrl(null);
    props.history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className="nav">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <div className="nav-logo">
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </div>
          </Typography>
          {TokenService.hasAuthToken() ? (
            <>
              <Button color="inherit" component={Link} to={"/cardtable"}>
                Card Table
              </Button>
              <Button color="inherit" component={Link} to={"/dashboard"}>
                Dashboard
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to={"/login"}>
                Login
              </Button>
              <Button color="inherit" component={Link} to={"/signup"}>
                Signup
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
