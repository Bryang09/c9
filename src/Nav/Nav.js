import React from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="logo">
        <Link to="/">
          <div className="logo-img"></div>
        </Link>
      </div>
      <div className="links">
        <h4>About</h4>
        <h4>
          <a href="https://www.amazon.com/dp/B08DKD52T4">Shop</a>
        </h4>
      </div>
    </div>
  );
};

export default Nav;
