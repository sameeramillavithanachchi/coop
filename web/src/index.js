import {
    React,
    Component,
    Router,
    Route,
    Switch,
    Provider,
    connect,
    Redirect,
    bindActionCreators,
    TransitionGroup,
    CSSTransition,
    render
} from "./shared/platform";
import App from "./features/App";
import store from "../src/api/store";

const wrapper = document.getElementById("react-container");
wrapper
    ? render(
        <Provider store={store}><App/></Provider>, wrapper)
    : false;