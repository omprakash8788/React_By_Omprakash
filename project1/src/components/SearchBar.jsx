import React from 'react'

const SearchBar = ({searchMovie,setSearchMovie,fetchMoviesData}) => {
  return (
    <div className='main flex justify-center py-5 px-4'>
        <input
        value={searchMovie}
        onChange={(e)=>setSearchMovie(e.target.value)}
        className='bg-gray-200 w-80 placeholder-gray-400 px-2 py-2  outline-none border-2 border-gray-500 text-black rounded-l-lg'
        type="text"
        placeholder='Search Movies'
        
        />
        <button onClick={fetchMoviesData} className='bg-[#4a32d1] px-4 text-white rounded-r-lg '>Search</button>
    </div>
  )
}

export default SearchBar