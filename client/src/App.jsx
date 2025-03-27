import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  // const movies = [
  //   {title: 'Mean Girls'},
  //   {title: 'Hackers'},
  //   {title: 'The Grey'},
  //   {title: 'Sunshine'},
  //   {title: 'Ex Machina'},
  // ];

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
      <div class="movieList">
        {movies.map(movie => <p>{movie.title}</p>)}
      </div>
    </>
  )
}

export default App
