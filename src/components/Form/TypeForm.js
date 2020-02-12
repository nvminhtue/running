import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

import { Form } from '../../common'

const ReactButton = styled(Button)`
  width: 200px;
  height: 40px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

export default ({ setTypeClick, typeClick }) => {
  const offClick = () => {
    setTypeClick(true);
  };

  const lateClick = () => {
    setTypeClick(true);
  };

  return (
    <Form isDisplay={!typeClick}>
      <ReactButton color='warning' onClick={() => offClick()}>HOM NAY OFF</ReactButton>
      <ReactButton color='info' onClick={() => lateClick()}>DI TRE</ReactButton>
    </Form>
  )
};
