import logo from './logo.svg';
import './App.css';
import Main from './Main.js'
import AppContext from './AppContext.js';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <AppContext.Provider value={ {movies, setMovies} }>
    <h1>My Stupid Movie App</h1>
      <Routes>
        <Route path='/' element={ <Main /> } />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
