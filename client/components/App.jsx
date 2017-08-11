import React, { Component } from 'react'
import classNames from 'classnames'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      classNameState: 0
    };
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className={}>
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div className='color-container'>
        <div className={classNames('', {})}></div>
        <div></div>

        </div>
        </div>

    );
  }
}

export default App