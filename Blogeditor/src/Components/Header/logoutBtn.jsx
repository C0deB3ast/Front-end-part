import React from 'react'
import { useDispatch } from 'react-redux'
import authenService from '../../Appwrite/Authen'
import { logout } from '../../Features/authSlice'
function logoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authenService.logout().then(()=>{
            dispatch(logout())
        })
    }    
  return (
    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default logoutBtn