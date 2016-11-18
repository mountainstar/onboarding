import React, { Component } from 'react';
import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator';
import validator from 'validator';

const required = isNull;



class LoginForm extends Component {
  render() {
    return (

        <Form model="user"
              validators={{
                email: { required, isEmail },
                password: { required },
              }}
              onSubmit={v => console.log(v)}>
              <Field className="field" model="user.email"
                validators={{
                  required: (val) => val && val.length,
                  isEmail: validator.isEmail
              }}>
                <input  placeholder="EMAIL" type="email"/>
              </Field>

              <Field className="field" model="user.password">
                <input placeholder="PASSWORD" type="password"/>
              </Field>
              <div className="login-action"><div><input type="checkbox" />Remember Me</div> <a href="#">Forgot Password?</a></div>
              <button className="submit" type="submit">
                Login
              </button>
        </Form>
    )
  }
}
export default LoginForm
