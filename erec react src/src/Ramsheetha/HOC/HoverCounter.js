import React, { Component } from 'react'

class HoverCounter extends Component {
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
    increCount(){
        this.setState( {
            count : this.state.count + 1
        },
        ()=> {console.log('HoverTimes',this.state.count)}
    
        )
        }
  render() {
    const count = this.state.count
    return (
      <div>
        <h2 onMouseOverCapture={() => this.increCount()}>{this.props.name}Hover {count} times</h2>
      </div>
    )
  }
}

export default HoverCounter