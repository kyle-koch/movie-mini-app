import React, { useState, useEffect, useContext } from 'react';
import DisplayMovieTitles from './DisplayOut.js';
import AppContext from './AppContext.js';

function Main() {
  const { movies, setMovies } = useContext(AppContext);

  useEffect(() => {
    fetch('http://localhost:3001/movies/')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <>
      {<DisplayMovieTitles />}
    </>
  );
}

export default Main;
