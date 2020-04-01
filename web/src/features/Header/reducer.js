import ActionTypes from "./actionTypes";

const defaultState = {
    headerData: null
};

export default function headerReducer(state = defaultState, action) {
    switch (action.type) {
        case ActionTypes.FETCH_HEADER_REQUESTED:
            return {...this.state};
        default:
            return state;
    }
}