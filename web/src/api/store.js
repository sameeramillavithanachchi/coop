import {createStore, applyMiddleware} from "redux";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import createSagaMiddleware from "redux-saga";
import { loadingBarMiddleware } from "react-redux-loading-bar";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, loadingBarMiddleware()));
sagaMiddleware.run(rootSaga);
export default store;
