import { delay, put, fork } from 'redux-saga/effects';

// function* getUserData() {
//   try {
//     const response = yield call(UserRepository.me);
//     const { user } = response;
//     console.log('get user data', JSON.stringify(user));
//     yield put(setUserData(user));
//   } catch (e) {}
// }

export default function* appSaga() {
  // yield takeLatest();
  // yield takeLatest(REQUEST_USER_DATA, getUserData);
}
