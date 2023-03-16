import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Project from './Project';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';




function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
