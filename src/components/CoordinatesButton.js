import React, { Component } from 'react'

class CoordinatesButton extends Component {

    render() {
        return (
            <div>
                <button onClick={(event) => {
                    this.props.onReceiveCoordinates([event.clientX, event.clientY])
                }}>Find mouse coordinates</button>
            </div>
        )
    }
}

export default CoordinatesButton
