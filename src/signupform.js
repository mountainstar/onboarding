import React, { Component } from 'react';
import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator';
const required = isNull;


class SignUpForm extends Component {
  render() {
    return (

        <Form model="user"
              validators={{
                firstname: { required },
                lastname: { required },
                email: { required, isEmail },
                password: { required }
              }}
            onSubmit={v => console.log(v)}>
              <Field className="field" model="user.firstname">
                <input  placeholder="First Name" type="text"/>
                <input  placeholder="Last Name" type="text"/>
              </Field>

              <Field className="field" model="user.email">
                <input  placeholder="Email" type="email"/>
              </Field>

              <Field className="field" model="user.password">
                <input placeholder="Password" type="password"/>
              </Field>
              <span className="min-pass">Minimum of 8 characters long</span>
              <i class="fa fa-check" aria-hidden="true"></i>
              <button className="submit" type="submit">
                Sign Up
              </button>
        </Form>

    )
  }
}
export default SignUpForm
