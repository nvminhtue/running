import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { userLogin, registerUser, getUserInfo, logout, clearStore } from '../actions/userAction';
import { UserApi } from '../services/api';

function* userLoginSaga(action) {
  const { meta: { setAuthentication, resetForm, defaultValues }, params: { username, password } } = action.payload
  try {
    const response = yield call([UserApi, UserApi.userLogin], {loginParams: {username: username.toLocaleLowerCase() || '', password}} );
    localStorage.setItem('token', response.data.token)
    yield * authSaga({ meta: { setAuthentication } });
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
    toast.error(e.response.statusText);
  }
}

function* authSaga(action) {
  const {
    meta: { setAuthentication }
  } = action;
  try {
    const response = yield call([UserApi, UserApi.userInfo]);
    yield put(getUserInfo(response.data));
    toast.success(`Welcome back ${response.data.name}`);
    setAuthentication(true);
  } catch (e) {
    toast.error(e.response.statusText);
  }
}

function* logoutSaga(action) {
  const { setAuthentication, resetStates } = action.payload.meta;
  try {
    yield put(clearStore())
    localStorage.removeItem('token')
    setAuthentication(false);
    resetStates();
  } catch(e) {
    debugger
  }
}

export default function* () {
  yield all([
    takeLatest(userLogin, userLoginSaga),
    takeLatest(registerUser, registerUserSaga),
    takeLatest(logout, logoutSaga),
  ])
}