import React, { useState } from 'react'

const App = () => {
   const [count, setCount]=useState(0)

   const incremet=()=>{
    setCount(count+1)
   }
   const decrement=()=>{
    setCount(count-1)
   }
  return (
    <div>
       <p>{count}</p>
       <button onClick={incremet}>INC</button>
       <button disabled={count<=0} onClick={decrement}>DEC</button>
    </div>
  )
}

export default App
