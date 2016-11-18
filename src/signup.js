import React, { Component } from 'react';
import SignUpForm from './signupform';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
//import { thunk } from 'redux-thunk';
import { combineForms } from 'react-redux-form';



const initialUserState = {firstName: '', lastName: '', email: '', password: '' };

const store = createStore(combineForms({ user: initialUserState }));

class SignUp extends Component{
	componentDidMount() {
		document.getElementById('signup').classList.add('selected');
		document.getElementById('login').classList.remove('selected');
	}
	render() {
		return(
			<div>
				<Provider store={store}>
					<SignUpForm />
				</Provider>
        <p>By creating an account, you agree to our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</p>
			</div>

		);
	}
}

export default SignUp;
