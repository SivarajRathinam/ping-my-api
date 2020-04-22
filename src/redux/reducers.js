import { UPDATE_DATA, SET_FETCHING } from "./constants";

const initialState = {
  data: {},
  isFetching: false,
};

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case UPDATE_DATA: {
      newState.data = action.payload.response;
      return newState;
    }
    case SET_FETCHING:
      newState.isFetching = action?.payload ?? false;
      return newState;
    default:
      return state;
  }
};
export default rootReducer;
