import {
    all,
    delay,
    put,
    takeLatest,
    takeEvery,
    call,
    fork
} from "redux-saga/effects";
import headerSaga from "../features/Header/saga";

const sagas = [
    headerSaga
];

export default function* root() {
    yield all(sagas.map(saga => call(saga)));
}