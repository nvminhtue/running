import React, { useState } from 'react';
import styled from 'styled-components';

import TypeForm from './TypeForm';
import TimeForm from './TimeForm';
import TimeLog from './TimeLog';

import { Modal } from '../../common';

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

export default () => {
  const [ typeClick, setTypeClick ] = useState(false);
  const [ timeSubmit, setTimeSubmit ] = useState(false);
  return (
    <FormWrapper>
      <Title>RUN FOR YOUR LIFE</Title>
      <TypeForm {...{ setTypeClick, typeClick } } />
      <TimeForm {...{ setTimeSubmit, timeSubmit, typeClick } } />
      <Modal isOpen={typeClick && timeSubmit}>
        <TimeLog />
      </Modal>
    </FormWrapper>
)};