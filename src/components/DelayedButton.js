// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    constructor() {
    super()
    this.whenClicked = this.whenClicked.bind(this);
    }

    whenClicked(event) {
        event.persist()
        setTimeout( () => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return(
            <button onClick={this.whenClicked}>Delayed</button>
        )
    }
}

export default DelayedButton;