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
  const { username, userUrl, wallets, setWallets, userId } = useContext(
    AppContext
  );
  const classes = useStyles();

  useEffect(() => {
    AuthAPIService.getWallets()
      .then((res) => {
        setWallets(...wallets, res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setWallets]);

  const handleRefill = (e) => {
    console.log(wallets);
    console.log(wallets.filter((wallet) => wallet.username === username));
    console.log(yourWallet);
  };

  const yourWallet = wallets.filter((wallet) => wallet.username === username);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia>
            {userUrl !== null ? (
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
            ) : null}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {username}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {yourWallet.total}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <button onClick={handleRefill}>Check</button>
    </>
  );
}
