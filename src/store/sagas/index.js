import { all, fork } from 'redux-saga/effects';
import * as auth from './auth';
import * as media from './media';
import * as redirects from './redirects';

const combineSagas = { ...auth, ...media, ...redirects };

export default function* rootSaga() {
  yield all(Object.values(combineSagas).map((saga) => fork(saga)));
}
