import { call, put, takeEvery, all, fork } from "redux-saga/effects";
import { GET_TEST } from "./actionType";
import { getTestFail, getTestSuccess } from "./action";
import { getTestApi } from "../../api/Backend_helper";

function* getTest({ payload }) {
    try {
        const response = yield call(getTestApi, payload.page, payload.perPage);
        yield put(getTestSuccess(response));
    } catch (error) {
        yield put(getTestFail(error));
    }
}

function* watchOnGetTest() {
    yield takeEvery(GET_TEST, getTest);
}

function* testSaga() {
    yield all([
        fork(watchOnGetTest),
    ]);
}

export default testSaga;