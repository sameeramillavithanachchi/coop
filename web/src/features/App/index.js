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
    CSSTransition
} from "../../shared/platform";
import Header from "../Header";
import Footer from "../Footer";
import About from "../About";
import LoadingBar from "react-redux-loading-bar";
import ErrorBoundary from "../Components/error/errorBoundary";

const routerCollection = [
    {
        path: "/about",
        component: About
    }
];

export default class App extends Component {
    constructor() {
        super();
    }

    renderRoutes() {
        return routerCollection.map((element) => {
            return (<Route path={element.path} component={element.component}/>);
        });
    }

    render() {
        return (
            <Router >
                <LoadingBar
                        style={{
                        backgroundColor: "red",
                        height: "4px",
                        opacity: "1",
                        zIndex: "100000",
                        top:0
                    }}/>
                <ErrorBoundary>
                    <Header/>
                    <main>
                        <Route
                            render={({location}) => (
                            <TransitionGroup className="transition-group">
                                <CSSTransition
                                    key={location.pathname}
                                    timeout={{
                                    enter: 300,
                                    exit: 300
                                }}
                                    classNames={"fade"}>
                                    <Switch location={location}>
                                        {this.renderRoutes()}
                                        <Redirect from="/" to="/about"/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        )}></Route>
                    </main>
                </ErrorBoundary>
                <Footer/>
            </Router>
        );
    }
}
