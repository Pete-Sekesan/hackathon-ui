import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppContext from "../../AppContext";
import { Image, Transformation } from "cloudinary-react";
import AuthAPIService from "../../services/auth-api-service";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Wallet() {
  const classes = useStyles();
  const { username, userUrl, wallets, setWallets, userId } = useContext(
    AppContext
  );

  useEffect(() => {
    AuthAPIService.getWallets()
      .then((wallets) => {
        setWallets(wallets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setWallets]);

  const handleRefill = (e) => {
    AuthAPIService.postWallet({
      total: 500,
    })
      .then((refill) => {
        setWallets([...wallets, refill]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const yourWallet = wallets.filter(
    (wallet) => wallet.user_id === parseInt(userId)
  );

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia>
            <Image
              cloudName="hotialrup"
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
      </Card>
      {yourWallet.length > 0 ? (
        yourWallet.map((total, index) => <div>{total.total}</div>)
      ) : (
        <button onClick={handleRefill}>Refill</button>
      )}
    </>
  );
}
