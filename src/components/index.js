import React from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import styled from 'styled-components';

import MainScreen from './MainScreen'

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

export default () => (
  <AppWrapper>
    <ReactCanvasNest className='canvasNest' config={{ pointColor: ' 255, 255, 255 ', count: '88' }} style={{ zIndex: 1, minHeight: '100%' }} />
    <MainScreen />
  </AppWrapper>
);
