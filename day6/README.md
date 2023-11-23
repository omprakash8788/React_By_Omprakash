## Chap 16 

## Topic - protecting Routes

## Creating a Protected Routes In React Js
The library for web and native user interfaces

✍️👋 Creating a Protected Routes In React Js
🔗 Step 1 : Create a Pages


- pages
  - home
    - Home.jsx
  - product
    - Product.jsx
  - dashboard
    - Dashboard.jsx

Home.jsx

import React from 'react'

function Home() {
    return (
        <div className='flex justify-center items-center h-screen text-5xl font-bold'>
            Home
        </div>
    )
}

export default Home

Product

import React from 'react'

function Product() {
    return (
        <div className='flex justify-center items-center h-screen text-5xl font-bold'>
            Product
        </div>
    )
}

export default Product

Dashboard.jsx
import React from 'react'

function Dashboard() {
    return (
        <div className='flex justify-center items-center h-screen text-5xl font-bold'>
            Dashboard
        </div>
    )
}

export default Dashboard

🔗 Step 2 : Install React Router Dom

npm i react-router-dom

🔗 Step 3 : App.jsx

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App


🔗 Step 4 : Create a Components

- components
  - navbar
    - Navbar.jsx


Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between 
        items-center px-4 bg-[#2C3A47] py-4 shadow-md'>
            <div className="left">
                <Link to={'/'}>
                    <div className="logo font-bold text-2xl text-white text-center">
                        Protected Route
                    </div>
                </Link>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer font-medium'>Home</li>
                    </Link>
                    <Link to={'/product'}>
                        <li className='cursor-pointer font-medium'>Product</li>
                    </Link>
                    <Link to={'/dashboard'}>
                        <li className='cursor-pointer font-medium'>Dashboard</li>
                    </Link>
                    <li className='cursor-pointer font-medium bg-red-600 px-4 py-'>
                        Logout
                    </li>
                    <li className='cursor-pointer font-medium bg-green-600 px-4 py-'>
                        Login
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

🔗 Step 5 : Use Navbar in App.jsx

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

🔗 Step 6 : Create Protected Route
Create One useState

const [user, setUser] = useState(false);

------------------------

Create Two Function Login And Logout
Login
const login = () =>{
    setUser(true);
}

Logout
const logout = () =>{
    setUser(false);
}

------------------------------


Create Protected Route Function in App.jsx

export const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/'} />
  }
}


App.jsx
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import Dashboard from './pages/dashboard/Dashboard';
import Navbar from './components/navbar/Navbar';

function App() {
  const [user, setUser] = useState(false);

  //* create Login Funtion
  const login = () =>{
    setUser(true);
  }

  //* create logout Funtion
  const logout = () =>{
    setUser(false);
  }


  return (
    <>
      <Router>
        <Navbar user={user} login={login} logout={logout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/dashboard" element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </Router>
    </>
  )
}

export default App

//* Create Protected Route Function 
export const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/'} />
  }
}

Navbar.jsx
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({ user, login, logout }) {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between 
        items-center px-4 bg-[#2C3A47] py-4 shadow-md'>
            <div className="left">
                <Link to={'/'}>
                    <div className="logo font-bold text-2xl text-white text-center">
                        Protected Route
                    </div>
                </Link>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center items-center'>
                    <Link to={'/'}>
                        <li className='cursor-pointer font-medium'>Home</li>
                    </Link>
                    <Link to={'/product'}>
                        <li className='cursor-pointer font-medium'>Product</li>
                    </Link>
                    <Link to={'/dashboard'}>
                        <li className='cursor-pointer font-medium'>Dashboard</li>
                    </Link>
                    {user
                        ?
                        <li onClick={logout} className='cursor-pointer font-medium bg-red-600 px-4 py-'>
                            Logout
                        </li>
                        :
                        <li onClick={login} className='cursor-pointer font-medium bg-green-600 px-4 py-'>
                            Login
                        </li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navbar






