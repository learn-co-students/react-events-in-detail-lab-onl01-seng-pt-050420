import { render } from 'enzyme'
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    callback = (e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])

    render() {
        return (
            <button onClick={this.callback}>Coordinates Button</button>
        )
    }
}