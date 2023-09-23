import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
  const {user}=useContext(UserContext)
  
 if(!user) return <div>Please login first</div>

  return <div>WELCOME Devloper.{user.userNm} {user.password}</div>

}


export default Profile
