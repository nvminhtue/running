import { createActions } from 'redux-actions';

import { ActionTypes } from '../constants';

export const {
  userLogin,
  getUserInfo,
  registerUser,
} = createActions({
  [ActionTypes.USER_LOGIN]: payload => payload,
  [ActionTypes.GET_USER_INFO]: payload => payload,
  [ActionTypes.REGISTER_USER]: payload => payload,
})
