import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([])
  const movies_hardcode = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  useEffect(() => {
    fetch('http://localhost:3000/')
    .then((res) => {
      console.log(res.status);
      return res.json();
    })
    .then((data) => {
      setMovies(data);
    })
  }, []);

  return (
    <>
    <div>Level 0:</div>
      <div class="movieListHardcode">
          {movies_hardcode.map(movie => <p>{movie.title}</p>)}
      </div>
    <div>Level 1:</div>
      <div class="movieListServer">
        {movies.map(movie => <p>{movie.title}</p>)}
      </div>
    <div>Level 2:</div>
    <div class="movieListSearch">
        <SearchBar data={movies}/>
    </div>
    </>
  )
}

export default App
