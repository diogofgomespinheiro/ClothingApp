//Library Imports
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Components imports
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";

//Utilities Imports
import { auth, createUserProfileDocument } from "./services/firebase/firebase";

//Style Imports
import "./App.css";

//Redux Imports
import { setCurrentUser } from "./store/modules/user/actions";
import { selectCurrentUser } from "./store/modules/user/selectors";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { onSetCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          onSetCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else {
        onSetCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/auth" render={() => this.props.currentUser ? <Redirect to="/" /> : <Authentication />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => {
  return {
    onSetCurrentUser: user => dispatch(setCurrentUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
