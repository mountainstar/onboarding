import React, { Component } from 'react';
import { Router } from 'react-router'
import routes from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import logo from './logo-athlinks.svg';


const history = createBrowserHistory();


class OnBoarding extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Add your results to your Athlinks Account
        </p>
        <Router history={history}>
              { routes }
        </Router>
        
        
      </div>
    );
  }
}

export default OnBoarding;
