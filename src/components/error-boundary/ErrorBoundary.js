import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  componentDidCatch(err) {
    this.setState({
      error: true,
    });
  }

  render() {
    return this.state.error ? <ErrorIndicator /> : this.props.children;
  }
}
