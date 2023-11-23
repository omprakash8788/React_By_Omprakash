## Project Name - Movie Search

✍️👋 Movie Searching App
In this steps you learn how to make Movie searching app.
🔗 Step 1 : Create a new react project using rect app

🔗 Step 2 : Install npm
npm i

🔗 Step 3 : Install tailwind Css
1. Install tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.
npm install -D tailwindcss
npx tailwindcss init


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


@tailwind base;
@tailwind components;
@tailwind utilities;

npm run start


🔗 Step 4 : Create component folder
- components
  - Navbar.jsx
  - MovieCard.jsx
  - SearchBar.jsx

  🔗 Step 5 : Import components in App.jsx
  import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar/>
      <MovieCard/>
    </div>
  )
}

export default App


🔗 Steps 6 : Create Navbar (Go to Navbar.jsx)
import React from 'react'

function Navbar() {
    return (
        <div className='main z-20 lg:flex md:flex flex-wrap justify-between items-center 
     px-4 bg-[#40407a] py-4 shadow-md sticky top-0'>
            <div className="left flex items-center space-x-3">
                <img className='w-10' src="https://movie-app-88kamal.vercel.app/clipart3105859.png" alt="" />
                <h2 className="logo font-bold text-2xl text-white text-center">MovieMaSala</h2>
            </div>
            <div className="right">
                <ul className='flex space-x-4 text-white justify-center'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li className='cursor-pointer'>Services</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar


🔗 Steps 7 : Create Search Bar (Go to SearchBar.jsx)

import React from 'react'

function SearchBar() {
  return (
    <div>
      <div className="input flex justify-center  px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder='Search here'
          className=' shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg 
          px-2 py-2 w-80 outline-none border-2 border-gray-500 text-black ' 
        />
        <button
          className='bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500 '>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar

🔗 Steps 8 : Create MovieCard (Go to MovieCard.jsx)

import React from 'react'

function MovieCard() {
  return (
    <div>
      <div className='flex flex-wrap px-4 lg:px-10 '>
        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div>

        <div className="p-2 md:w-1/4 w-full">
          <div className="bg-[#002e4b] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
            <img className='rounded-lg w-full mb-2' src="https://dummyimage.com/720x400" alt="" />
            <h2 className='text-xl text-white font-bold'>This is title</h2>
            <h2 className='text-lg text-white mb-2'>desc</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieCard

🔗 Steps 9 : index.css
.bg{
  background: linear-gradient(rgb(0 0 0 / 66%), rgb(0 0 0 / 63%)),
              url(https://wallpaperaccess.com/full/1512223.jpg);
  background-size: cover;
  min-height: 100vh;
  background-repeat: no-repeat;
}

🔗 Steps 10 : Go to App.jsx

import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MovieCard from './components/movieCard/MovieCard'
import SearchBar from './components/searchBar/SearchBar'

function App() {
  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBar/>
        <MovieCard/>
      </div>
    </div>
  )
}

export default App

🔗 Steps 11 : Go to App.jsx
Create a three useState

const [allMovieData, setAllMovieData] = useState([]);
const [searchMovie, setSearchMovie] = useState('');
const [loading, setLoading] = useState(false);

Create a Function For Fetching a api Data

const fetchMovieData = async () => {
    try {
        setLoading(true);
        const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
        const data = await res.json();
        setAllMovieData(data.Search);
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

Here, How to get Api url go to https://omdbapi.com

🔗 Final Code

import React, { useEffect, useState } from 'react'
import Navbar from './components/navbar/Navbar'
import MovieCard from './components/movieCard/MovieCard'
import SearchBar from './components/searchBar/SearchBar'

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  
  const [loading, setLoading] = useState(false);
    const fetchMovieData = async () => {
    try {
        setLoading(true);
        const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
        const data = await res.json();
        setAllMovieData(data.Search);
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}

  return (
    <div>
      <Navbar />
      <div className="bg ">
        <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMovieData={fetchMovieData} />
        <MovieCard allMovieData={allMovieData} loading={loading} />
      </div>
    </div>
  )
}

export default App


🔗 Step 12 : Now Passing the Props Parent Components to Child Components

🔗 Step 13 : And Receive the props in child Component Go to SearchBar.jsx
SearchBar.jsx

import React from 'react'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div>
      <div className="input flex justify-center  px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder='Search here'
          value={searchMovie}
          onChange={(e)=> setSearchMovie(e.target.value)}
          className=' shadow-md bg-gray-200 placeholder-gray-400 rounded-l-lg 
          px-2 py-2 w-80 outline-none border-2 border-gray-500 text-black ' 
        />
        <button
        onClick={fetchMovieData}
          className='bg-[#40407a] px-4 rounded-r-lg text-white shadow-md 
          border-b-2 border-r-2 border-t-2 border-gray-500 '>
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar

🔗 Step 14 : And Receive the props in child Component Go to MovieCard.jsx
MovieCard.jsx

import React from 'react'

function MovieCard({ allMovieData, loading }) {
  return (
    <div>
      {loading ?
        <div className='flex justify-center '>
          <img className=' w-16 py-20' src="https://i.gifer.com/ZZ5H.gif" alt="" />
        </div>
        :
        <div className='flex flex-wrap px-4 lg:px-10 '>
          {allMovieData.map((item, index) => {
            const { Title, Year, Poster } = item
            return (
              <div key={index} className="p-2 md:w-1/4 w-full">
                <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-200">
                  <img className='rounded-lg w-full h-full mb-2' src={Poster} alt="" />
                  <h2 className='text-xl text-white font-bold'>{Title}</h2>
                  <h2 className='text-lg text-white mb-2'>Year : {Year}</h2>
                </div>
              </div>
            )
          })}
        </div>
      }
    </div>
  )
}

export default MovieCard






