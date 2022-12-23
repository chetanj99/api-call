import { GET_TEST, GET_TEST_FAIL, GET_TEST_SUCCESS } from "./actionType";

const initialState = {
    test: [],
    loading: false,
    error: {}
}

const test = (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {
                ...state,
                payload: action.payload,
                loading: true,
            }
        case GET_TEST_SUCCESS:
            return {
                ...state,
                test: action.payload,
                loading: false,
            };

        case GET_TEST_FAIL:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state
    }
}
export default test;