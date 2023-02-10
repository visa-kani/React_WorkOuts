import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
 
  render() {
    const {count,increCount} = this.props
    return (
      <button onClick={() =>increCount()}>{this.props.name}clicked {count} Times</button>
    )
  }
}

export default  UpdatedComponent(ClickCounter,5)