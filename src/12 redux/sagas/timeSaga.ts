import { all, fork, takeEvery, call, put } from "redux-saga/effects";
import TimeActionCreator, { TIME_ACTION } from "../redux/TimeActionCreator";

const changeTimeApi = () => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve({ currentTime: new Date() });
    }, 2000)
  );
};

function* changeTime() {
  try {
    const res: { currentTime: Date } = yield call(changeTimeApi);
    yield put(TimeActionCreator.changeTimeCompleted(res.currentTime));
  } catch (error) {
    console.error(error);
    yield put(TimeActionCreator.changeTimeFailed());
  }
}

function* watcher_changeTime() {
  yield takeEvery(TIME_ACTION.CHANGE_TIME_REQUEST, changeTime);
}

export default function* timeSaga() {
  yield all([fork(watcher_changeTime)]);
}
