import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // npm i react-router-dom

const ExpenseDashBoard = () => <div>this is Dashboard component</div>;
const Create = () => <div>this is create page</div>;
const Edit = () => <div>this is the Edit page</div>;
const Help = () => <div>this is the help page</div>;
const Err404 = () => <div>404 page is not found</div>;
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
