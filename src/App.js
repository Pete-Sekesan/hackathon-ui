import React, { Component, Fragment } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Landing from "./components/landing-page/Landing";
import Login from "./components/login/Login";
import SignUp from "./components/signup/Signup";



function App() {
  return (
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
   
    <h1> Hackathon UI</h1>
    </div>
  );
}

export default App;
