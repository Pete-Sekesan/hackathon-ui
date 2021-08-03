import React, { Component, Fragment, useState, useContext } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Landing from "./components/landing-page/Landing";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import AppContext from "./AppContext";
import TokenService from "./services/token-service";

function App() {
  const [userId, setUserId] = useState(TokenService.hasUserId());
  const [username, setUsername] = useState(TokenService.hasUserName());
  const [userUrl, setUserUrl] = useState(TokenService.hasUserURL());
  const [wallets, setWallets] = useState([]);
  const contextValue = {
    userId,
    setUserId,
    username,
    setUsername,
    userUrl,
    setUserUrl,
    wallets,
    setWallets,
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValue}>
        <Route path="/" component={Navbar} />
        <Route path="/" exact component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
