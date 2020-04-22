import { HIT_API_ASYNC, UPDATE_DATA, SET_FETCHING } from "./constants";

export const hitApiAsync = (payload) => {
  return { type: HIT_API_ASYNC, payload };
};

export const updateData = (payload) => {
  return { type: UPDATE_DATA, payload };
};

export const setFetching = (payload) => {
  return { type: SET_FETCHING, payload };
};
