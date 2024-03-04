import { takeLeading, put, call } from 'redux-saga/effects';

export const generateWatcher = ({ actionType, service, take = takeLeading }) =>
  function* () {
    const { WATCH } = actionType;
    yield take(WATCH, ({ payload }) => generateWorker({ payload, actionType, service }));
  };

const generateWorker = ({ payload, actionType, service }) =>
  (function* () {
    const { LOAD, SUCCESS, FAIL } = actionType;
    try {
      // LOAD
      yield put({ type: LOAD });
      const response = service ? yield call(service, payload) : payload;
      // ERROR CASE
      if (response?.error) {
        throw new Error(response.message);
      }
      // SUCCESS CASE
      yield put({ type: SUCCESS, response });
      if (payload?.afterSuccess) {
        yield call(payload.afterSuccess, { response });
      }
    } catch (error) {
      console.log('error', error);
      yield put({ type: FAIL, payload: error.message });
      if (payload?.afterFail) {
        yield call(payload.afterFail, { error });
      }
    }
  })();
