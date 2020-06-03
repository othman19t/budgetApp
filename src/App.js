import React from "react";
import "./sass/main.scss";

import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"; // npm i react-router-dom

const ExpenseDashBoard = () => (
  <div>
    <Navigation />
    <h1>this is Dashboard component</h1>
  </div>
);

const Create = () => (
  <div>
    <Navigation />
    <h1>this is Create page</h1>
  </div>
);

const Edit = () => (
  <div>
    <Navigation />
    <h1>this is Edit page</h1>
  </div>
);

const Help = () => (
  <div>
    <Navigation />
    <h1>this is Help page</h1>
  </div>
);

const Err404 = () => (
  <div>
    <Navigation />
    <h1>404 page is not found</h1>
  </div>
);

const Navigation = () => (
  <div>
    <NavLink to="/" activeClassName="selected" exact>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="selected" exact>
      Create
    </NavLink>
    <NavLink to="/edit" activeClassName="selected" exact>
      Edit
    </NavLink>
    <NavLink to="/help" activeClassName="selected" exact>
      Help
    </NavLink>
  </div>
);
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ExpenseDashBoard} exact={true} />
        <Route path="/create" component={Create} exact={true} />
        <Route path="/edit" component={Edit} exact={true} />
        <Route path="/help" component={Help} exact={true} />
        <Route component={Err404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
