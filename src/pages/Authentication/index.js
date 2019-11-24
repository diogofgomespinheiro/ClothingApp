//Library Imports
import React from "react";

//Components Imports
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

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
