import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/About-Us/AboutUs.jsx'
import ContactUs from './Components/Contact-Us/ContactUs.jsx'
import User from './Components/User/User.jsx'
import GitHub, { gitInfoLoder } from './Components/GitHub/GitHub.jsx'

// const router = createBrowserRouter([
//  {
//   path:"/",
//   element: <App/>,
//  children:[{
//   path:"",
//   element:<Home/>
//  },
//  {
//   path:"about",
//   element:<AboutUs/>
//  },
//  {
//   path:"contact-us",
//   element:<ContactUs/>
//  }
// ]
//  }
// ])
//Traditional way of Rouing

const router = createBrowserRouter( //Optimised and clear way of Routing
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<AboutUs/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route 
      loader={gitInfoLoder}
      path='GitHub' 
      element={<GitHub/>}/>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>,
)
