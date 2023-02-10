import React, { Component } from "react";

class Message extends Component {

    constructor(){
        super()
        this.state = {
            message: "Hello Guys"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank You For Verify"
        })
    }

    render(){
        return (
        <>
        <h1>{this.state.message} </h1>
        <button onClick={()=> this.changeMessage()}>Verify</button>
        </>
        );
    }
}

export default Message;