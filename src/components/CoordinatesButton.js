// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component  {

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY]);
    };
    
    render() {
        return <button onClick={this.handleClick}>Coords</button>;
    }
}