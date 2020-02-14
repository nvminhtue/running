import React, { useState, useEffect } from 'react';
import ReactCanvasNest from 'react-canvas-nest';
import styled from 'styled-components';
import { MdAnnouncement, MdHome } from 'react-icons/md';
import { compose } from 'redux';
import { withFormik } from 'formik';
import { toast } from 'react-toastify';

import Schema from '../validation';
import MainScreen from './MainScreen'
import { Toast, Modal } from '../common';
import { defaultValues } from '../models';

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

const TimeLogButton = styled(MdAnnouncement)`
  position: absolute;
  top: 5px;
  left: 20px;
  font-size: 30px;
  color: black;
  cursor: pointer;
  z-index: 3;

  &:hover {
    color: gray;
  }
`;

const HomeButton = styled(MdHome)`
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 30px;
  color: black;
  cursor: pointer;
  z-index: 3;

  &:hover {
    color: gray;
  }
`;

const Running = ({ handleSubmit, resetForm }) => {
  const [ isOpenLog, setOpenLog ] = useState(false);
  const [ isHome, setHome ] = useState(false);
  const [ typeClick, setTypeClick ] = useState(false);
  const [ timeSubmit, setTimeSubmit ] = useState(false);
  const [ isGreeting, setGreeting ] = useState(false);
  useEffect(() => {
    if (isHome) {
      setOpenLog(false)
      setHome(false)
      setTypeClick(false)
      setTimeSubmit(false)
      setGreeting(false)
      resetForm();
    }
  }, [isHome, resetForm])

  return (
    <AppWrapper>
      <TimeLogButton onClick={() => setOpenLog(true)} />
      <HomeButton onClick={() => setHome(!isHome)} />
      <ReactCanvasNest className='canvasNest' config={{ pointColor: ' 255, 255, 255 ', count: '60' }} style={{ zIndex: 1, minHeight: '100%' }} />
      <MainScreen { ... { isOpenLog, setOpenLog, setHome, isHome, typeClick, setTypeClick, timeSubmit, setTimeSubmit, isGreeting, setGreeting, handleSubmit }} />
      <Modal {...{ isOpenLog, setOpenLog } }/>
      <Toast />
    </AppWrapper>
)};

export default compose(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => defaultValues(),
    validationSchema: Schema,
    handleSubmit: (values, { resetForm }) => {
      toast.success('Chuẩn bị tiền nhé');
      resetForm();
    }
  })
)(Running)