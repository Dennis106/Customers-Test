import React, { Component } from 'react';
import './App.css';
import Customers from './components/customers';
import Profile from './components/profile'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/profile/:id">
              <Profile {...this.props}/>
            </Route>
            <Route path="/">
              <Customers />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
