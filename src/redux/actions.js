import {
  SET_METHOD,
  SET_URL,
  SET_PARAMS,
  SET_PAYLOAD,
  SET_HEADERS,
  HIT_API_ASYNC,
  UPDATE_DATA,
} from "./constants";

export const hitApiAsync = (payload) => {
  return { type: HIT_API_ASYNC, payload };
};

export const updateData = (payload) => {
  return { type: UPDATE_DATA, payload };
};
