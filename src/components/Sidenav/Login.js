import React  from "react";
import { useState } from "react";
import { useAuth } from "./Authentication";
import { useNavigate } from "react-router-dom";

 const Login = () => {
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const handlelogin = () =>{
        auth.login(user) 
        navigate('/profile')
    }
  return (
    <div >
        <label>
            Username:
            <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handlelogin}>login</button>
    </div>
  )
}
export default Login;