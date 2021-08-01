import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";


class Landing extends Component {
  render() {
    return (
      <Fragment>
        <section>
          <div className="landing__logo-container">
            <h1 className="header-text">Blackjack Saloon</h1>
          </div> 
        </section>
        <section className="landing">
          <div className="landing-description">
            <article className="landing-description__item">
              <h3>Enjoy Blackjack Saloon</h3>
              <br />
              <p>
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </article>
           
          
          <button>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Get Started
            </Link>
            </button>
            </div>
            </section>
       
      </Fragment>
  
)}}

export default Landing;