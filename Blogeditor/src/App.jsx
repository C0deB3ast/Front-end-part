import React,  { useState ,useEffect } from 'react'
import { useDispatch } from 'react-redux' 
import authenService from './Appwrite/Authen'
import { login,logout } from './Features/authenSlice'
import './App.css'
import { Footer,Header } from './Components'
import {Outlet} from 'react-router-dom'

function App() {
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authenService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
}else{
  dispatch(logout())
}
  })
  .finally(()=>setLoading(false))
},[])
  return !loading ?(
  <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>
  ) : null
}

export default App
