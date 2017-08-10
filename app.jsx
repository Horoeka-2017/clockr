import React from 'react'
import { connect } from 'react-redux'

export class BinTimer extends React.Component {
    constructor (props){
        this.state = {secondsElapsed : 0}
    }
}
ticker() {
this.setState(prevState => ({
    secondsElapsed:prevState.secondsElapsed + 1
}))
}

componentDidMount(){
    this.interval = setInterval(() => this.ticker(), 1000)
}
 componentWillUnmount(){
     clearInterval(this.interval)
 }

 render() {
    return React.createElement(
      this.state.secondsElapsed
    )}