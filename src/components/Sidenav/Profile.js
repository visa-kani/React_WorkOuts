import React from 'react'
import { useAuth } from './Authentication';
import { useNavigate } from 'react-router-dom';

 const Profile = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout =() =>{
    auth.logout()
    navigate('/login')
  }
  return (
    <>
    <div className="alignm">
    <h1>Profile</h1>
    <h1>Welcome {auth.user} </h1>
    <button onClick={handleLogout}>Logout</button>
    </div>
    </>
  )
}
export default Profile;