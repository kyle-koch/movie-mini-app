import AppContext from './AppContext.js';
import React, { useContext, useState, useEffect } from 'react';

const DisplayMovieTitles = () => {
  const { movies, setMovies } = useContext(AppContext);
  return (
    <div>
      <h2>Movie List</h2>
      <ul>
        {movies.map((movie, index) => (<li key={index}>{movie.title}</li>))}
      </ul>
    </div>
  )
}

export default DisplayMovieTitles;