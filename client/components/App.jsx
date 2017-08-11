import React, { Component } from 'react'

import Binary from './Binary'
import Divs from './Divs'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
      classNameState: 0,

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
      <div >
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        <div>Binary: {Binary(this.state.secondsElapsed)} </div>
        <div className='container'>
          {Binary(this.state.secondsElapsed).split('').map((arrV, i, arri) => {
            return(<Divs arrV={arrV} i={i} arri={arri} />
          )})}
        </div>
      </div>

    );
  }
}

export default App
