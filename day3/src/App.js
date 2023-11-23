import React from 'react'
import ComponentOne from './components/ComponentOne'
import ComponentsTwo from './components/ComponentsTwo'
import MyState from './context/data/MyState'

const App = () => {
  return (
    <MyState>
      <ComponentOne/>
      <ComponentsTwo/>
    </MyState>
  )
}

export default App