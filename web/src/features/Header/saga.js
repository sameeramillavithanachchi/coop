import ActionTypes from "./actionTypes";
import {
    all,
    delay,
    put,
    takeLatest,
    takeEvery,
    call,
    fork
} from "redux-saga/effects";

export function* fetchHeader() {
    yield put({ type: "GLOBAL_ERROR", payLoad: e });
}

export default function* root() {
    yield all([
        takeLatest(ActionTypes.FETCH_HEADER_REQUESTED, fetchHeader),
    ]);
}