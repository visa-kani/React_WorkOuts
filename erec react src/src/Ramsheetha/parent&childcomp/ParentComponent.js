import React, { Component } from 'react';
import ChildComponents from './ChildComponents';

 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(chlidName){
        // alert ('hello' + this.state.parentName ) -----we have to use es6
        alert(`Hello ${this.state.parentName} from ${chlidName}`)  // template literals
    }
  render() {
    return (
      <div>
         <ChildComponents greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent