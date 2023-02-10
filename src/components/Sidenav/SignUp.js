
import React from 'react'
import { useParams } from 'react-router-dom'

const Signin = () => {
    let {Id}=useParams()
  return (
    <div className='alignm'>
      <h1>Product no : {Id}</h1>
    </div>
  )
}


export default Signin