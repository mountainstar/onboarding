import React, { Component } from 'react';
import { Form, Field } from 'react-redux-form';
import { isEmail, isNull } from 'validator';

const required = isNull;


class SignUpForm extends Component {
  render() {
    return (

        <Form model="user"
              validators={{

                email: { required, isEmail },
                password: { required },
              }}
            onSubmit={v => console.log(v)}>
              <Field className="field1" model="user.firstname">
                <input  placeholder="Firstname" type="text"/>
              </Field>
              <Field className="field1" model="user.lastname">
                <input  placeholder="Lastname" type="text"/>
              </Field>
              <Field className="field" model="user.email">
                <input  placeholder="EMAIL" type="email"/>
              </Field>

              <Field className="field" model="user.password">
                <input placeholder="PASSWORD" type="password"/>
              </Field>
              <button className="submit" type="submit">
                Sign Up
              </button>
        </Form>

    )
  }
}
export default SignUpForm
