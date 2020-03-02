import React, { useState } from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import styled from 'styled-components';

import MainScreen from './MainScreen'
import Registration from './Registration'
import { Toast } from '../common';

const AppWrapper = styled.div`
  padding: 0;
  margin: 0;
  border: none;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default () => {
  const [ isAuthenticated, setAuthenticaton ] = useState(false);

  return (
    <AppWrapper>
      <ReactCanvasNest className='canvasNest' config={{ pointColor: ' 255, 255, 255 ', count: '60' }} style={{ zIndex: 1, minHeight: '100%' }} />
      <Registration {...{ setAuthenticaton, isAuthenticated }} />
      <MainScreen { ... { isAuthenticated }} />
      <Toast />
    </AppWrapper>
)};
