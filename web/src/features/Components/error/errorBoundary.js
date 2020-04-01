import {React} from "../../../shared/platform";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, info) {
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        return <span>Something went wrong.</span>;
      }
      return this.props.children;
    }
  }
  