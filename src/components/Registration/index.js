import React from 'react';
import axios from 'axios';
import { withFormik } from 'formik';
import styled from 'styled-components';

import { Wrapper } from '../MainScreen';
import { Button, Label, Input } from 'reactstrap';

const RegisterWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
`;

const RegistrationLabel = styled.h1`
  margin-top: 20px;
  width: 100%;
  font-family: 'FiraCode-Retina';
`;

const FieldLabel = styled(Label)`
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

const PasswordField = styled(Input)`
  -webkit-text-security: disc;
`;


export default withFormik({
  handleSubmit: ({ resetForm }) => {
    resetForm();
  }
})(({ isAuthenticated }) => {
  return (
    <Wrapper isDisplay={!isAuthenticated}>
      <RegisterWrapper>
        <RegistrationLabel>Registration Form</RegistrationLabel>
        <FieldLabel>Name</FieldLabel>
        <Input name='name' />
        <FieldLabel>Username</FieldLabel>
        <Input name='username' />
        <FieldLabel>Password</FieldLabel>
        <PasswordField name='password' />
        <FieldLabel>Confirm Password</FieldLabel>
        <PasswordField name='confirmPassword' />
        <hr />
        <Button>Submit</Button>
      </RegisterWrapper>
    </Wrapper>
  );
});
