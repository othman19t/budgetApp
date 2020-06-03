import React from "react";
import { NavLink } from "react-router-dom"; // npm i react-router-dom
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
export default Navigation;
