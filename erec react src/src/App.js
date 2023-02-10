// import logo from './logo.svg';
// import { Component } from 'react';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import OwlCarousel from './Ramsheetha/OwlCarousel';

// ----------------------------------------------------------------------------------------REACT HOOKS IMPORTS ARE HERE!!!!!

// ----------------------------------------------------------------------------------------HOOKS USESTATE
// import ClassCounter from './Ramsheetha/REACT HOOKS/UseState/ClassCounter';
// import HookCounter from './Ramsheetha/REACT HOOKS/UseState/HookCounter';                           // simple example of useState
// import HookCounterTwo from './Ramsheetha/REACT HOOKS/UseState/HookCounterTwo';                     // useState with prevState
// import HookCounterThree from './Ramsheetha/REACT HOOKS/UseState/HookCounterThree';                 // Object in useState
// import HookCounterFour from './Ramsheetha/REACT HOOKS/UseState/HookCounterFour';                    // Array in useState

// ----------------------------------------------------------------------------------------HOOKS USEEFFECT

// import IntervalClassCounter from './Ramsheetha/REACT HOOKS/UseEffect/IntervalClassCounter';
// import IntervalHookCounter from './Ramsheetha/REACT HOOKS/UseEffect/IntervalHookCounter';
// import HookMouse from './Ramsheetha/REACT HOOKS/UseEffect/HookMouse';                          ------Mouse Move, [] pass empty array in useeffect's 2nd parameter
// import MouseContainer from './Ramsheetha/REACT HOOKS/UseEffect/MouseContainer';                ------
// import ClassMouse from './Ramsheetha/REACT HOOKS/UseEffect/ClassMouse';                        ------Mouse Move the class components an take in itself--
// import ClassCounterOne from './Ramsheetha/REACT HOOKS/UseEffect/ClassCounterOne';              ------class component consier itself
// import HookCounterOne from './Ramsheetha/REACT HOOKS/UseEffect/HookCounterOne';                ------Click event[] pass empty array wid value in useeffect's 2nd parameter

// -------------------------------------------------------------------------------------HOOKS USECONTEXT

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()
// import ComponentC from './Ramsheetha/REACT HOOKS/UseContext/ComponentC';

//-------------------------------------------------------------------------------------imports for usecontext
// import ComponentC from './Ramsheetha/Context/ComponentC';
// import { Userprovider } from './Ramsheetha/Context/UserContext';
//  ------------------------------------------------------------------------------------imports for Render Props
// import ClickCounterTwo from './Ramsheetha/RenderProps/ClickCounterTwo';
// import Counter from './Ramsheetha/RenderProps/Counter';
// import HoverCounterTwo from './Ramsheetha/RenderProps/HoverCounterTwo';
// import User from './Ramsheetha/RenderProps/User';
//  ------------------------------------------------------------------------------------imports for HOC
// import HoverCounter from './Ramsheetha/HOC/HoverCounter';
// import ClickCounter from './Ramsheetha/HOC/ClickCounter';
// import HocSpread from './Ramsheetha/HOC/HocSpreadDf';
//  ------------------------------------------------------------------------------------imports for Ref
// import FocusInput from './Ramsheetha/REF/FocusInput';
// import Input from './Ramsheetha/REF/Input';
// import RefDmo from './Ramsheetha/REF/RefDmo';
// import RefDemo from './Ramsheetha/REF/RefDemo';
//  ------------------------------------------------------------------------------------imports for Styling methods
// import Inline from './Ramsheetha/Inline';
// import StyleSheet from './Ramsheetha/StyleSheet';
//  ------------------------------------------------------------------------------------imports for List render
// import NameList from './Ramsheetha/Listrender/NameList1';
// import NameList2 from './Ramsheetha/Listrender/NameList2';
// import Person from './Ramsheetha/Listrender/Person';

// import UserGreeting from './Ramsheetha/UserGreeting';
// import ParentComponent from './Ramsheetha/ParentComponent';
// import ClassClick from './Ramsheetha/ClassClick';
// import React from 'react';
// import FunctionClick from './Ramsheetha/FunctionClick';
// import Garage from './Ramsheetha/demo';
// import Goal from './Ramsheetha/demo';
// import Fav from './Ramsheetha/demo1';
// import {Greet} from "./Ramsheetha/funcomponent";
// import Wecolme from './Ramsheetha/classcomponent';
// import Jsxc from './Ramsheetha/jsx';
// import {Greet} from "./Ramsheetha/Fun&ClassProps/prposfunction";
// import Wecolme from "./Ramsheetha/Fun&ClassProps/propsclass";
// import Message from './Ramsheetha/stateinclass';
// import Counter from './Ramsheetha/Counter';
// import Counter from './Ramsheetha/counter5';
// import EventBind from './Ramsheetha/EventBind';


// -----------------------------------------------------------------------------------TESTING components

// import Test from './Ramsheetha/Testing/Test';

// import Slider from './Ramsheetha/OwlCarousel';

function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
     
      {/* <Goal/>
      <Garage/>
      <Fav />
      <Greet/>
      <Wecolme/>
      <Jsxc/> */}

 {/* -----------------------------------------------------------------Props in function components &childern */}
{/* 
      <Greet name="Mubi" aim="CA">
        <p>im a children</p>
      </Greet>
      <Greet name="Ramu" aim="Find out Seetha">
        <button>Verify</button>
      </Greet>
      <Greet name="Seetha " aim="Marry Ram"/> */}

 {/* -----------------------------------------------------------------Props in class components &childern      */}

   {/* <Wecolme name="Mubi" aim="CA">
   <p> iam a childern</p></Wecolme>
   <Wecolme name="Ramu" aim="Find out Seetha"></Wecolme>
   <Wecolme name="Seetha " aim="Marry Ram"></Wecolme> */}

   {/* --------------------------------------------------------------------How state works in class!!! 
   <Message/> */}

   {/* --------------------------------------------------------------------How setstate works in class!!! 
   <Counter/> */}

   {/* <FunctionClick/>
   <ClassClick/> */}

   {/* ------------------------------------METHODS OF EVENT BINDING----------------------------------- 
   <EventBind/>  */}
   

   {/* ----------ChildComponent passing the values to Parent component in function component ----------
   <ParentComponent/> */}

   {/* -------------------Methods of Conditional Rendering in REACT-------------------
   <UserGreeting/> */}

   {/* ---------------------------REACT LIST--------------------------------- */}
   {/* <NameList/> */}
   {/* <NameList2/> */}
   {/* <Person/> */}

   {/* --------------------------METHODS OF CSS STYLING----------------------------- 

   <StyleSheet primary ={true}/> 
   <Inline/> */}

{/* --------------------------Ref react----------------------------  */}
{/* <RefDemo/> */}
{/* <RefDmo/> */}
{/* <Input/> */}
{/* <FocusInput/> */}

{/* --------------------------Render Props---------------------------    */}

{/* <ClickCounterTwo/>
<HoverCounterTwo/>
<User   name="vishwas"*/} 
    {/* name ={(isLoggesIn) => isLoggesIn ? "vishwas": "Guest"}
/> */}
{/* <Counter
  render={(count,incrementCount) => 
  <ClickCounterTwo count={count}
  incrementCount={incrementCount}/>}
  />

<Counter
  render={(count,incrementCount) => 
  <HoverCounterTwo count={count}
  incrementCount={incrementCount}/>}
  /> */}
 
  {/* --------------------------hoc---------------------------    */}
{/* <ClickCounter name='ram'/> */}
{/* <HoverCounter/> */}
{/* <HocSpread/>       */}

{/* --------------------------hoc---------------------------    */}
  {/* <Userprovider value="vishwas">
  <ComponentC/>
  </Userprovider> */}



   {/* test for myself component */}

   {/* <Test name="kani" age="20">
    <p>iam a human</p>
   </Test>
   <Test name="ram" age="1.5">
    <p>iam a animal</p>
   </Test>
   <Test name='cuppies' age="5"/> */}

   
   {/* ----------------------------------------------------------------------------------------------REACT HOOKS STARTS HERE!!!!!! */}
   
   {/* ---------------------------------------------------------------------------------------------HOOKS USESTATE */}

   {/* <ClassCounter/>
   <HookCounter/>
   <HookCounterTwo/>
   <HookCounterThree/>
   <HookCounterFour/> */}
   
    {/* ---------------------------------------------------------------------------------------------HOOKS USEeFFECT */}

   {/* <ClassCounterOne/> */}
   {/* <HookCounterOne/> */}
   {/* <ClassMouse/> */}
   {/* <HookMouse/> */}
   {/* <MouseContainer/> */}
   {/* <IntervalClassCounter/> */}
   {/* <IntervalHookCounter/> */}

    {/* ---------------------------------------------------------------------------------------------HOOKS USECONTEXT */}

    {/* <UserContext.Provider value={'vishwas'}>
      <ChannelContext.Provider value={'love you'}>
      <ComponentC/>
      </ChannelContext.Provider>
    </UserContext.Provider> */}

    
{/* owl carosel testing */}

{/* <Slider/> */}

<OwlCarousel/>
   
   
    </div>
  );
}

export default App;
