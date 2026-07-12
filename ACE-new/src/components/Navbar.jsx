import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', labelKey: 'nav_home' },
    { path: '/about', labelKey: 'nav_about' },
    { path: '/strength', labelKey: 'nav_strength' },
    { path: '/services', labelKey: 'nav_services' },
    { path: '/projects', labelKey: 'nav_projects' },
    { path: '/contact', labelKey: 'nav_contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo-area">
          <img src="/img/logo.png" alt="Company Logo" className="logo-img" onError={(e) => { e.target.src = 'https://placehold.co/60x60/0A2B4E/white?text=ACE'; }} />
          <img src="/img/logoace.png" alt="Company Logo" className="logo-img" onError={(e) => { e.target.src = 'https://placehold.co/60x60/0A2B4E/white?text=ACE'; }} />
        </div>
        
        <div className="nav-menu" id="navMenu">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              {t(item.labelKey)}
            </Link>
          ))}
        </div>

        <div className="lang-selector">
          <button 
            className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
            onClick={() => setLanguage('en')}
          >
            🇬🇧 EN
          </button>
          <button 
            className={`lang-btn ${language === 'id' ? 'active' : ''}`} 
            onClick={() => setLanguage('id')}
          >
            🇮🇩 ID
          </button>
          <button 
            className={`lang-btn ${language === 'ko' ? 'active' : ''}`} 
            onClick={() => setLanguage('ko')}
          >
            🇰🇷 KO
          </button>
        </div>

        <div 
          className="mobile-toggle" 
          id="mobileToggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <i className="fas fa-bars"></i>
        </div>
      </div>

      <div id="mobileMenu" className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'}`}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={handleLinkClick}
          >
            {t(item.labelKey)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
