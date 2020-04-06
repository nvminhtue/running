import { handleActions } from 'redux-actions';

import { getUserInfo, clearStore } from '../actions/userAction';

const initialState = {
  user: undefined,
  record: undefined,
};

export default handleActions({
  [getUserInfo]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [clearStore]: () => ({
    ...initialState,
  })
}, initialState)
