import React, { useContext, useState } from 'react';
import AppContext from './AppContext.js';

const RemoveMovie = () => {
  const { movies, setMovies } = useContext(AppContext);
  const [movieTitleToRemove, setMovieTitleToRemove] = useState('');

  const handleRemoveMovie = async () => {
    if (movieTitleToRemove.trim() === '') return;
    try {
      const response = await fetch(`http://localhost:3001/movies_db/title/${encodeURIComponent(movieTitleToRemove)}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error('Error removing the movie:', error);
    }
  };
  
  return (
    <div>
      <input
        type="text"
        placeholder="Enter the title of the movie to remove..."
        value={movieTitleToRemove}
        onChange={(e) => setMovieTitleToRemove(e.target.value)}
      />
      <button onClick={handleRemoveMovie}>Remove Movie</button>
    </div>
  );
};

export default RemoveMovie;