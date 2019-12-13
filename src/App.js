import React, { Component } from 'react';
import Alerts from './views/Alerts';
import AlertsList from './views/AlertsList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      alertId: ''
    }
  }

  alertsState = (value) => {
    this.setState({ alertId: value})
  }

  render() {

    console.log("this.state.alertId", this.state.alertId)
    return (
      <Router>
        <div className="App">
          <h1>App</h1>
          <Route 
          path="/views/Alerts" 
          component={() => <Alerts alertsState={this.alertsState} />} 
          />
          <Route 
          path="/views/AlertsList" 
          component={() => <AlertsList alertsState={this.state.alertId} />} 
          />
        </div>
      </Router>
    );
  }
}

export default App;
