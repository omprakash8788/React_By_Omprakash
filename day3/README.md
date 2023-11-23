## Chap - 9

## Topic - Hook Introduction 

🔗 What is Hook
Ans -
1. Hook are basically functions.
2. Hooks were added to React in version 16.8.
3. Hooks cannot work in React Class Components.
4. Hooks allow us to "hook" into React feature such as state and lifecycle methods.
5. Hooks are the functions which "hook into" React state and lifecycle features from function components. It does not work inside classes.

🔗 Hooks Rules
1. Hooks cannot work in React Class Components.
2. You must import hook first
3. Hooks can only be called inside React function.
4. We should not call Hooks inside loops, conditions or nested function


// import statements
// Can't call here
const Blogs = () => {
    // Can call here
    return <h1>Blogs</h1>;
};

export default Blogs;

🔗 Types of Hook
1. useState
2. useEffect
3. useContext 
4. useRef


## ----------------- Chap - 10 ------------------------ ##

✍️👋 UseState Hook
useState is React Hook that allows you to add state to a functional component

🔗 What is State
1. The state is a object that is used to contain data or information about the component. 
2. A component's state can change over time; whenever it changes, the component re-renders.

import React from 'react'

function App() {
    let count = 0; 
    
    const increment = () => {
        count++;
        console.log(count)
    }
    const decrement = () => {
        count--;
        console.log(count)
    }

    return (
        <div className=' flex space-x-3 justify-center items-center h-screen'>
            <div className="">
                <p className=' text-6xl font-bold text-center mb-5 text-white'>{count}</p>
                <button className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={decrement}>Decrement</button>
                <button className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default App

🔗 Syntax
const [state, setState] = useState(initialState);


🔗 Importing useState

To use useState, first we need to import useState and initialize it, you can import it from react like this:

import { useState } from "react";

🔗 Initializing useState
You can initialize state like this:

import React from 'react'

function App() {
    const [count, setCount] = useState(1);
  return (
    <div>
        <h1>useState</h1>
    </div>
  )
}

export default App

🔗 Reading a state
As mentioned earlier, it returns a state and a function to change/update that state. Hence, everything is stored in count. We can read states just like variables:

function App() {
    const [count, setCount] = useState(1);
  return (
    <div>
        <h1 className="text-4xl text-center">{count}</h1>
    </div>
  )
}

RESULT - 1

🔗 Updating a state
To update state we use the function it returns to update state, in this case: setCount. State can be updated like this:

import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(1);
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className=' flex space-x-3 justify-center items-center h-screen'>
            <div className="">
                <p className=' text-6xl font-bold text-center mb-5'>{count}</p>
                <button className=' bg-red-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={decrement}>Decrement</button>
                <button className=' ml-20 bg-green-600 text-white py-2.5 rounded-md px-5 font-bold' onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default App

🔗 What can state hold?
state can hold any datatype like:

strings, 
numbers, 
booleans, 
arrays, 
objects, 
objects in arrays,
arrays in objects

import React, { useState } from 'react'

function App() {
    const [data, setData] = useState({
        name: 'Kamal Nayan',
        age: 21
    });
    return (
        <div className="">
            <h1 className='text-3xl font-bold'>
                My name is <span className=' text-pink-500'>{data.name}</span>
                and my age is <span className=' text-blue-500'>{data.age}</span>
            </h1>
        </div>
    )
}

export default App


function App() {
    const [data, setData] = useState({
        name: 'Kamal Nayan',
        age: 21
    });
    return <div className="p-5">
            <h1 className='text-3xl font-bold'>
                My name is <span className=' text-pink-500'>{data.name}</span>
                and my age is <span className=' text-blue-500'>{data.age}</span>
            </h1>
        </div>
}

RESULT

My name is Kamal Nayanand my age is 21

🔗 Updating Objects and Arrays in State

import React, { useState } from 'react'

function App() {
    const [data, setData] = useState({
        name: 'Kamal Nayan ',
        age: 21
    });

    const updateData = () => {
        console.log({...data})
        setData({...data, name: 'Devknus '})
    }
    return (
        <div className="">
            <h1 className='text-3xl font-bold mb-2'>
                My name is <span className=' text-pink-500'>{data.name}</span>
                and my age is <span className=' text-blue-500'>{data.age}</span>
            </h1>
            <button onClick={updateData} className='bg-gray-400 py-1.5 px-6 rounded-md font-bold'>Update</button>
        </div>
    )
}

export default App

function App() {
    const [data, setData] = useState({
        name: 'Kamal Nayan ',
        age: 21
    });

    const updateData = () => {
        console.log({...data}) // {name: 'Kamal Nayan', age: 21}
        setData({...data, name: 'Devknus '})
    }
    return <div className="p-5">
            <h1 className='text-3xl font-bold mb-3'>
                My name is <span className=' text-pink-500'>{data.name}</span>
                and my age is <span className=' text-blue-500'>{data.age}</span>
            </h1>
            <button onClick={updateData} className='bg-green-500 text-white py-2.5 px-10 rounded-md 
            font-bold'>Update</button>
        </div>
}

RESULT

My name is Kamal Nayan and my age is 21
Update



## ----------------- Chap - 10 end  ------------------------ ##


## ----------------- Chap - 11   ------------------------ ##

## Topic - useEffect

✍️👋 useEffect Hooks
The useEffect Hook allows you to perform side effects in your components.
Some examples of side effects are: fetching data, directly updating the DOM, and timers.
useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

useEffect(() => {
    // Mounting

    return () => {
        // Cleanup function
    }
}, [//Updating])


🔗 Example
Let's use a timer as an example.

import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h2>I have rendered {count} times!</h2>
    </div>
  )
}

export default App

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h2 className='text-4xl font-bold text-center'>I have rendered <span className='text-pink-500'>{count}</span> times!</h2> 
}

RESULT

I have rendered 106 times!

But wait!! It keeps counting even though it should only count once!
useEffect runs on every render. That means that when the count changes, a render happens, which then triggers another effect.
There are several ways to control when side effects run.

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});

2. An empty array:
useEffect(() => {
  //Runs only on the first render
}, []);


3. Props or state values:
useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
So, to fix this issue, let's only run this effect on the initial render.



Example:
Only run the effect on the initial render:
import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  },[]); // <- add empty brackets here
  return (
    <div>
      <h2>I have rendered {count} times!</h2>
    </div>
  )
}

export default App

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h2 className='text-4xl font-bold text-center'>
  I have rendered <span className='text-pink-500'>
  {count}</span> times!</h2> 
}

RESULT

I have rendered 1 times!


Example
Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:

import React, { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  
  const update = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setCalculation(()=> count * 2)
  }, [count]);
  
  return (
    <div>
      <div className='flex justify-center items-center h-screen'>
        <div className=' border-2 border-gray-200 p-3 rounded-xl shadow-md bg-gray-50'>
          <p className='text-center font-bold mb-2 text-3xl'>Count: {count}</p>
          <button onClick={update} className=' font-bold w-full rounded-lg mb-2 text-white bg-gray-400 px-20 py-1.5' >+</button>
          <p className='text-lg font-bold'>Calculation: {calculation}</p>
        </div>
      </div>
    </div>
  )
}

export default App

If there are multiple dependencies, they should be included in the useEffect dependency array.

function App() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const update = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return <div className='flex justify-center items-center h-screen'>
      <div className=' border-2 border-gray-200 p-3 rounded-xl shadow-md bg-gray-50'>
      <p className='text-center font-bold mb-2 text-3xl'>Count: {count}</p>
      <button className=' font-bold w-full rounded-lg mb-2 text-white bg-gray-400 px-20 py-1.5' onClick={update}>+</button>
      <p className='text-lg font-bold'>Calculation: {calculation}</p>
      </div>
    </div>

}

## myExample 
import React, {useState, useEffect} from 'react'


const App = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  const update = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    setCalculation(()=> count * 2)
  }, [count]);

  return (
    <div>
        <div className='flex justify-center items-center h-screen'>
        <div className=' border-2 border-gray-200 p-3 rounded-xl shadow-md bg-gray-50'>
          <p className='text-center font-bold mb-2 text-3xl'>Count: {count}</p>
          <button onClick={update} className=' font-bold w-full rounded-lg mb-2 text-white bg-gray-400 px-20 py-1.5' >+</button>
          <p className='text-lg font-bold'>Calculation: {calculation}</p>
        </div>
      </div>
    </div>
  )
}

export default App



## ----------------- Chap - 11 end  ------------------------ ##

## ----------------- Chap - 12  ------------------------ ##
## Topics - contextAPI hook
✍️👋 Context Api
🔗 Understanding Context API
The Context API can be used to share data with multiple components, without having to pass data through props manually. Let’s deal with the similar prop drilling issue with the help of context API as shown below:

🔗 Getting Started - Context API
- context
  - data
    - myContext.jsx
    - myState.jsx


    🔗 Creating Context - In myContext.jsx
First of all, we have to import createContext in the file by using the import command. After that, we will be creating a new context with the help of a predefined syntax and finally, we will export the myContext as shown in the below figure:

import {createContext} from 'react';

const myContext = createContext();
export default myContext;

🔗 Creating State - In myState.jsx

import React from 'react'
import MyContext from './myContext';

function MyState(props) {
    const state = {
        name: "Kamal Nayan",
        rollNumber: 15
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState

🔗 Create Some Components
- components
  - ComponentOne.jsx
  - ComponentTwo.jsx 

  🔗 Import MyState in App.Js
import React from 'react'
import Home from "./component/ComponentOne";
import Home from "./component/ComponentTwo";
import MyState from "./context/data/myState";

function App() {
  return (
    <MyState>
      <ComponentOne/>
      <ComponentTwo/>
    </MyState>
  )
}

export default App



🔗 Using the Created Context -In ComponentOne.jsx and ComponentTwo.jsx
Let’s check if the created context is working or not. In our case, we are using the ComponentOne component for testing purposes.


ComponentOne.jsx
import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

function ComponentOne() {
    const context = useContext(myContext);
    console.log(context);
    const {name, rollNumber, color} = context;
  return (
    <div className=' bg-red-300 p-2'>
        <h2>Name : {name}</h2>
        <h2>Roll Number : {rollNumber}</h2>
        <h2>My Color : {color}</h2>
    </div>
  )
}

export default ComponentOne


ComponentTwo.jsx
import React, { useContext } from 'react'
import myContext from '../context/data/myContext'

function ComponentTwo() {
    const context = useContext(myContext);
    const {name, rollNumber, color} = context
  return (
    <div className=' bg-green-300 p-2'>
        <h1>Name: {name}</h1>
        <h1>Roll Number : {rollNumber}</h1>
        <h1>My Color : {color}</h1>
    </div>
  )
}

export default ComponentTwo



🔗 Multiple State
import React from 'react'
import MyContext from './myContext'

function MyState(props) {
    const state = {
        name : 'Kamal Nayan Upadhyay',
        rollNumber : 15
    }
    const color = 'red'
  return (
    <MyContext.Provider value={{state, color}}>
        {props.children}
    </MyContext.Provider>
  )
}
export default MyState

## myExample 




## ----------------- Chap - 12 end  ------------------------ ##


