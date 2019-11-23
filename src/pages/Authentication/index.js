//Library Imports
import React from "react";

//Components Imports
import SignIn from "../../containers/SignIn";
import SignUp from "../../containers/SignUp";

//Style imports 
import "./styles.scss";

const Authentication = () => {
  return (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
  );
};

export default Authentication;
