import axios from "axios";
import { CANCEL } from "redux-saga";

export const apiCall = (params, method = "get", data = {}, config = {}) => {
  const axiosParams = { ...params };
  const api = axiosParams.api;
  delete axiosParams.api;
  let cancel;
  const promise = axios({
    method: method,
    url: api,
    params: axiosParams,
    data,
    headers: { ...config },
    cancelToken: new axios.CancelToken((c) => {
      cancel = c;
    }),
  });

  // Cancel the request
  promise[CANCEL] = cancel;
  return promise;
};
