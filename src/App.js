import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import HjemmesiderService from './pages/HjemmesiderService';
import AppsService from './pages/AppsService';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Cases from './pages/Cases';
import Process from './pages/Process';
import './styles/App.css';

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';

  // Admin page has its own layout
  if (isAdminPage) {
    return <Admin />;
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hjemmesider" element={<HjemmesiderService />} />
          <Route path="/apps" element={<AppsService />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/proces" element={<Process />} />

          {/* Redirects from old URLs for SEO */}
          <Route path="/services" element={<Navigate to="/" replace />} />
          <Route path="/seo-bureau-danmark" element={<Navigate to="/hjemmesider" replace />} />
          <Route path="/webdesign-bureau-danmark" element={<Navigate to="/hjemmesider" replace />} />
          <Route path="/app-udvikling-danmark" element={<Navigate to="/apps" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
