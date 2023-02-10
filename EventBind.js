import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'hello'
      }

      this.clickHandler = this.clickHandler.bind(this)   /* -----  3rd Approrach 1st step */
    }
    // clickHandler(){                                // it should be uncomment for ! to 3 apporaches
    //     this.setState({
    //         message: "goodbye!!!"
    //     })
        // console.log(this);
    // }

    clickHandler = () =>        //-------this is used  for the 4th Apporoch
    {
        this.setState({
            message:'goodbye!!!'
        })
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button>   ------  1st Apporach */}
        {/* <button onClick={() => this.clickHandler()}>click</button>      ------  2nd Apporach */}
         <button onClick={this.clickHandler}>Click</button>            { /*------  3rd Apporach way of possiblity display same for 4th Apporach */}
      </div>
    )
  }
}

export default EventBind