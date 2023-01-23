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

    if (isMobile) {
      return (
        <div className="AppMobile">
          <p> Hello, Mobile World </p>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <p> Hello, World </p>
        </div>
      );
    }
  }
}

export default App;
