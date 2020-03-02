import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { compose } from 'redux';
import { withFormik } from 'formik';
import { toast } from 'react-toastify';
import { MdAnnouncement, MdHome } from 'react-icons/md';

import { MainValidation } from '../../validation';
import { defaultValues } from '../../models';
import MainForm from '../Form';
import { mainRunning } from '../../asset/images'
import { Modal } from '../../common';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 2;
  height: 85%;
  width: 85%;
  border-radius: 8px;
  background: rgba(195, 227, 212, 0.3);

  ${ props => !props.isDisplay && css`
    display: none;
  `}
`;

const LeftImage = styled.img`
    width: 100%;
`;

const Part = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    ${ props => props.portion && css`
        width: ${props.portion}
    `}
`;

const TimeLogButton = styled(MdAnnouncement)`
  position: absolute;
  top: -60px;
  left: -70px;
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
  top: -60px;
  right: -70px;
  font-size: 30px;
  color: black;
  cursor: pointer;
  z-index: 3;

  &:hover {
    color: gray;
  }
`;

export default compose(
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => defaultValues(),
    validationSchema: MainValidation,
    handleSubmit: (values, { resetForm }) => {
      toast.success('Chuẩn bị tiền nhé');
      resetForm();
    }
  })
)(({ isAuthenticated, handleSubmit, resetForm, ...rest }) => {
  const [isOpenLog, setOpenLog] = useState(false);
  const [isHome, setHome] = useState(false);
  const [typeClick, setTypeClick] = useState(false);
  const [timeSubmit, setTimeSubmit] = useState(false);
  const [isGreeting, setGreeting] = useState(false);

  useEffect(() => {
    if (isHome) {
      setOpenLog(false);
      setHome(false);
      setTypeClick(false);
      setTimeSubmit(false);
      setGreeting(false);
      resetForm();
    }
  }, [isHome, resetForm]);

  return (
    <Wrapper isDisplay={isAuthenticated}>
      <TimeLogButton onClick={() => setOpenLog(true)} />
      <HomeButton onClick={() => setHome(!isHome)} />
      <Modal {...{ isOpenLog, setOpenLog }} />
      <Part portion={'40%'}>
        <LeftImage src={mainRunning} alt='aaa' />
      </Part>
      <Part portion={'60%'}>
        <MainForm {...{ handleSubmit, isOpenLog, setOpenLog, setHome, isHome, typeClick, setTypeClick, timeSubmit, setTimeSubmit, isGreeting, setGreeting, ...rest }} />
      </Part>
    </Wrapper>
  );
});
