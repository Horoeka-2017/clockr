import React, { Component } from 'react'


class App extends Component { //Josh's Pull
  constructor (props) {
    super(props)
    this.state = {}
    
}


  render () {
    return (
      <div>
        Hey Josh Put Me Here.... TANKS For Comming
        the time is: {new Date().toLocaleTimeString()}
      </div>
    )
  }
}

export default App