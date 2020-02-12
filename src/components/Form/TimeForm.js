import React from 'react';
import styled from 'styled-components';
import { Input, Button } from 'reactstrap';

import { Form } from '../../common'

const ReactButton = styled(Button)`
  width: 100px;
  height: 40px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

const ReactInput = styled(Input)`
  width: 200px;
  height: 40px;
  margin: 0 10px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
  display: flex;
  align-self: center;
`

const Label = styled.h5`
  font-family: 'FiraCode-Retina';
  margin: 0;
  width: 100%;
  text-align: center;
`;

export default ({ setTimeSubmit, timeSubmit, typeClick }) => {
  const clickTime = () => {
    setTimeSubmit(true);
  };

  return (
    <Form isDisplay={typeClick === true && timeSubmit === false}>
      <Label>Input inlate time (minutes)</Label>
      <div style={{ display: 'flex', 'justifyContent': 'center', width: '100%' }}>
        <ReactInput placeholder={"ex: 10"} />
        <ReactButton color='info' onClick={() => clickTime()}>Submit</ReactButton>
      </div>
    </Form>
  )
};
