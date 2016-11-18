import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';
import LoginForm from './loginform';
import SigninForm from './signinform';
import twitter from './twitter.svg';
import fb from './fb.svg';
import gplus from './gplus.svg';
import './App.css';

class OnBoarding extends Component {
	componentDidMount() {
		document.body.className=''
	}
	render(){
		return(
			<div>
				<div className="switch">
		          <Link to="/">Login</Link> 
		          <Link to="/signinform">Signin</Link>    
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
	        	{ this.props.children }
        	</div>

		)
	}
}

export default(
	<Route path="/" component={OnBoarding}>
		<IndexRoute component={ LoginForm } />
		<Route path="signinform" component={ SigninForm } />
	</Route>
)

