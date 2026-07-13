import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <img 
            src="/img/logoace.png" 
            alt="Logo ACE" 
            className="footer-logo" 
            onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }} 
          />
          <p>{t('footer_text')}</p>
        </div>
        
        <div>
          <h4>{t('footer_links')}</h4>
          <Link to="/" onClick={handleLinkClick}>{t('nav_home')}</Link>
          <Link to="/services" onClick={handleLinkClick}>{t('nav_services')}</Link>
          <Link to="/projects" onClick={handleLinkClick}>{t('nav_projects')}</Link>
          <Link to="/contact" onClick={handleLinkClick}>{t('nav_contact')}</Link>
        </div>
        
        <div>
          <h4>{t('footer_cert')}</h4>
          <p>ISO 9001:2015</p>
          <p>ISO 14001:2015</p>
          <p>ISO 45001:2018</p>
          <p>D&B 5126042563</p>
        </div>
        
        <div>
          <h4>{t('footer_follow')}</h4>
          <div className="social-icons">
            <a href="https://www.linkedin.com/jobs/view/3704857284/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/ace_energys?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC1hkItH_WgTXwnmJC5CSWLg" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="copyright">{t('copyright')}</div>
    </footer>
  );
}
