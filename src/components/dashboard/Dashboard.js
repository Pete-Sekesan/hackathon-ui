import React, {
  Component,
  Fragment,
  useState,
  useContext,
  useEffect,
} from "react";
import Wallet from "../Wallet/Wallet";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import AppContext from "../../AppContext";
import AuthAPIService from "../../services/auth-api-service";

function Dashboard() {
  const { setWallets, wallets, userId } = useContext(AppContext);

  useEffect(() => {
    AuthAPIService.getWallets()
      .then((wallets) => {
        console.log("get wallets");
        setWallets(wallets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setWallets]);

  return (
    <Fragment>
      <Wallet />
      <LeaderBoard />
    </Fragment>
  );
}

export default Dashboard;
