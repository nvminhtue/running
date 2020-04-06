import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { MdCancel } from 'react-icons/md';
import { connect as connectToRedux } from 'react-redux';

import { recordSelector } from '../selectors/recordSelector';
import { getDate } from '../services/common';
import { PaginationTable } from '.';

const modalStyle = {
  overlay: {
    position: 'absolute',
    zIndex: '9',
    backgroundColor: 'rgba(0,0,0,0.6)'
  }
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
`;

export const CentralModal = styled(ReactModal).attrs({
  style: modalStyle,
  ariaHideApp: false
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
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: flex-start;
`;

const columns = [
  { dataField: 'runner', text: 'Runner', sort: true, headerClasses: 'outline-none' },
  { dataField: 'off', text: 'Off', sort: true, headerClasses: 'outline-none' },
  { dataField: 'late', text: 'Late', sort: true, headerClasses: 'outline-none' },
  { dataField: 'actual', text: 'Actual Late', sort: true, headerClasses: 'outline-none' },
  { dataField: 'update', text: 'Update Time', sort: true, headerClasses: 'outline-none' }
];

const fetchData = records =>
  records.map(record => {
    return {
      runner: record.runnerName,
      off: record.isOffToday ? 'true' : 'false',
      late: record.inlateTime,
      actual: record.actualInlate,
      update: getDate(record.updated_at)
    };
  });

export default connectToRedux(
  recordSelector,
  {}
)(({ isOpenLog, setOpenLog, records }) => {
  return (
    <CentralModal isOpen={isOpenLog}>
      <CloseButton onClick={() => setOpenLog(false)} />
      <TimeLog>
        <PaginationTable
          keyField='runningRecord'
          data={fetchData(records)}
          columns={columns} 
        />
      </TimeLog>
    </CentralModal>
  );
});
