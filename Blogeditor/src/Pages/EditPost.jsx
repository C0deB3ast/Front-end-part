import React, { useEffect, useState } from 'react'
import { Box, Postform } from '../Components'
import dataBaseService from '../Appwrite/Conf'
import { useParams ,useNavigate } from 'react-router-dom'
function EditPost() {
    const [postF,setPostf]=useState()
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
      if (slug) {
        dataBaseService.getDatabase(slug).then((postF)=>{
          if (postF) {
            setPostf(postF)
            
          }
        })
      }else{
        navigate("/")
      }
    },[slug,navigate])

  return  postF ? <div className="py-8">
      <Box>
        <Postform
        post={postF}
        />
      </Box>
  </div>
  :null
 
}

export default EditPost