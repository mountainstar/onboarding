import React, { Component } from 'react';


class SigninForm extends Component{
	componentDidMount() {
		document.getElementById('signin').style.backgroundColor="#fff";
		document.getElementById('signin').style.color="#16a9e1";
		document.getElementById('login').style.backgroundColor="#16a9e1";
		document.getElementById('login').style.color="#fff"
	}
	render() {
		return(
			<div>
				<p>here is where the signin form will go</p>
			</div>
			
		);
	}
}

export default SigninForm;