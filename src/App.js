import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/App.css';

// Lazy load all pages for better performance
const Home = lazy(() => import('./pages/Home'));
const HjemmesiderService = lazy(() => import('./pages/HjemmesiderService'));
const AppsService = lazy(() => import('./pages/AppsService'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Admin = lazy(() => import('./pages/Admin'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Cases = lazy(() => import('./pages/Cases'));
const Process = lazy(() => import('./pages/Process'));
const CaseDemo = lazy(() => import('./pages/CaseDemo'));

// Simple loading fallback
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0f2d3d 0%, #091c28 100%)'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid rgba(255,255,255,0.1)',
      borderTop: '3px solid #14b8a6',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite'
    }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname === '/admin';
  const isDemoPage = location.pathname.startsWith('/demo/');

  // Admin page has its own layout
  if (isAdminPage) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Admin />
      </Suspense>
    );
  }

  // Demo pages are standalone without header/footer
  if (isDemoPage) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/demo/:caseId" element={<CaseDemo />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
