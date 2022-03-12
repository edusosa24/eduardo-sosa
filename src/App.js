import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.js';
import Projects from './components/Projects/Projects.js';
import About from './components/About/About.js';
import './App.css';

let App = () => {

  return (
    <HashRouter>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route
          path='/projects'
          element={<Projects/>}
        />
        <Route
          path='/about'
          element={<About/>}
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
