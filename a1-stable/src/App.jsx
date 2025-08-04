import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';
import './styles/App.css';

import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import A1 from './pages/A1';
import ZallaqSchool from './pages/ZallaqSchool';
import ContactPage from './pages/ContactPage';

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a1" element={<A1 />} />
            <Route path="/zallaq-school" element={<ZallaqSchool />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          
          <footer className="footer">
            <div className="container">
              <p>&copy; 2024 A1 Stable. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
