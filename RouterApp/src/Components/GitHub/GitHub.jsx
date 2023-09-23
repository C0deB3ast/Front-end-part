import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function GitHub() {
 const data = useLoaderData() // New way for fetching data which Optimises our data fetching
// const [data,setData]=useState([])    
// useEffect(()=>{
// fetch(`https://api.github.com/users/C0deB3ast`)
// .then(response=>response.json())
// .then(data=>{
//     console.log(data);
//     setData(data)
// })
// },[]) //Traditional way for fetching data which shows some lag
  return (
    <div className='bg-green-500 text-white text-3xl p-4'>
      GitHub Name : {data.name}
      <br/>
      GitHub Followers : {data.followers}
      <br/>
      GitHub Reposetry : {data.public_repos}
      <img src={data.avatar_url} alt="" width={300} />
    </div>
  )
}

export default GitHub

export const gitInfoLoder = async () =>{
  const response = await fetch(`https://api.github.com/users/C0deB3ast`) 
  return response.json()

}
