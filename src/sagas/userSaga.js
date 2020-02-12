import { all, takeLatest, put, call } from 'redux-saga/effects';

import { userLogin } from '../actions/userAction';

function* userLoginSaga() {
}

export default function* () {
  yield all([
    takeLatest(userLogin, userLoginSaga),
  ])
}