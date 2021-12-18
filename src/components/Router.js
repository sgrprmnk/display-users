import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Result from "./Result";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/result/:id" component={Result} />
    </Switch>
  </BrowserRouter>
);

export default Router;
