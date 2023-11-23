## ---------------- Chap 13 ----------------- ##
## Topics - useRef


✍️👋 useRef Hook
The useRef Hook allows you to persist values between renders.
It can be used to store a mutable value that does not cause a re-render when updated.
It can be used to access a DOM element directly.
const ref = useRef(initialValue);


function App() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
  
    useEffect(() => {
      count.current = count.current + 1;
    });
  
    return (
      <div className="flex justify-center">
       <div>
       <input
       type="text"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
     />
     <h2>Render Count: {count.current}</h2>
       </div>
      </div>
    );
  }

  ## my example 
  import React,{useState, useRef, useEffect} from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <div>
       <input
       type="text"
       value={inputValue}
       onChange={(e) => setInputValue(e.target.value)}
     />
     <h2>Render Count: {count.current}</h2>
       </div>
      </div>
  )
}

export default App


## ---------------- Chap 13 end  ----------------- #


--------------------------------------------------------------------

## ---------------- Chap 14   ----------------- #
## Topic - ✍️👋 Fetching Data From Api

Fetching Data From Api
The library for web and native user interfaces

✍️👋 Fetching Data From Api
We can fetch data by using the Javascript fetch() method. The Fetch API is a new standard to server requests with Promises, it also includes additional features.


import React, { useEffect, useState } from 'react'

function App() {
  //* create product state
  const [products, setProducts] = useState([]);

  //* fetch data by using the Javascript fetch() method
  const getProduct = async () => {
    const res = await fetch('https://myfirstapi-data.vercel.app');
    const productData = await res.json();
    console.log(productData.products);
    setProducts(productData.products)
  }
  //* get Product automatically
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
        {products.map((item, index) => {
          const { title, price, image, description } = item;
          return (
            <div key={index} className="p-2 md:w-1/4 w-full">
              <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                <img className='rounded-lg w-full mb-2' src={image} alt="" />
                <h2 className='text-xl text-black font-bold'>
                  {title.substr(0, 20)}
                </h2>
                <h2 className='text-xl text-black font-bold'>
                  ₹ {price}
                </h2>
                <h2 className='text-lg text-black mb-2'>
                  {description}
                </h2>
                <div className=" flex  space-x-2 justify-between">
                  <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                    Add to card
                  </button>
                  <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App

<div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
              Add to card
              </button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
              Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-black font-bold'>This is title</h2>
            <h2 className='text-lg text-black mb-2'>desc</h2>
            <div className=" flex  space-x-2 justify-between">
              <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>Add to card</button>
              <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>Buy Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>


## my example 

## ---------------- Chap 14 end  ----------------- #


## ---------------- Chap 15   ----------------- #
## Topic - Fetching data using axios
✍️👋 Fetch Data using Axios
🔗 What is Axios?
Axios is lightweight package and use to make HTTP requests in Any Javascript Library like React, Angular or Vue. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. If you use Fetch method in Javascript, Axios is the “Easy to use” Version of Fetch.

🔗 Advantages of using Axios
1. Axios by default Work in JSON format.So no more JSON parsing.
2. Make all types of HTTP requests (GET, POST, PUT, DELETE)
🔗 How to install Axios in React App
Like any other npm package, you have to simply install Axios package in your React Application and import axios from the axios package.
Install Axios https://www.npmjs.com/package/axios


npm install axios
or
yarn add axios

🔗 Use Axios in React with Promises and Error Handling


import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  //* By Axios using Promises
  const getProduct = () => {
    axios.get('https://myfirstapi-data.vercel.app')
      .then((response) => setProducts(response.data.products))
      .catch((error) => console.log(error))
  }

  //* Get Product Automatically
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div>
        <div className='flex flex-wrap px-4 lg:px-10 '>
          {products.map((item, index) => {
            const { title, price, image, description } = item
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img className='rounded-lg w-full mb-2' src={image} alt="" />
                  <h2 className='text-xl text-black font-bold'>{title.substr(0, 20)}</h2>
                  <h2 className='text-xl text-black font-bold'>₹ {price}</h2>
                  <h2 className='text-lg text-black mb-2'>{description}</h2>
                  <div className=" flex  space-x-2 justify-between">
                    <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                      Add to card
                    </button>
                    <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App



🔗 By Axios using Async & Await Also Error Handling woth Try Catch

import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  // //* By Axios using Promises
  // const getProduct = () => {
  //   axios.get('https://myfirstapi-data.vercel.app')
  //     .then((response) => setProducts(response.data.products))
  //     .catch((error) => console.log(error))
  // }

  // useEffect(() => {
  //   getProduct();
  // }, []);

  //* By Axios using Async & Await Also Error Handling woth Try Catch
  const getProduct = async () => {
    const res = await axios.get('https://myfirstapi-data.vercel.app');
    // console.log(res.data.products);
    setProducts(res.data.products);
  }

  //* Get Product Automatically
  useEffect(() => {
    getProduct();
  }, []);


  return (
    <div>
      <div>
        <div className='flex flex-wrap px-4 lg:px-10 '>
          {products.map((item, index) => {
            const { title, price, image, description } = item
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#F8EFBA] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img className='rounded-lg w-full mb-2' src={image} alt="" />
                  <h2 className='text-xl text-black font-bold'>{title.substr(0, 20)}</h2>
                  <h2 className='text-xl text-black font-bold'>₹ {price}</h2>
                  <h2 className='text-lg text-black mb-2'>{description}</h2>
                  <div className=" flex  space-x-2 justify-between">
                    <button className='bg-[#706fd3] px-5 py-1.5 text-white rounded-lg'>
                      Add to card
                    </button>
                    <button className='bg-[#ff4757] px-5 py-1.5 text-white rounded-lg'>
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default App
## ---------------- Chap 15 end  ----------------- #


