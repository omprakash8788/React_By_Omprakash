import React from 'react'
import { useContext } from 'react';
import myContext from '../context/data/MyContext';

const ComponentsTwo = () => {
    const context = useContext(myContext)
    console.log(context);
    const {name , age} = context
  return (
    <div className='bg-green'>
        component2
         <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
    </div>
  )
}

export default ComponentsTwo