import React, { useState, useEffect, useContext } from 'react';
import AppContext from './AppContext.js';
import DisplayMovieTitles from './DisplayAll.js';
import Search from './Search.js';
import AddMovie from './AddMovie.js';
import RemoveMovie from './RemoveMovie.js';

function Main() {
  const { displayTitles, setDisplayTitles } = useContext(AppContext);

  return (
    <>
      Search our IMMENSE database of movies!
      <Search /><br />
      Don't see what you're looking for? Add it yourself!<br />
      <AddMovie /><br />
      See some garbage that shouldn't be here? GET RID OF IT<br />
      <RemoveMovie /><br />
      {!displayTitles && <button onClick={() => setDisplayTitles(true)}>Show All Movie Titles</button>}
      {displayTitles && <DisplayMovieTitles />}
    </>
  );
}

export default Main;