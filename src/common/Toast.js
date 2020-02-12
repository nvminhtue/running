// @flow
import React from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

const ToastContainerStyle = styled.div`
  position: absolute;
`;

export default () => (
  <ToastContainerStyle>
    <ToastContainer
      position="top-right"
      newestOnTop
      autoClose={2500}
      hideProgressBar
    />
  </ToastContainerStyle>
);
