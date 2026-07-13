import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (tabIdx) => {
    navigate('/services', { state: { serviceTab: tabIdx } });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="/img/logoace.png" 
              alt="ACE ENERGY SERVICE" 
              className="logo-footer-img" 
              onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }} 
            />
            <p>{t('footer.tagline')}</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/pt-aceenergyservice/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/@aceenergyservice12" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.instagram.com/aceenergyservice/?hl=ar" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><button onClick={() => handleLinkClick('/')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('nav.home')}</button></li>
              <li><button onClick={() => handleLinkClick('/about')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('nav.about')}</button></li>
              <li><button onClick={() => handleLinkClick('/services')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('nav.services')}</button></li>
              <li><button onClick={() => handleLinkClick('/projects')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('nav.projects')}</button></li>
              <li><button onClick={() => handleLinkClick('/contact')} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('nav.contact')}</button></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>{t('footer.services')}</h4>
            <ul>
              <li><button onClick={() => handleServiceClick(0)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('footer.s1')}</button></li>
              <li><button onClick={() => handleServiceClick(1)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('footer.s2')}</button></li>
              <li><button onClick={() => handleServiceClick(2)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('footer.s3')}</button></li>
              <li><button onClick={() => handleServiceClick(4)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('footer.s4')}</button></li>
              <li><button onClick={() => handleServiceClick(5)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', textAlign: 'left', font: 'inherit' }}>{t('footer.s5')}</button></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contactUs')}</h4>
            <p><i className="fas fa-map-pin"></i> {t('contact.address.desc')}</p>
            <p><i className="fas fa-phone"></i> +62 877-7005-1282</p>
            <p><i className="fas fa-envelope"></i> admin@aceenergyservice.com</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
