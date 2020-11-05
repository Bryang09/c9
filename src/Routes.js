import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Available from "./notAvailable/Available";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/not-available" component={Available} />
    </Switch>
  );
};

export default Routes;
