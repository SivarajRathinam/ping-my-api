import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from "./saga.js";

const sagaMiddleware = createSagaMiddleware();
let middleWare = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleWare = [...middleWare, logger];
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));
sagaMiddleware.run(rootSaga);
export default store;
