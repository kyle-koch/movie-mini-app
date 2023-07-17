import logo from './logo.svg';
import './App.css';
import Main from './frontend/Main.js'
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <h1>My Stupid Movie App</h1>
      <Routes>
        <Route path='/' element={ <Main /> } />
      </Routes>
    </>
  );
}

export default App;
