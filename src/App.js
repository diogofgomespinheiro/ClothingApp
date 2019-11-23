//Library Imports
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

//Components imports
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import Header from "./components/Header";
import Authentication from "./pages/Authentication";

//Utilities Imports
import { auth, createUserProfileDocument } from "./firebase/firebase";

//Style Imports
import "./App.css";

class App extends Component {
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }});
        });
      } else {
        this.setState({ currentUser: null })
      }
    });
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
