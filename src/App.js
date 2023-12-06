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


        <div class="container grid md:grid-cols-6 gap-8 items-center">
          <div class="md:col-start-3 md:col-span-4">
            <h2 class="inline-block bg-yellow-400 py-2 px-4 md:-ml-4 mb-2 text-lg font-bold uppercase skew-x-12">
              This page is currently being updated
            </h2>
          </div>
          <div class="md:col-start-2 md:col-span-4">
            <p class="ml-px text-xl text-gray-500">
              ...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

