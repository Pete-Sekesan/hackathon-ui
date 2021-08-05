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

export default function Wallet(props) {
  const { username, userUrl, wallets, setWallets, userId } = useContext(
    AppContext
  );
  const classes = useStyles();

  const yourWallet = wallets.filter((wallet) => wallet.user_id === userId);

  const buyIn = () => {
    AuthAPIService.postWallet({
      username: username,
      total: 500,
    })
      .then((wallet) => {
        console.log(wallet);
        setWallets([...wallets, wallet]);
        console.log(wallets);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia>
            {userUrl === null ? null : (
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
            )}
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {username}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {yourWallet.length > 0 ? (
                yourWallet[0].total
              ) : (
                <p>click buy in to load your wallet</p>
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      {yourWallet.length === 0 ? <button onClick={buyIn}>Buy in</button> : null}
    </>
  );
}
