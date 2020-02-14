import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'formik';
import { Button } from 'reactstrap';

import { Form } from '../../common'

const ReactButton = styled(Button)`
  width: 200px;
  height: 40px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
`;

const TypeForm = ({ setTypeClick, typeClick, handleSubmit, setGreeting, isGreeting, setHome, isHome, formik: { setFieldValue } }) => {
  useEffect(() => {
    setHome(false)
  }, [setHome]);

  const offClick = () => {
    setFieldValue('isOffToday', true);
    setGreeting(true);
    handleSubmit();
  };

  const lateClick = () => {
    setTypeClick(true);
    setFieldValue('isLateToday', true);
    setFieldValue('inlateTime', '');
  };

  return (
    <Form isDisplay={(!typeClick && !isGreeting) || isHome}>
      <ReactButton color='warning' name='isOffToday' onClick={() => offClick()}>TODAY NO ME</ReactButton>
      <ReactButton color='info' name='isLateToday' onClick={() => lateClick()}>AKO LATE</ReactButton>
    </Form>
  )
};

export default connect(TypeForm);
