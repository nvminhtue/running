import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { createRecord, getAllRecords, saveAllRecords } from '../actions/recordAction';
import { RecordApi } from '../services/api';

function* createRecordSaga(action) {
  const { params: { userId, isOffToday, isLateToday, inlateTime, actualInlate }, meta: { resetForm } }  = action.payload;
  try {
    yield call([RecordApi, RecordApi.createRecord], {recordParams: { userId, isOffToday, isLateToday, inlateTime, actualInlate }});
    toast.success('Chuẩn bị tiền nhé!');
    resetForm();
  } catch(e) {
    console.log(e)
    toast.error(e.response.statusText);
    // do nothing
  }
}

function* getAllRecordsSaga() {
  try {
    const response = yield call([RecordApi, RecordApi.getAllRecords]);
    yield put(saveAllRecords(response.data))
  } catch(e) {
    toast.error(e.response.statusText);
  }
}

export default function* () {
  yield all([
    takeLatest(createRecord, createRecordSaga),
    takeLatest(getAllRecords, getAllRecordsSaga)
  ])
}

