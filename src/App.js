import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavMenu from './Components/NavMenu';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Blog from './Components/Blog'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavMenu />
        
        <Routes>
          <Route exact path="/" element={<AboutMe />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Blog" element={<Blog />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
