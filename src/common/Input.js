import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'reactstrap';
import { connect } from 'formik';

import { ErrorTooltip } from './'

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
    <ErrorTooltip {...rest}>
      <CommonInput
        {...rest}
        onChange={e => handleInput(e.target.value)}
      />
    </ErrorTooltip>
  );})
