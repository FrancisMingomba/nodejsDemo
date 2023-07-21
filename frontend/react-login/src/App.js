import React, { Component } from "react";
//import { Route, Redirect, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar";
//import "./index.css";

import "./App.css";
import LoginForm from './components/loginForm';
import Customers from "./components/customers";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="login" Component={LoginForm} />
            <Route path="customers" Component={Customers} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;