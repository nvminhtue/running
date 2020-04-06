import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';
import styled from 'styled-components';
import { Button, Label, NavLink } from 'reactstrap';

import { Input, Form } from '../../common';
import { userLogin } from '../../actions/userAction';
import { defaultLoginValues } from '../../models';

const RegisterWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  width: 50%;
`;

const LoginLabel = styled.h1`
  margin-top: 20px;
  width: 100%;
  font-family: 'FiraCode-Retina';
  text-align: center;
`;

const FieldLabel = styled(Label)`
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

const PasswordField = styled(Input)`
  -webkit-text-security: disc;
`;

const RegistrationNav = styled(NavLink)`
  font-family: 'FiraCode-Retina';
  text-align: center;
  cursor: pointer;
  width: max-content;
  padding-left: 0;
`;

const LoginButton = styled(Button)`
  font-family: 'FiraCode-Retina';
`;

export default compose(
  connect(null, { userLogin }),
  withFormik({
    enableReinitialize: true,
    handleSubmit: async (values, { resetForm, props: { setAuthentication, userLogin } }) => {
      const { username, password } = values;
      userLogin({params: { username, password }, meta: { setAuthentication, resetForm, defaultValues: defaultLoginValues }})
    }
}))(({ isAuthenticated, handleSubmit, errors, submitCount, isRegister, setRegister, values }) => {
  return (
    <Form isDisplay={!isAuthenticated && !isRegister}>
      <RegisterWrapper>
        <LoginLabel>Login</LoginLabel>
        <FieldLabel>Username</FieldLabel>
        <Input
          name='username' error={(errors && !!submitCount && errors.username) || ''}
          value={values.username || ''}
          onKeyPress={ e => e.key === 'Enter' && handleSubmit() }
        />
        <FieldLabel>Password</FieldLabel>
        <PasswordField
          name='password'
          error={(errors && !!submitCount && errors.password) || ''}
          value={values.password || ''}
          onKeyPress={ e => e.key === 'Enter' && handleSubmit() }
        />
        <hr />
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
        <RegistrationNav onClick={() => setRegister(true)}>Click here to register</RegistrationNav>
      </RegisterWrapper>
    </Form>
  );
});
