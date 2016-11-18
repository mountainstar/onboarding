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
    document.getElementById('login').classList.add('selected');
    document.getElementById('signup').classList.remove('selected');
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
