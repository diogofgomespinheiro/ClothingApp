//Library Imports
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Components imports
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";
import Checkout from "./pages/Checkout";

//Style Imports
import "./App.css";

//Redux Imports
import { selectCurrentUser } from "./store/modules/user/selectors";
import { checkUserSession } from "./store/modules/user/actions";

const App = ({ onCheckUserSession, currentUser }) => {

  useEffect(() => {
    onCheckUserSession();
  }, [onCheckUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route
          exact
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route exact path="/checkout" component={Checkout} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  onCheckUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
