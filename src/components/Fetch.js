import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response=>response.json())
      .then(info=>setData(info))
    },[])
  return (
    <div>
      {
        data.map((info,index)=>(
          <>
          <h2>{index+1}. {info.title}</h2>
          <p>{info.body}</p>
          </>
        ))
      }
    </div>
  )
}

export default Fetch
