import './App.css';
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render () {
    const { width } = this.state;
    const isMobile = width <= 500;
    const className = (isMobile) ? "AppMobile" : "App";
      return (
        <div className={className}>
          <p> Hello, Mobile World </p>
        </div>
      );
  }
}

export default App;
