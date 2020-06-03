import React from "react";
import DashBoard from "./dashboard";
import Create from "./create";
import Edit from "./edit";
import Help from "./help";
import Err404 from "./err404";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // npm i react-router-dom
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={DashBoard} exact={true} />
        <Route path="/create" component={Create} exact={true} />
        <Route path="/edit/:id" component={Edit} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route component={Err404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
