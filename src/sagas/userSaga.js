import { all, takeLatest, put, call } from 'redux-saga/effects';

import { userLogin, getUserInfo, registerUser } from '../actions/userAction';
import { UserApi } from '../services/api';

function* userLoginSaga(action) {
  const { meta: { setAuthentication, resetForm, defaultValues, toast }, params: { username, password } } = action.payload
  try {
    const response = yield call([UserApi, UserApi.userLogin], {loginParams: {username: username.toLocaleLowerCase(), password}} );
    console.log(response);
    yield put(getUserInfo(response.data));
    toast.success(`Welcome back ${response.data.name}`);
    setAuthentication(true);
    resetForm(defaultValues);
  } catch(e) {
    toast.error(`${e.response.data.message}`)
  }
}

function* registerUserSaga(action) {
  const { meta: { setRegister, resetForm, defaultValues }, params: { username, password, name } } = action.payload
  try {
    yield call([UserApi, UserApi.registerLogin], {registrationParams: {username: username.toLocaleLowerCase(), password, name}} );
    setRegister(false);
    resetForm(defaultValues);
  } catch(e) {
  }
}

export default function* () {
  yield all([
    takeLatest(userLogin, userLoginSaga),
    takeLatest(registerUser, registerUserSaga),
  ])
}