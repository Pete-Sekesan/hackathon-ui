import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar">
        <div>
          <ul>
              <Fragment>
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Sign Up</Link>
                </li>
              </Fragment>
           
          </ul>
        </div>
      </nav>
     )}


export default Navbar
