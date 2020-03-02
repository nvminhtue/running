import React from 'react';
import axios from 'axios';
import { withFormik } from 'formik';
import styled from 'styled-components';
import { Button, Label } from 'reactstrap';

import { Wrapper } from '../MainScreen';
import { Input } from '../../common'
import { RegistrationValidation } from '../../validation'

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
  enableReinitialize: true,
  validationSchema: RegistrationValidation,
  handleSubmit: (setAuthentication, { resetForm }) => {
    debugger
    setAuthentication(true);
    resetForm();
  }
})(({ isAuthenticated, setAuthentication, handleSubmit, errors, submitCount }) => {
  return (
    <Wrapper isDisplay={!isAuthenticated}>
      <RegisterWrapper>
        <RegistrationLabel>Registration Form</RegistrationLabel>
        <FieldLabel>Name</FieldLabel>
        <Input name='name' error={errors && !!submitCount && errors.name} />
        <FieldLabel>Username</FieldLabel>
        <Input name='username' error={errors && !!submitCount && errors.username} />
        <FieldLabel>Password</FieldLabel>
        <PasswordField name='password' error={errors && !!submitCount && errors.password} />
        <FieldLabel>Confirm Password</FieldLabel>
        <PasswordField name='confirmPassword' error={errors && !!submitCount && errors.confirmPassword} />
        <hr />
        <Button onClick={handleSubmit}>Submit</Button>
      </RegisterWrapper>
    </Wrapper>
  );
});
