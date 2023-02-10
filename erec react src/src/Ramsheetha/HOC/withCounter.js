import React from "react"

function UpdatedComponent (OriginalComponent,increCountNumber){
   
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
          
            this.state = {
               count:0
            }
          }
      increCount(){
          this.setState( {
              count : this.state.count + increCountNumber
          },
          ()=> {console.log('HoverTimes',this.state.count)}
      
          )
          }
        render(){
            return <OriginalComponent 
            count={this.state.count} 
            increCount={() =>this.increCount()}
            {...this.props}
            />
        }
    }
    return NewComponent 
}

export default UpdatedComponent