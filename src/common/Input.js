import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'reactstrap';
import { connect } from 'formik';

const CommonInput = styled(Input)`
  ${ props => props.error && css`
    border: 1px solid red;
  ` }
`;

export default connect(({ formik: { setFieldValue }, name, ...rest}) => {
  const handleInput = (value) => {
    setFieldValue(name, value)
  }

  return (
    <CommonInput {...rest} onBlur={e => handleInput(e.target.value)} />
)})