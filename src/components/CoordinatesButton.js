// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
  constructor() {
    super();
    this.findClickCoords = this.findClickCoords.bind(this);
  }

  findClickCoords(event) {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

  render() {
    return(
      <button onClick={this.findClickCoords}>Coordinates</button>
    );
  }
}

export default CoordinatesButton;