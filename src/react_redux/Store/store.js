import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { userLoginReducer } from "../Reducers/userLoginReducer";
import logger from "redux-logger";
import userloginSaga from "../Redux_saga/sagas";
import createSagaMiddleware from "redux-saga";

const sagamiddleware = createSagaMiddleware();
const store = configureStore(
  {
    reducer: userLoginReducer,
    middleware: () => [sagamiddleware, logger],
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

sagamiddleware.run(userloginSaga);
export default store;
