import React from 'react';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  position: relative;
  width: 100%;
  &:hover {
    .hasError {
      opacity: 1;
      z-index: 9;
    }
  }
`;

const ErrorMessage = styled.div`
  padding: 5px 10px;
  background: red;
  color: lightgray;
  font-size: 0.8em;
  position: absolute;
  white-space: nowrap;
  display: flex;
  bottom: 40px;
  line-height: 1.4;
  left: 0;
  border-radius: 4px;
  opacity: 0;
  z-index: -1;
  transition: all 0.4s;
`;

export default({ error, children }) => (
  <ErrorWrap>
    <ErrorMessage className={!!error ? 'hasError' : ''}>{error}</ErrorMessage>
    {children}
  </ErrorWrap>
);
