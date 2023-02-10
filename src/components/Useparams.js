import React from 'react'
import { useParams } from 'react-router-dom'

const Signin = prop => {
    let {firstname,lastname}=useParams()
  return (
    <div>
      <h1>My Name Is {firstname} {lastname}</h1>
    </div>
  )
}



export default Signin;