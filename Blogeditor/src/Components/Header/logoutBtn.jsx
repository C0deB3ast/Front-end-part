import React from 'react'
import { useDispatch } from 'react-redux'
import authenService from '../../Appwrite/Authen'
import { logout } from '../../Features/authSlice'
function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authenService.logout().then(()=>{
            dispatch(logout())
        }).catch((error)=>{
           throw  error
        })
    }    
  return (
    <button onClick={logoutHandler} className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn