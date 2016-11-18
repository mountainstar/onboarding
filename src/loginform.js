import React, { Component } from 'react';


class LoginForm extends Component{
	componentDidMount() {
		document.getElementById('login').style.backgroundColor="#fff";
		document.getElementById('login').style.color="#16a9e1";
		document.getElementById('signin').style.backgroundColor="#16a9e1";
		document.getElementById('signin').style.color="#fff"
	}
	
	render() {
		return(
			<div>
				<p>here is where the login form will go</p>
			</div>
			
			);
	}

}

export default LoginForm;