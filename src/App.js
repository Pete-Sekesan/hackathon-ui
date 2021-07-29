
import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";

function App() {
  return (
    <div className="App">
        <Route path="/" component={Navbar} />

    <h1> Hackathon UI</h1>
    </div>
  );
}

export default App;
