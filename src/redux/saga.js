import { all } from "redux-saga/effects";
import { hitApiWatcher } from "./sagas";
export default function* rootSaga() {
  yield all([hitApiWatcher()]);
}
