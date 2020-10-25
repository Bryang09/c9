import React from "react";

import { Route, Switch, Link } from "react-router-dom";
import Landing from "./Landing/Landing";

const Routes = () => {
  return (
    <Switch>
      <Route to="/" component={Landing} />
    </Switch>
  );
};

export default Routes;
