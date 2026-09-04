import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleLearnMore = (e) => {
    e.preventDefault();
    navigate('/about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactUs = (e) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className={`container hero-content ${active ? 'reveal active' : 'reveal'}`}>
        <span className="hero-badge">
          <i className="fas fa-bolt"></i> {t('hero_badge')}
        </span>
        <h1 dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
        <p>{t('hero_desc')}</p>
        <div className="hero-buttons">
          <a href="/about" className="btn-primary" onClick={handleLearnMore}>
            {t('hero_btn1')} <i className="fas fa-arrow-right"></i>
          </a>
          <a href="/contact" className="btn-secondary" onClick={handleContactUs}>
            {t('hero_btn2')} <i className="fas fa-headset"></i>
          </a>
        </div>
      </div>
      <div className="scroll-down" onClick={handleLearnMore} style={{ cursor: 'pointer' }}>
        <i className="fas fa-chevron-down"></i>
      </div>
    </section>
  );
}
