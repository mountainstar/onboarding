import React, { Component } from 'react';
import LoginForm from './loginform';
import { Provider } from 'react-redux';
import {  createStore } from 'redux';
//import { thunk } from 'redux-thunk';
import { combineForms } from 'react-redux-form';



const initialUserState = {
  email: '',
	password: '',
};

const store = createStore(combineForms({ user: initialUserState }));




class Login extends Component{
	componentDidMount() {
		document.getElementById('login').style.backgroundColor="#fff";
		document.getElementById('login').style.color="#16a9e1";
		document.getElementById('signup').style.backgroundColor="#16a9e1";
		document.getElementById('signup').style.color="#fff"
	}

	render() {
		return(
			<div>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</div>

			);
	}

}

export default Login;
