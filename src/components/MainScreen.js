import React from 'react';
import styled, { css } from 'styled-components';

import { mainRunning } from '../asset/images'
import MainForm from './Form';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  height: 85%;
  width: 85%;
  border-radius: 8px;
  background: rgba(195, 227, 212, 0.3);
`;

const LeftImage = styled.img`
    width: 100%;
`;

const Part = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    ${ props => props.portion && css`
        width: ${props.portion}
    `}
`;

export default ({...rest}) => {

  return (
    <Wrapper>
      <Part portion={'40%'}>
        <LeftImage src={mainRunning} alt='aaa' />
      </Part>
      <Part portion={'60%'}>
        <MainForm {...rest} />
      </Part>
    </Wrapper>
)};
