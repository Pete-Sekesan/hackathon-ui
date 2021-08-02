import React, { Component, Fragment } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <Fragment>
        <Container>
        <section>
        
          <div className="landing__logo-container">
            <h1 className="header-text">Blackjack Saloon</h1>
          </div> 
        </section>
        <section className="landing">
          <div className="landing-description">
            <article className="landing-description__item">
              <h3>Enjoy Blackjack Saloon</h3>
              <br />
              <p>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </article>
           
          
          <Button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Get Started
            </Link>
            </Button>
            </div>
            </section>
       </Container>
      </Fragment>
  
)}}

export default Landing;