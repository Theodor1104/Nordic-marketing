import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import SEOService from './pages/SEOService';
import WebdesignService from './pages/WebdesignService';
import AppDevelopmentService from './pages/AppDevelopmentService';
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
          <Route path="/services" element={<Services />} />
          <Route path="/proces" element={<Process />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/seo-bureau-danmark" element={<SEOService />} />
          <Route path="/webdesign-bureau-danmark" element={<WebdesignService />} />
          <Route path="/app-udvikling-danmark" element={<AppDevelopmentService />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
