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
  const { setWallets, wallets } = useContext(AppContext);

  useEffect(() => {
    AuthAPIService.getWallets()
      .then((res) => {
        setWallets(res);
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
