import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

//import AuthService from "./services/auth.service";

import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
