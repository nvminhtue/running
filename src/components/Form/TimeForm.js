import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'formik';
import { Input } from 'reactstrap';
import { toast } from 'react-toastify';

import { Form } from '../../common'
import { TypeButton } from './TypeForm';

const ReactInput = styled(Input)`
  width: 400px;
  height: 50px;
  margin: 0 10px;
  font-family: 'FiraCode-Retina';
  font-weight: 400;
  display: flex;
  align-self: center;
`

const Label = styled.h5`
  font-family: 'FiraCode-Retina';
  margin: 0 0 10px 0;
  width: 100%;
  text-align: center;
`;

const TimeForm = ({ setTimeSubmit, timeSubmit, typeClick, handleSubmit, setGreeting, formik: { setFieldValue, errors, submitCount, isValid, values } }) => {
  const clickTime = () => {
    handleSubmit();
    if ( isValid ) {
      setTimeSubmit(true);
      setGreeting(true);
    }
  };

  useEffect(() => {
    if (!!submitCount && !!Object.keys(errors).length) {
      toast.warn(errors.inlateTime);
    } 
  }, [errors, submitCount])

  return (
    <Form isDisplay={typeClick === true && timeSubmit === false}>
      <Label>Me come late (minutes)</Label>
      <div style={{ display: 'flex', 'justifyContent': 'center', width: '100%' }}>
        <ReactInput name='inlateTime' placeholder={"e.g: 10 - number dude, number!"} value={values.inlateTime} onChange={ (e) => setFieldValue('inlateTime', e.target.value) } />
        <TypeButton type='submit' onClick={() => clickTime()}>Pay me</TypeButton>
      </div>
    </Form>
  )
};

export default connect(TimeForm)
