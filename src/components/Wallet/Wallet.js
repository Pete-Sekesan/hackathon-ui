import React, { useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppContext from '../../AppContext';
import { Image, Transformation } from "cloudinary-react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Wallet() {
  const classes = useStyles();
  const {username, userUrl} = useContext(AppContext)

  return (
    <Card className={classes.root}>
      <CardActionArea>
              <CardMedia>
                  <Image
              cloudName="hq1rpt94r"
              publicId={`${userUrl}`}
              alt={`${username}`}
            >
              <Transformation
                gravity="face"
                height="300"
                width="300"
                crop="crop"
              />
              <Transformation radius="max" />
              <Transformation width="100" crop="scale" />
                  </Image>
                  </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {username}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary">
          Wallet Amount
        </Button>
        <Button size="large" color="primary">
          Refill Wallet
        </Button>
      </CardActions>
    </Card>
  );
}