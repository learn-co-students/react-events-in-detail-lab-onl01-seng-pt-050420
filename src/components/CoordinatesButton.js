// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

constructor(props) {
    super(props);

    this.state = { x: 0, y: 0 };
  }

  _onMouseMove(e) {
    this.setState({ x: e.screenX, y: e.screenY });
    const arr = [x, y]
    return arr
  }

  render() {
    const { x, y } = this.state;
    return <button onClick={this._onMouseMove.bind(this)}>
      <h1>Mouse coordinates: { x } { y }</h1>
    </button>;
  }
}