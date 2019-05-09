import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Pessoa from "./pages/Pessoa";
import Pessoas from "./pages/Pessoas";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/pessoas" component={Pessoas} />
      <Route path="/pessoa/:id" component={Pessoa} />
      <Route path="/pessoa" component={Pessoa} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
