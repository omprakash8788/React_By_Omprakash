import React from 'react'
import MyContext from './MyContext'

const MyState = (props) => {
  const state = {
    name:"om",
    age:23,

  }

  return (
    <MyContext.Provider value={state}>
        {props.children}
    </MyContext.Provider>
  )
}

export default MyState