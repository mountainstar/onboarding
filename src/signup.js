import React, { Component } from 'react';
import SignUpForm from './signupform';
import { Provider } from 'react-redux';
import {  createStore } from 'redux';
//import { thunk } from 'redux-thunk';
import { combineForms } from 'react-redux-form';



const initialUserState = {
  email: '',
	password: '',
};

const store = createStore(combineForms({ user: initialUserState }));

class SignUp extends Component{
	componentDidMount() {
		document.getElementById('signup').style.backgroundColor="#fff";
		document.getElementById('signup').style.color="#16a9e1";
		document.getElementById('login').style.backgroundColor="#16a9e1";
		document.getElementById('login').style.color="#fff"
	}
	render() {
		return(
			<div>
				<Provider store={store}>
					<SignUpForm />
				</Provider>
			</div>

		);
	}
}

export default SignUp;
