import React from 'react';
import { withFormik } from 'formik';
import styled from 'styled-components';
import { Button, Label, NavLink } from 'reactstrap';
import { toast } from 'react-toastify';

import { Input, Form } from '../../common';

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

export default withFormik({
  enableReinitialize: true,
  handleSubmit: async (values, { resetForm, props: { setAuthentication } }) => {
    toast.success('WELCOME BACK');
    setAuthentication(true);
    resetForm();
  }
})(({ isAuthenticated, handleSubmit, errors, submitCount, isRegister, setRegister }) => {
  return (
    <Form isDisplay={!isAuthenticated && !isRegister}>
      <RegisterWrapper>
        <LoginLabel>Login</LoginLabel>
        <FieldLabel>Username</FieldLabel>
        <Input name='username' error={(errors && !!submitCount && errors.username) || ''} />
        <FieldLabel>Password</FieldLabel>
        <PasswordField name='password' error={(errors && !!submitCount && errors.password) || ''} />
        <hr />
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
        <RegistrationNav onClick={() => setRegister(true)}>Click here to register</RegistrationNav>
      </RegisterWrapper>
    </Form>
  );
});
