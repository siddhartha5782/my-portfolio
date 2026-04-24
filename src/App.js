import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const pageVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5,
};

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                <Home />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                <About />
              </motion.div>
            } />
            <Route path="/projects" element={
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                <Projects />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                <Contact />
              </motion.div>
            } />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

