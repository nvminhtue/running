import React, { useState } from 'react';

import { Wrapper } from '../MainScreen';
import RegistrationForm from './registration';
import LoginForm from './login';

export default ({ isAuthenticated, ...rest }) => {
  const [isRegister, setRegister] = useState(false);
  return (
    <Wrapper isDisplay={!isAuthenticated}>
      <RegistrationForm {... { isRegister, setRegister, ...rest }} />
      <LoginForm {... { isRegister, setRegister, ...rest }} />
    </Wrapper>
  );
};
