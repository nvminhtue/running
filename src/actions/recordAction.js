import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  createRecord,
  getAllRecords,
  saveAllRecords,
} = createActions({
  [ActionTypes.CREATE_RECORD]: payload => payload,
  [ActionTypes.GET_ALL_RECORDS]: payload => payload,
  [ActionTypes.SAVE_ALL_RECORDS]: records => ({ records: records || [] }),
})