import React, { useContext, useEffect } from 'react';
import AppContext from './AppContext.js';

const Search = () => {
  const { movies, searchQuery, setSearchQuery, searchResults, setSearchResults } = useContext(AppContext);

  const handleSearch = () => {
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length > 0 && (
        <div>
          <h2>Search Results</h2>
          <ul>
            {searchResults.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;