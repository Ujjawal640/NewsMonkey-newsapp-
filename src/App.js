
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="general" pagesize={6} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" pagesize={6} country="in" category="business"/></Route>
          <Route exact path="/Entertainment"><News key="Entertainment" pagesize={6} country="in" category="Entertainment"/></Route>
          <Route exact path="/Health"><News key="Health" pagesize={6} country="in" category="Health"/></Route>
          <Route exact path="/Science"><News key="Science" pagesize={6} country="in" category="Science"/></Route>

          
          <Route exact path="/sports"><News key="sports" pagesize={6} country="in" category="sports"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}








