import React, { useState, useContext } from 'react';
import AppContext from './AppContext.js';

const AddMovie = () => {
  const { movies, setMovies } = useContext(AppContext);
  const [newMovieTitle, setNewMovieTitle] = useState('');

  const handleAddMovie = async () => {
    if (newMovieTitle.trim() === '') return;
    const newMovie = { title: newMovieTitle };
    try {
      const response = await fetch('http://localhost:3001/movies_db', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });
      if (!response.ok) {
        throw new Error('Failed to add the movie.');
      }
      const createdMovie = await response.json();
      setMovies([...movies, createdMovie]);
      setNewMovieTitle('');
    } catch (error) {
      console.error('Error adding the movie:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new movie title..."
        value={newMovieTitle}
        onChange={(e) => setNewMovieTitle(e.target.value)}
      />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default AddMovie;