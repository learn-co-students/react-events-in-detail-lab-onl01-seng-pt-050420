import React, { Component } from "react";

export default class DelayedButton extends Component 
{

  coordinates = (e) => {
    let x = e.clientX;
    let y = e.clientY;
    let coords = [x, y];
    this.props.onReceiveCoordinates(coords);
  }

  render() {
    return (
      <button onClick={this.coordinates}></button>
    )
  }
}