import React from 'react';
import { withFormik } from 'formik';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button, Label, NavLink } from 'reactstrap';

import { Input, Form } from '../../common';
import { RegistrationValidation } from '../../validation';
import { registerUser } from '../../actions/userAction';
import { defaultRegisterValues } from '../../models';

const RegisterWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const BacktoLogin = styled(NavLink)`
  font-family: 'FiraCode-Retina';
  text-align: center;
  cursor: pointer;
  width: max-content;
  padding-left: 0;
`;

const RegistrationLabel = styled.h1`
  margin-top: 20px;
  width: 100%;
  font-family: 'FiraCode-Retina';
  text-align: center;
`;

const FieldLabel = styled(Label)`
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

const SubmitButton = styled(Button)`
  font-family: 'FiraCode-Retina';
`;

const PasswordField = styled(Input)`
  -webkit-text-security: disc;
`;

export default compose(
  connect(null, { registerUser }),
  withFormik({
  enableReinitialize: true,
  validationSchema: RegistrationValidation,
  handleSubmit: (values, { resetForm, props: { setRegister, registerUser } }) => {
    const { username, name, password } = values;
    registerUser({params: { username, password, name }, meta: { setRegister, resetForm, defaultValues: defaultRegisterValues }})
  }
}))(({ isAuthenticated, handleSubmit, errors, submitCount, resetForm, isRegister, setRegister, values }) => {

  return (
    <Form isDisplay={!isAuthenticated && isRegister}>
      <RegisterWrapper>
        <RegistrationLabel>Registration Form</RegistrationLabel>
        <FieldLabel>Name</FieldLabel>
        <Input
          name='name'
          error={(errors && !!submitCount && errors.name) || ''}
          value={values.name || ''}
        />
        <FieldLabel>Username</FieldLabel>
        <Input
          name='username'
          error={(errors && !!submitCount && errors.username) || ''}
          value={values.username || ''}
        />
        <FieldLabel>Password</FieldLabel>
        <PasswordField
          name='password'
          error={(errors && !!submitCount && errors.password) || ''}
          value={values.password || ''}
        />
        <FieldLabel>Confirm Password</FieldLabel>
        <PasswordField
          name='confirmPassword'
          error={(errors && !!submitCount && errors.confirmPassword) || ''}
          value={values.confirmPassword || ''}
          onKeyPress={ e => e.key === 'Enter' && handleSubmit() }
        />
        <hr />
        <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
        <BacktoLogin onClick={() => setRegister(false)}>Back to login</BacktoLogin>
      </RegisterWrapper>
    </Form>
  );
});
