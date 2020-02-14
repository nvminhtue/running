import React from 'react';
import styled from 'styled-components';

import { Form } from '../../common';
import { ez } from '../../asset/images';

const Title = styled.h3`
  margin: 40px 0;
  width: 100%;
  font-family: 'FiraCode-Retina';
  display: flex;
  justify-content: center;
`;

const LeftImage = styled.img`
    width: 60%;
`;

export default ({ isGreeting }) => (
  <Form isDisplay={isGreeting === true}>
    <Title>Lmao ez kid, put tank in a mall!</Title>
    <LeftImage src={ez} />
  </Form>
);
