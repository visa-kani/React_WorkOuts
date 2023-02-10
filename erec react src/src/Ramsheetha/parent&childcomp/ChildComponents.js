import React from 'react'

function ChildComponents(props) {
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>greetParent</button>
    </div>
  )
}

export default ChildComponents