var React = require('react')
var ReactDOM = require('react-dom')
import App from './App'

function helloTemplate(props) {
    return ( < App / > )
}
var data = { name: 'mix' }
var view = helloTemplate(data)

var placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)