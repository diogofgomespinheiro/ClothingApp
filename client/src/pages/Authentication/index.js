//Library Imports
import React from "react";

//Style imports 
import "./styles.scss";

//Components Imports
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const Authentication = () => {
  return (
  <div className="authentication">
    <SignIn />
    <SignUp />
  </div>
  );
};

export default Authentication;
