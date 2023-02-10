import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class HocSpread extends Component {
        
  render() {
   const {count,increCount} = this.props
    return (
      <div>
        <h2 onMouseOverCapture={increCount}>{this.props.name}Hover {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(HocSpread,10)