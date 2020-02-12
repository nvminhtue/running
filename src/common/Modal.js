import React from 'react';
import Modal from 'react-modal'
import styled from 'styled-components';

const LogModal = styled(Modal)`
  width: 60%;
  height: 60&;
  border-radius: 8px;
  background-color: white;
`;

export default ({ children,...rest }) => (
  <LogModal>
    { children }
  </LogModal>
)
