
import React from 'react'

export default function Divs(props) {
    console.log(props)
    let divStyle = {}
    if (props.arrV == 1) {
        divStyle = 'box blue';
    } else {
        divStyle = 'box red';
    }
    return (
        <div><div key={props.i} className={`${divStyle}`}>Hello World!</div> <p> asdasdasd </p> </div>
    )
}

