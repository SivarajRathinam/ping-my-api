import { UPDATE_DATA } from "./constants";

const initialState = {
  data: {},
};

const rootReducer = (state = initialState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case UPDATE_DATA: {
      newState.data = action.payload.response;
      return newState;
    }
    default:
      return state;
  }
};
export default rootReducer;
