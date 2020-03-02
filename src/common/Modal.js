import React from 'react';
import ReactModal from 'react-modal'
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md'
import { connect } from 'formik';

const modalStyle = {
  overlay: {
    position: 'absolute',
    zIndex: '9',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
};

const CloseButton = styled(MdCancel)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 3;
  font-size: 30px;
  color: white;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`

export const CentralModal = styled(ReactModal).attrs({
  style: modalStyle,
  ariaHideApp: false,
})`
  display: flex;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
`;

const TimeLog = styled.div`
  background: white;
  height: 80%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-content: flex-start;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  cursor: pointer;
`;

const Head = styled.th`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Detail = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Row = styled.tr`
  &:hover {
    background-color:#f5f5f5;
  }
`;

export default connect(({ isOpenLog, setOpenLog }) => {
  return (
    <CentralModal isOpen={isOpenLog}>
      <CloseButton onClick={() => setOpenLog(false)} />
      <TimeLog>
        <Table>
          <Row>
            <Head>Runner</Head>
            <Head>Off</Head>
            <Head>Late</Head>
            <Head>Actual Late</Head>
          </Row>
          <Row>
            <Detail>Pato</Detail>
            <Detail>false</Detail>
            <Detail>8</Detail>
            <Detail>10</Detail>
          </Row>
        </Table>
      </TimeLog>
    </CentralModal>
  )
})
