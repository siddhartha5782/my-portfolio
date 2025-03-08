import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import './App.css';

function AnimatedRoutes() {
  return (
    <AnimatePresence mode="wait">
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/my-portfolio/home" element={<Home />} />
              <Route path="/my-portfolio/about" element={<About />} />
              <Route path="/my-portfolio/projects" element={<Projects />} />
              <Route path="/my-portfolio/case-studies" element={<CaseStudies />} />
              <Route path="/my-portfolio/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/my-portfolio/home" />} />
              <Route path="/my-portfolio" element={<Navigate to="/" />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </AnimatePresence>
    
  );
}
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}
export default App;
