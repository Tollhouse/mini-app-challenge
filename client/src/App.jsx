import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar';

function App() {
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [addedMovies, setAddedMovies] = useState([]);

  const movies_hardcode = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  const addMovie = () => {
    setAddedMovies([...addedMovies,inputValue])
  };
  const handleInputChange = (userInput) => {
    setInputValue(userInput.target.value);
  };
  const removeMovie = () => {
    setAddedMovies(addedMovies.filter((movie) => movie !== inputValue));
  }

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
    <div>Level 3:</div>
      <input value={inputValue} onChange={handleInputChange} />
      <button onClick={addMovie}>Add</button>
      <button onClick={removeMovie}>Delete</button>
      <div>Added Movies:</div>
      <div>
        {addedMovies.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </>
  )
}

export default App
