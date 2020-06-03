import React from "react";
import Navigation from "./navigation";
const Edit = (props) => {
  return (
    <div>
      <Navigation />
      <h1>this is Edit page id: {props.match.params.id}</h1>
    </div>
  );
};
export default Edit;
