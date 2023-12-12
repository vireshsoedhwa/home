// src/App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

import github from './github.svg';
import linkedin from './linkedin.svg';

function App() {
  return (
    <div className="flex flex-col bg-yellow-400">
      <Header />
      <div className="relative bg-white z-10">
        <About />
        <Experience />
        <Education />
        <Skills />


        <footer id="footer" className="mt-32 md:px-16">
          <h2 className="text-center mb-6 -rotate-2 text-xl font-motorstencil">
            Don't forget to follow me..
          </h2>
          <div className="grid md:grid-cols-5 gap-4 pb-6 md:pb-0">
            <div className="order-2 md:order-1 md:col-span-2 text-gray-400 md:py-6 text-center md:text-left">
              <span className="md:hidden lg:inline-block"> Viresh Soedhwa © | no rights reserved
              </span>
            </div>
            <div className="order-1 md:order-2 bg-yellow-500 p-6 text-center font-bold mb-3 md:mb-0">

              <div className="flex flex-row space-x-4 items-center justify-center">


                <a className="mx-1 hover:text-white-400"
                  href="https://www.linkedin.com/in/vireshsoedhwa" aria-label="Linkedin" target="_blank" rel="noreferrer">
                  <img src={linkedin} className="hover:scale-110" alt="logo" width="50" height="50" />
                </a>

                <a className="mx-1"
                  href="https://github.com/vireshsoedhwa" aria-label="Github"
                  target="_blank" rel="noreferrer">
                  <img src={github} className="hover:scale-110" alt="logo" width="50" height="50" />
                </a>

              </div>
            </div>
          </div>


        </footer>
      </div>
    </div>
  );
}

export default App;

