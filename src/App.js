//Library Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import HomePage from "./pages/HomePage/HomePage";

//Style Imports
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
