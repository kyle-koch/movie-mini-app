import React, { useState, useEffect, useContext } from 'react';
import AppContext from './AppContext.js';
import DisplayMovieTitles from './DisplayAll.js';
import Search from './Search.js';

function Main() {
  const { displayTitles, setDisplayTitles } = useContext(AppContext);

  return (
    <>
      <Search /><br />
      {!displayTitles && <button onClick={() => setDisplayTitles(true)}>Show All Movie Titles</button>}
      {displayTitles && <DisplayMovieTitles />}
    </>
  );
}

export default Main;