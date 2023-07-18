import React, { Component } from "react";
//import { Route, Redirect, Switch } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import NavBar from "./navBar";
//import "./index.css";

import "./App.css";
import LoginForm from './loginForm';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="./login" component={LoginForm} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
