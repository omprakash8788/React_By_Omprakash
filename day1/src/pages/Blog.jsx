import React from 'react'
import { useParams } from 'react-router-dom'

const Blog = () => {
    const params = useParams()
    console.log(params.id);
  return (
    <div>Blog Id : {params.id}</div>
  )
}

export default Blog