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
    { path: '/services', labelKey: 'nav_services' },
    { path: '/calculator', labelKey: 'nav_calc' },
    { path: '/projects', labelKey: 'nav_projects' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const flagMap = {
    en: "🇬🇧 EN",
    id: "🇮🇩 ID",
    ko: "🇰🇷 KO"
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-area">
          <div className="logo-img-wrapper" onClick={() => handleLinkClick()}>
            <Link to="/">
              <img src="/img/logo.png" alt="ACE Energy Logo" className="navbar-logo-img" onError={(e) => { e.target.src = 'https://placehold.co/60x60/0A2B4E/white?text=ACE'; }} />
              <img src="/img/logoace.png" alt="ACE Energy Logo" className="navbar-logo-img" onError={(e) => { e.target.src = 'https://placehold.co/60x60/0A2B4E/white?text=ACE'; }} />
            </Link>
          </div>
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
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            className={`nav-link nav-cta ${isActive('/contact') ? 'active' : ''}`}
          >
            {t('nav_contact')}
          </Link>
        </div>

        <div className="nav-right">
          <div className="lang-dropdown">
            <button className="lang-dropbtn" id="currentLangBtn">
              {flagMap[language]} <i className="fas fa-chevron-down"></i>
            </button>
            <div className="lang-dropdown-content">
              <button onClick={() => setLanguage('en')}>🇬🇧 English</button>
              <button onClick={() => setLanguage('id')}>🇮🇩 Indonesia</button>
              <button onClick={() => setLanguage('ko')}>🇰🇷 한국어</button>
            </div>
          </div>
          <div 
            className="mobile-toggle" 
            id="mobileToggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>

      <div id="mobileMenu" className={`mobile-menu-overlay ${mobileMenuOpen ? '' : 'hidden'}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-menu-content" onClick={(e) => e.stopPropagation()}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={handleLinkClick}
            >
              {t(item.labelKey)}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
          >
            {t('nav_contact')}
          </Link>
        </div>
      </div>
    </nav>
  );
}
