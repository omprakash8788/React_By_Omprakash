import './App.css';

// function App() {
//   const heading = {
//     backgroundColor:'blue',
//     fontSize:"20px"
//   }
//   return (
//     <div className="App">
//       {/* <h1 style = {{backgroundColor:'red', fontSize:"12px" ,padding:"12px"}}>Heading</h1> */}
//       <h1 style={heading}>Heading</h1>
//     </div>
//   );
// }

// export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>
// <h1 className='heading'>heading</h1>
//     </div>
//   )
// }

// export default App

import React from 'react'
import style from './index.module.css'

const App = () => {
  return (
    <div>
      <button className={style.button}>Click</button>
    </div>
  )
}

export default App
