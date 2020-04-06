import React, { useState, useEffect } from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import styled from 'styled-components';
import { connect } from 'react-redux';

import MainScreen from './MainScreen'
import Auth from './Auth'
import { Toast } from '../common';
import { userSelector } from '../selectors/userSelector';

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

export default connect(userSelector)(({ userId }) => {
  const [ isAuthenticated, setAuthentication ] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token') && userId) {
      setAuthentication(true);
    }
  }, [setAuthentication, userId]);

  return (
    <AppWrapper>
      <ReactCanvasNest className='canvasNest' config={{ pointColor: ' 255, 255, 255 ', count: '60' }} style={{ zIndex: 1, minHeight: '100%' }} />
      <Auth {...{ setAuthentication, isAuthenticated }} />
      <MainScreen { ... { isAuthenticated, setAuthentication }} />
      <Toast />
    </AppWrapper>
)});
