import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Solutions() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="services-section image-bg-section">
      <div className="container">
        <div className={`section-center-header ${active ? 'reveal active' : 'reveal'}`}>
          <span className="sub-headline">{t('services_tag')}</span>
          <h2 className="section-title">{t('services_title')}</h2>
        </div>
        <div className="solutions-grid-modern">
          <div className={`solution-card-v2 ${active ? 'reveal active' : 'reveal'}`}>
            <div className="card-icon"><i className="fas fa-screwdriver-wrench"></i></div>
            <h3>{t('service1_title')}</h3>
            <p>{t('service1_desc')}</p>
          </div>
          <div className={`solution-card-v2 ${active ? 'reveal active' : 'reveal'}`}>
            <div className="card-icon"><i className="fas fa-industry"></i></div>
            <h3>{t('service2_title')}</h3>
            <p>{t('service2_desc')}</p>
          </div>
          <div className={`solution-card-v2 ${active ? 'reveal active' : 'reveal'}`}>
            <div className="card-icon"><i className="fas fa-solar-panel"></i></div>
            <h3>{t('service3_title')}</h3>
            <p>{t('service3_desc')}</p>
          </div>
          <div className={`solution-card-v2 ${active ? 'reveal active' : 'reveal'}`}>
            <div className="card-icon"><i className="fas fa-battery-three-quarters"></i></div>
            <h3>{t('service6_title')}</h3>
            <p>{t('service6_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
