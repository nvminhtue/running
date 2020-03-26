import { handleActions } from 'redux-actions';

import { getUserInfo } from '../actions/userAction';

export default handleActions({
  [getUserInfo]: (state, action) => ({
    ...state,
    ...action.payload,
  })
}, {})
