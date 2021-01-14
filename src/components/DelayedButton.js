import React, { Component } from "react";

export default class CoordinatesButton extends Component 
{
  setTimeout = (e) => {
    e.persist();
    this.props.delay;
    this.props.onDelayedClick(e);
  }

  render() {
    return (
      <button onClick={this.setTimeout}></button>
    )
  }
}