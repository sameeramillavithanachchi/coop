import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading-bar";
import header from "../features/Header/reducer";

export default combineReducers({
    loadingBar: loadingBarReducer,
    header
}); 
