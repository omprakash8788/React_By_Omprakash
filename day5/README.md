## -------------- Chap -15 ------------------ ##
## ----------- Topic - Redux toolkit -------- ##

React Redux Tookit
Redux is a state management tool that works as a “centralized store,”


✍️👋 React Redux ToolKit
🔗 What is Redux
Redux is a state management tool that works as a “centralized store,” which means that it is the only place to access the state, Also known as “The single source of truth.”
The single source of truth is the only place where the application’s state lives and can be accessed.
🔗 To understand Redux, you must understand the “one-way data flow” known as unidirectional data flow.


🔗 Pattern
You have a state that gets rendered in a view and the view trigger an action to change the state which will eventually change the view.


🔗 Why Use Redux

🔗 1. Install Redux Toolkit and React-Redux
Add the Redux Toolkit and React-Redux packages to your project:

npm install @reduxjs/toolkit react-redux


🔗 2. Create a Redux Store
Add the Redux Toolkit and React-Redux packages to your project:
Create a file named src/app/store.jsx. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it:

1. Store is a state container which contain the state 

2. It is an object.

3. Every Applicationcan have single store.

4. And in store need to specify the reducer



src/app/store.jsx

import { configureStore } from '@reduxjs/toolkit' 

export const store = configureStore({
  reducer: {},
})
This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing


🔗 3. Provide the Redux Store to React
Once the store is created, we can make it available to our React components by putting a React-Redux <Provider> around our application in src/index.js. Import the Redux store we just created, put a <Provider> around your <App>, and pass the store as a prop:
src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

🔗 4. Create a Redux State Slice
Add a new file named src/features/counter/counterSlice.jsx.
In that file, import the createSlice API from Redux Toolkit.
Creating a slice requires a string name to identify the slice, an initial state value, and one or more reducer functions to define how the state can be updated. Once a slice is created, we can export the generated Redux action creators and the reducer function for the whole slice.


src/features/counter/counterSlice.jsx

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount} = counterSlice.actions

export default counterSlice.reducer


🔗 5. Add Slice Reducers to the Store
Next, we need to import the reducer function from the counter slice and add it to our store. By defining a field inside the reducer parameter, we tell the store to use this slice reducer function to handle all updates to that state.

app/store.jsx

import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})

🔗 6. Use Redux State and Actions in React Components
Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch. Create a src/components/Counter.js file with a <Counter> component inside, then import that component into App.js and render it inside of <App>.

🔗 Get And Update state in Redux Store
UseSelector

The useSelector hook is used to extract the state of a component from the redux store using the selector function.

useDispatch
The useDispatch hook is used to update the state of the componentand return a new state



Counter

<div className=' flex space-x-3 justify-center items-center h-screen'>
      <div className="">

        {/* Read  */}
        <p className=' text-6xl font-bold text-center mb-5 text-white'>0</p>

        {/* Increment Button  */}
        <button
          className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Increment
        </button>

        {/* Decrement Button  */}
        <button
          className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Decrement
        </button>

        {/* Increment By User */}
        <button
          className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold'
        >
          Inc. By User
        </button>
      </div>
    </div>



    🔗 src/App.jsx

    import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from './features/counter/counterSlice'


export function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className=' flex space-x-3 justify-center items-center h-screen'>
      <div className="">

        {/* Read  */}
        <p className=' text-6xl font-bold text-center mb-5 text-white'>{count}</p>

        {/* Increment Button  */}
        <button
          className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>

        {/* Decrement Button  */}
        <button
          className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        {/* Increment By User */}
        <button
          className=' ml-20 bg-orange-600 text-white py-2.5 rounded-md px-5 font-bold'
          onClick={() =>dispatch(incrementByAmount(2))}
        >
          Inc. By User
        </button>
      </div>
    </div>
  )
}

export default App




