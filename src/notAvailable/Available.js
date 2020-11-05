import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import { Link } from "react-router-dom";

import "./Available.scss";

const Available = () => {
  return (
    <div className="Available">
      <Nav />
      <div className="available">
        <div className="imgContainer">
          <div className="img"></div>
        </div>
        <div className="text">
          <h1>We are working on it...</h1>
          <Link to="/">
            <h4>Back to home</h4>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Available;
