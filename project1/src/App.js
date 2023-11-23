import { useState } from 'react';
import './App.css';
import MovieCard from './components/MovieCard';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';

function App() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMoviesData= async()=>{
    try {
      setLoading(true)
      const res = await fetch(` http://www.omdbapi.com/?s=${searchMovie}&apikey=116e8451`)
      // console.log(res);
      const data= await res.json()
      setAllMovieData(data.Search);
      console.log(data.Search);
      setLoading(false)
      
    } catch (error) {
       console.log(error);
       setLoading(false)
    }
  }

  return (
    <div>
      <Navbar/>
      <div className='bg'>
      <SearchBar searchMovie={searchMovie} setSearchMovie={setSearchMovie} fetchMoviesData={fetchMoviesData}/>
      <MovieCard allMovieData={allMovieData} loading={loading}/>

      </div>
    </div>
  );
}

export default App;
