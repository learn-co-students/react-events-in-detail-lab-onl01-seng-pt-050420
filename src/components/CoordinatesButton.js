import React from 'react';

export default class CoordinatesButton extends React.Component{

    mouseCoordinates = (e) =>{
        let arr = []
        arr.push(e.clientX)
        arr.push(e.clientY)
        
       this.props.onReceiveCoordinates(arr)

    }

    render(){
        return(
           <button onClick={this.mouseCoordinates}>Click!</button>
        )
    }
}
