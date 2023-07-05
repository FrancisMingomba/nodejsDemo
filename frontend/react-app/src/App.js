import React, { Component } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path="/login" component={LoginForm} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
