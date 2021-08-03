import React from 'react';
import { Link as NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CardImage from "../../assets/cards.png"
import Logo from "../../assets/logo.png";
import './Landing.css';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));


const cards = [1];

export default function Landing () {
  const classes = useStyles();

  return (
  
    <React.Fragment>
      <CssBaseline />
      <main className="test">
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              <img className="logo" src={Logo}/>
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            High Stakes High Card takes the simple concept of a game of War, and adds a fun little twist with odds based betting per hand!
            </Typography>
            
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4} justifyContent="center">
            
              <Grid item xs={12} sm={26} md={10}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={CardImage}
                    title="Playing Cards"
                  />
                  <CardContent className={classes.cardContent}>
                <Typography>
                    This is a media card. You can use this section to describe the content.
                    
                       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                    </Typography>
                  </CardContent>
               
              </Card>
          
              </Grid>
            
          </Grid>
        </Container>
        <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary"component={NavLink} to={"/login"} >
                    Login
                  </Button>
            </Grid>
            <Grid item>
                  <Button variant="contained" color="primary" component={NavLink} to={"/signup"}>
                    Sign Up
                  </Button>
                </Grid>
               </Grid>
            </div>
        
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          High Stakes High Card
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Developed by Andrew Rametta and Peter Sekesan
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
      </React.Fragment>

  );
}