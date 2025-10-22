import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CausesPage from './pages/CausesPage';
import DonatePage from './pages/DonatePage';
import MembersPage from './pages/MembersPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/causes" element={<CausesPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
        
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
