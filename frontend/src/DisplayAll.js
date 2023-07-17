import AppContext from './AppContext.js';
import React, { useContext, useState, useEffect } from 'react';

const DisplayMovieTitles = () => {
  const { movies, setMovies, displayTitles, setDisplayTitles } = useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:3001/movies/')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, [movies, setMovies]);

  return (
    <div>
      <h2>All Movies</h2>
      <ul>
        {movies.map((movie, index) => (<li key={index}>{movie.title}</li>))}
        {<button onClick={() => setDisplayTitles(false)}>Hide All Movie Titles</button>}
      </ul>
    </div>
  )
}

export default DisplayMovieTitles;