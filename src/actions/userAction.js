import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  userLogin,
  getUserInfo,
  registerUser,
  logout,
  clearStore,
} = createActions({
  [ActionTypes.USER_LOGIN]: payload => payload,
  [ActionTypes.GET_USER_INFO]: payload => payload,
  [ActionTypes.REGISTER_USER]: payload => payload,
  [ActionTypes.LOGOUT]: payload => payload,
  [ActionTypes.CLEAR_STORE]: payload => payload,
})
