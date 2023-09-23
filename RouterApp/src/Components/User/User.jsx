import React from 'react'
import { useParams } from 'react-router-dom' 

// Why we need useParams ?
//Ans:The useParams() hook is a React Router hook that allows you to access the parameters of the current URL. This can be useful if you want to dynamically render content based on the URL parameters.

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-green-500 text-white text-3xl p-4'>
      User:{userId}
    </div>
  )
}

export default User
