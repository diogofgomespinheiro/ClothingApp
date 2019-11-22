//Library Imports
import React from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import HomePage from "./pages/HomePage/HomePage";
import Shop from "./pages/Shop/Shop";

//Style Imports
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
};

export default App;
