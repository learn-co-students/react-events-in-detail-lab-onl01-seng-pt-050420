import React from 'react'

export default class CoordinatesButton extends React.Component {
    buttonHandler = (event) => {
        let array = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(array)
    }
    
    render() {
        return(
            <button onClick={this.buttonHandler}>Click Me!</button>
        )
    }
}