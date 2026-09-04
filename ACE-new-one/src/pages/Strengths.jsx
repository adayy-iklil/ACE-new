import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Strengths() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="strengths" className="section bg-light">
      <div className="container">
        <div className={`section-header ${active ? 'reveal active' : 'reveal'}`}>
          <span className="section-tag">{t('strengths_tag')}</span>
          <h2>{t('strengths_title')}</h2>
          <p>{t('strengths_sub')}</p>
        </div>
        <div className="strengths-grid">
          <div className={`strength-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-users"></i>
            <h3>{t('strength1_title')}</h3>
            <p>{t('strength1_desc')}</p>
          </div>
          <div className={`strength-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-globe-asia"></i>
            <h3>{t('strength2_title')}</h3>
            <p>{t('strength2_desc')}</p>
          </div>
          <div className={`strength-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-leaf"></i>
            <h3>{t('strength3_title')}</h3>
            <p>{t('strength3_desc')}</p>
          </div>
          <div className={`strength-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-microchip"></i>
            <h3>{t('strength4_title')}</h3>
            <p>{t('strength4_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
