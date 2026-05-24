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
        data.map(info=>(
          <>
          <p>{info.title}</p>
          <p>{info.body}</p>
          </>
        ))
      }
    </div>
  )
}

export default Fetch
