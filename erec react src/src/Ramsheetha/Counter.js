import React, { Component } from 'react';


class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment() {
        this.setState({
           count: this.state.count +1
        } 
        
        ,()=> {console.log('Callback Value',this.state.count)}

        )
    //    console.log(this.state.count);
    }

  render() {
    return (
      <>
        <p>count - {this.state.count}</p>
        <button onClick= { () => this.increment()}>Increment</button>
      </>
    );
  }
}

export default Counter;