import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="services" className="section">
      <div className="container">
        <div className={`section-header ${active ? 'reveal active' : 'reveal'}`}>
          <span className="section-tag">{t('services_tag')}</span>
          <h2>{t('services_title')}</h2>
          <p>{t('services_sub')}</p>
        </div>
        <div className="services-grid">
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-charging-station"></i>
            <h3>{t('service1_title')}</h3>
            <p>{t('service1_desc')}</p>
          </div>
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-industry"></i>
            <h3>{t('service2_title')}</h3>
            <p>{t('service2_desc')}</p>
          </div>
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-home"></i>
            <h3>{t('service3_title')}</h3>
            <p>{t('service3_desc')}</p>
          </div>
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-tractor"></i>
            <h3>{t('service4_title')}</h3>
            <p>{t('service4_desc')}</p>
          </div>
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-file-invoice-dollar"></i>
            <h3>{t('service5_title')}</h3>
            <p>{t('service5_desc')}</p>
          </div>
          <div className={`service-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-battery-full"></i>
            <h3>{t('service6_title')}</h3>
            <p>{t('service6_desc')}</p>
          </div>
          <div className={`service-card wide-card ${active ? 'reveal active' : 'reveal'}`}>
            <i className="fas fa-handshake"></i>
            <h3>{t('service7_title')}</h3>
            <p>{t('service7_desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
