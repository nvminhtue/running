import { handleActions } from 'redux-actions';

import { saveAllRecords } from '../actions/recordAction';

export default handleActions({
  [saveAllRecords]: (state, action) => ({
    ...state,
    ...action.payload,
  })
}, []);
