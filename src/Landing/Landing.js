import React, { Component } from "react";

import Nav from "../Nav/Nav";

import "./Landing.scss";
import Main from "./Main/Main";
import Footer from "../Footer/Footer";

class Landing extends Component {
  render() {
    return (
      <div className="landingMain">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Landing;
