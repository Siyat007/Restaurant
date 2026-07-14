import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, MapPin, Clock } from 'lucide-react';

// Import Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';
import VisitUs from './pages/VisitUs';
import Media from './pages/Media';
import Memories from './pages/Memories';
import AdminMemories from './pages/AdminMemories';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <img src="/images/image2.jpg" alt="Cendol Logo" className="logo-icon" />
          <div className="logo-text">
            Ansari's<span>Famous</span>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/story" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/visit" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Visit Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/media" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Media
            </NavLink>
          </li>
          <li>
            <NavLink to="/memories" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              Memories
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="logo-text">Ansari's<span>Famous</span></div>
          <button onClick={closeMobileMenu}><X size={28} /></button>
        </div>
        <ul className="drawer-links">
          <li>
            <NavLink to="/" className="drawer-link" onClick={closeMobileMenu} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/story" className="drawer-link" onClick={closeMobileMenu}>
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="drawer-link" onClick={closeMobileMenu}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/visit" className="drawer-link" onClick={closeMobileMenu}>
              Visit Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/media" className="drawer-link" onClick={closeMobileMenu}>
              Media
            </NavLink>
          </li>
          <li>
            <NavLink to="/memories" className="drawer-link" onClick={closeMobileMenu}>
              Memories
            </NavLink>
          </li>
        </ul>
      </div>
      {mobileMenuOpen && <div className="drawer-overlay" onClick={closeMobileMenu}></div>}

      <style>{`
        /* Drawer Styles */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: -300px;
          width: 300px;
          height: 100vh;
          background: var(--dark);
          color: var(--text-light);
          z-index: 1001;
          display: flex;
          flex-direction: column;
          padding: 2rem;
          transition: var(--transition-smooth);
          box-shadow: var(--shadow-lg);
        }
        .mobile-drawer.open {
          right: 0;
        }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1rem;
        }
        .drawer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .drawer-link {
          font-size: 1.3rem;
          font-weight: 500;
          display: block;
          transition: var(--transition-smooth);
        }
        .drawer-link:hover, .drawer-link.active {
          color: var(--primary-light);
          padding-left: 10px;
        }
        .drawer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 1000;
        }
      `}</style>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container">
        <Navigation />
        
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<OurStory />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/visit" element={<VisitUs />} />
            <Route path="/media" element={<Media />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/admin/memories" element={<AdminMemories />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>Ansari's Famous Cendol</h3>
              <p>
                A family-run Indian-Muslim (Mamak) stall serving refreshing, traditional
                cendol to Taiping locals and visitors.
              </p>
              <div className="footer-brand-legacy">
                Since 1940 • A Taiping local favourite
              </div>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/story">Our Story</NavLink></li>
                <li><NavLink to="/menu">Menu</NavLink></li>
                <li><NavLink to="/visit">Visit Us</NavLink></li>
                <li><NavLink to="/media">Media & Gallery</NavLink></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <div className="footer-contact-item">
                <MapPin size={20} />
                <span>92, Jalan Barrack, 34000 Taiping, Perak, Malaysia</span>
              </div>
              <div className="footer-contact-item">
                <Clock size={20} />
                <span>Open Daily: 10:00 AM - 6:30 PM (Fri 12:00-2:30 PM closed)</span>
              </div>
              <div className="footer-contact-item">
                <Phone size={20} />
                <span>012-562 9440</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Ansari's Famous Cendol. All Rights Reserved.</p>
            <p>Made for the Taiping community.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
