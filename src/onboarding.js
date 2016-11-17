import React, { Component } from 'react';
import logo from './logo-athlinks.svg';
import twitter from './twitter.svg';
import fb from './fb.svg';
import gplus from './gplus.svg';
import LoginForm from './loginform';
import './App.css';

class OnBoarding extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-intro">
          Add your results to your Athlinks Account
        </p>
        <div className="switch">
          <a href="#">login</a>
          <a href="#">signup</a>
        </div>
        <h4>Connect With</h4>
          <div className="social">  
            <button className="fb"><img src={fb} role="presentation"/></button>
            <button className="twitter"><img src={twitter} role="presentation"/></button>
            <button className="gplus"><img src={gplus} role="presentation"/></button>
          </div>
          <div className="orSeperator">
            <h2><span>or</span></h2>
          </div>
        <LoginForm />
      </div>
    );
  }
}

export default OnBoarding;
