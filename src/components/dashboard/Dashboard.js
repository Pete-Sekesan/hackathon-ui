import React, { Component, Fragment, useState, useContext } from "react";
import Wallet from '../Wallet/Wallet';
import LeaderBoard from '../LeaderBoard/LeaderBoard';



function Dashboard() {
  return (
    <Fragment>
      <div>
        <Wallet />
      </div>
      <div>
        <LeaderBoard />
        </div>
      </Fragment>
    
    )
}

export default Dashboard
