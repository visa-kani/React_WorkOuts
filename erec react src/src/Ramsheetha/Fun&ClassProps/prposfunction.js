import React from 'react';
// import props from "react";
// import { Component } from 'react';

// function Greet(){
//     return(
//         <h1>Hello </h1>
//     );
// }
export const Greet = (props) => {
    console.log(props)
    return(
        <>
            <h1>Hello {props.name} {props.aim} </h1>
            {props.children}
        </>
        );
}

//  Destructing in a parameter

// FIRST   WAY  OF  DESTRUCTING  !!!

//  const Greet = ({name,aim,children}) => {
//     return(
//         <>
//             <h1>Hello {name} {aim} </h1>
//             {children}
//         </>
//         );
// }

//  SECOND  WAY  OF  DESTRUCTING  !!!

//  const Greet = props => {
//     const {name, heroname} = props
//     return(
//         <>
//             <h1>Hello {name} {aim} </h1>
//             {children}
//         </>
//         );
// }

//export default Greet;