//Library Imports
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";

//Utilities Imports
import { auth } from "./firebase/firebase";

//Style Imports
import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/auth" component={Authentication} />
        </Switch>
      </div>
    );
  }
}

export default App;
