import { combineReducers } from 'redux';

import user from './userReducer';
import record from './recordReducer';

export default combineReducers({
  user,
  record,
});
