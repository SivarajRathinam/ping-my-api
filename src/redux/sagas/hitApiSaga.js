import { takeLatest, call, delay, put } from "redux-saga/effects";
import { HIT_API_ASYNC } from "../constants";
import { updateData, setFetching } from "../actions";
import { apiCall } from "../../components/apiCall";

function* hitApiAsyc(action) {
  const payload = { ...action.payload };
  try {
    yield put(setFetching(true));
    const url = payload?.url ?? "";
    const method = payload?.method ?? "GET";
    const params = payload?.params ?? {};
    const payloadData = payload?.payload ?? {};
    const headers = payload?.header ?? {};
    const data = yield call(
      apiCall,
      { api: url, ...params },
      method,
      payloadData,
      headers
    );

    yield put(
      updateData({
        response: data,
      })
    );
  } catch (error) {
    yield put(
      updateData({
        response: {
          data: error?.data ?? { error: "cor error occured" },
          status: error?.data?.status ?? error?.status ?? "",
        },
      })
    );
  } finally {
    yield put(setFetching(false));
  }
}

export function* hitApiWatcher() {
  yield takeLatest(HIT_API_ASYNC, hitApiAsyc);
}
