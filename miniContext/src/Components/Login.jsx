import React from 'react'
import { useState,useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [userNm,setUserNm]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({userNm,password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" 
      value={userNm}
      onChange={(e)=>setUserNm(e.target.value)}
      placeholder='UserName' />
      {" "}
      <input type="text" 
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      placeholder='Password' />
      <button onClick={handleSubmit}>Login</button>

    </div>
  )
}

export default Login
