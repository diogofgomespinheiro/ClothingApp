//Library Imports
import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Components imports
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import ErrorBoundary from "./hoc/ErrorBoundary";

//Style Imports
import "./App.scss";

//Redux Imports
import { selectCurrentUser } from "./store/modules/user/selectors";
import { checkUserSession } from "./store/modules/user/actions";

const HomePage = lazy(() => import("./pages/HomePage"));
const Shop = lazy(() => import("./pages/Shop"));
const Authentication = lazy(() => import("./pages/Authentication"));
const Checkout = lazy(() => import("./pages/Checkout"));

const App = ({ onCheckUserSession, currentUser }) => {
  useEffect(() => {
    onCheckUserSession();
  }, [onCheckUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
        </ErrorBoundary>
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
