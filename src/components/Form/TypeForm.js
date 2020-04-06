import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'formik';

import { Form } from '../../common'

export const TypeButton = styled.button`
  width: 200px;
  height: 50px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
  padding-top: 3px;
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;

  &:hover {
    color: #ffffff !important;
    ${props => {
      if(props.type) {
      switch (props.type) {
        case 'warning':
          return css`
            background: #f6b93b;
            border-color: #f6b93b !important;
          `;
        case 'danger':
          return css`
            background: #ff0000;
            border-color: #ff0000 !important;
          `;
        default:
           return css`
             background: #00cc00;
             border-color: #00cc00 !important;
           `;
      }
    }}}
    transition: all 0.4s ease 0s;
  }
`;

const TypeForm = ({ setTypeClick, typeClick, handleSubmit, setGreeting, isGreeting, setHome, isHome, formik: { setFieldValue, resetForm } }) => {
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
      <TypeButton type='danger' name='isOffToday' onClick={() => offClick()}>TODAY NO ME</TypeButton>
      <TypeButton type='warning' name='isLateToday' onClick={() => lateClick()}>AKO LATE</TypeButton>
    </Form>
  )
};

export default connect(TypeForm);
