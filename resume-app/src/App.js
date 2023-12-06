// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="flex flex-col bg-amber-400">
      <Header />
      <div class="relative bg-white z-10">
        <About />
        <Experience />
        <Education />
        <Skills />

        
      </div>
    </div>
  );
}

export default App;

