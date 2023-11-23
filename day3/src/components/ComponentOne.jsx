import React from 'react'
import { useContext } from 'react'
import myContext from '../context/data/MyContext'

const ComponentOne = () => {
    const context = useContext(myContext)
    console.log(context);
    const {name , age} = context
  return (
    <div>ComponentOne
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>

    </div>
  )
}

export default ComponentOne