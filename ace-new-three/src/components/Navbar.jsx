import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', labelKey: 'nav.home' },
    { path: '/about', labelKey: 'nav.about' },
    { path: '/services', labelKey: 'nav.services' },
    { path: '/projects', labelKey: 'nav.projects' },
    { path: '/contact', labelKey: 'nav.contact' },
  ];

  return (
    <header className="header" id="header">
      <div className="container header-container">
        <div className="logo-group">
          <Link to="/" id="logoLink1" onClick={handleLinkClick}>
            <img 
              src="/img/Logo-ACEES-PNG-ashif-1536x1122.png" 
              alt="ACE ENERGY SERVICE" 
              className="logo-img logo-img-main" 
              onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }} 
            />
          </Link>
          <Link to="/" id="logoLink2" onClick={handleLinkClick}>
            <img 
              src="/img/logoace.png" 
              alt="ACE ENERGY SERVICE" 
              className="logo-img logo-img-secondary" 
              onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }} 
            />
          </Link>
        </div>

        <nav className={`nav ${menuOpen ? 'open' : ''}`} id="mainNav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`} 
              onClick={() => setLanguage('en')}
            >
              EN
            </button>
            <button 
              className={`lang-btn ${language === 'id' ? 'active' : ''}`} 
              onClick={() => setLanguage('id')}
            >
              ID
            </button>
            <button 
              className={`lang-btn ${language === 'ko' ? 'active' : ''}`} 
              onClick={() => setLanguage('ko')}
            >
              KO
            </button>
          </div>
          <button 
            className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
            id="menuToggle" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
