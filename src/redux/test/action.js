import { GET_TEST, GET_TEST_FAIL, GET_TEST_SUCCESS } from "./actionType"

export const getTest = (page, perPage) => ({
    type: GET_TEST,
    payload: page, perPage,
})

export const getTestSuccess = (test) => ({
    type: GET_TEST_SUCCESS,
    payload: test
})

export const getTestFail = (error) => ({
    type: GET_TEST_FAIL,
    payload: error,
})