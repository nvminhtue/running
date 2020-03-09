import React from 'react';
import styled from 'styled-components';
import { connect } from 'formik';

import TypeForm from './TypeForm';
import TimeForm from './TimeForm';
import Greeting from './Greeting';

const FormWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 20px;
  width: 100%;
  font-family: 'FiraCode-Retina';
  display: flex;
  justify-content: center;
`;

const MainForm = ({...rest }) => {
  return (
    <FormWrapper>
      <Title>RUN FOR YOUR LIFE</Title>
      <TypeForm {... rest } />
      <TimeForm { ...rest } />
      <Greeting {...rest } />
    </FormWrapper>
)};

export default connect(MainForm);
