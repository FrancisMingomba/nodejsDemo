import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import NavBar from "./navBar";
import "./App.css";
import LoginForm from "./loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
         
            <Route path="/login" component={LoginForm} />
         
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
