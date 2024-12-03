import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';  
import Projects from './Components/Projects';
import Goals from './Components/Goals';   // Add this component to display your goals and aspirations.
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Goals/>
      <Resume />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
