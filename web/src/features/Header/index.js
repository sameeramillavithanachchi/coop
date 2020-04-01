import {
    React,
    Component,
    Provider,
    Link,
    connect,
    bindActionCreators
} from "../../shared/platform";
import * as actions from "./actions";

function mapStateToProps(state) {
    return {
        ...state.header
    };
}

function mapActionCreatorsToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Header</h1>
        );
    }
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Header);
