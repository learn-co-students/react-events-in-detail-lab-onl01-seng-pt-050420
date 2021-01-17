// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    grabCoordinates = (e) => {
        const arr = []

        arr.push(e.clientX)
        arr.push(e.clientY)

        this.props.onReceiveCoordinates(arr)
    }
     
    render(){
        return(
            <button onClick={this.grabCoordinates}>Click meeeee</button>
        )
    }
}