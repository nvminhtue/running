import { all, fork } from 'redux-saga/effects';

import userSaga from './userSaga';
import recordSaga from './recordSaga';

export default function * () {
  yield all([
    fork(userSaga),
    fork(recordSaga),
  ])
}