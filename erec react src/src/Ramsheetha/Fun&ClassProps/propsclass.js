import React, { Component } from "react";

class Wecolme extends Component {
    render(){
        return (
        <>
        <h1>hello Wecolme {this.props.name} & {this.props.aim}</h1>
        {this.props.children}
        </>
        );
    }
}

//   DESTRUCTING  WAY  OF  PROPS


// class Wecolme extends Component {
//     render(){
//    const {name,heroname} = this.props
//         return (
//         <>
//         <h1>hello Wecolme {name} & {aim}</h1>
//         </>
//         );
//     }
// }


export default Wecolme;