import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import ExerTracker from "./component/exertracker";
import Exercises from "./component/edit-exercise";
import ExerciseLog from "./component/create-exercise"
import CreateUser from "./component/create-user";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" id="last">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1" target="_blank" rel="noopener noreferrer">
              <img src={logo} width="30" height="30" alt="ExerciseTracker" />
            </a>
            <header className="navbar-brand text-dark" >Exercise Tracker</header>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link">ExercTracker</Link>
                </li>
        
                <li className="nav-item">
                  <Link to="/create" className="nav-link">Create Exercise-log</Link>
                </li>
                <li className="nav-item">
                  <Link to="/createuser" className="nav-link">Create user</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />


          <Route path="/" exact component={ExerTracker} />
          <Route path="/edit/:id" component={Exercises}/>
          <Route path="/create" component={ExerciseLog}/>
          <Route path="/createuser" component={CreateUser} />
        </div>
      </Router>

    );

  }
}

export default App;
