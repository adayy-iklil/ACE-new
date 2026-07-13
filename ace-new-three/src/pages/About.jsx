import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="page-section active" id="page-about">
      <div className="section about-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('about.tag')}</span>
            <h2>{t('about.title')}</h2>
            <p>{t('about.subtitle')}</p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <h3>{t('about.ace.title')}</h3>
              <p>{t('about.ace.p1')}</p>
              <p>{t('about.ace.p2')}</p>
              <div className="about-badge">
                <i className="fas fa-check-circle"></i>
                <span>{t('about.ace.badge')}</span>
              </div>
            </div>
            <div className="about-image">
              <img 
                src="/img/RTS039.jpg" 
                alt="ACE ENERGY SERVICE Office" 
                className="about-img" 
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop';
                }}
              />
            </div>
          </div>

          <div className="parent-company">
            <h3>{t('about.parent.title')}</h3>
            <p>{t('about.parent.p1')}</p>
            <div className="parent-grid">
              <div className="parent-item">
                <i className="fas fa-trophy"></i>
                <span>{t('about.parent.item1')}</span>
              </div>
              <div className="parent-item">
                <i className="fas fa-industry"></i>
                <span>{t('about.parent.item2')}</span>
              </div>
              <div className="parent-item">
                <i className="fas fa-users"></i>
                <span>{t('about.parent.item3')}</span>
              </div>
              <div className="parent-item">
                <i className="fas fa-chart-line"></i>
                <span>{t('about.parent.item4')}</span>
              </div>
            </div>
          </div>

          <div className="strengths">
            <h3>{t('about.strengths.title')}</h3>
            <p className="strengths-quote">{t('about.strengths.quote')}</p>
            <div className="strengths-grid">
              <div className="strength-card">
                <i className="fas fa-user-graduate"></i>
                <h4>{t('about.strengths.s1.title')}</h4>
                <p>{t('about.strengths.s1.desc')}</p>
              </div>
              <div className="strength-card">
                <i className="fas fa-globe"></i>
                <h4>{t('about.strengths.s2.title')}</h4>
                <p>{t('about.strengths.s2.desc')}</p>
              </div>
              <div className="strength-card">
                <i className="fas fa-recycle"></i>
                <h4>{t('about.strengths.s3.title')}</h4>
                <p>{t('about.strengths.s3.desc')}</p>
              </div>
              <div className="strength-card">
                <i className="fas fa-microchip"></i>
                <h4>{t('about.strengths.s4.title')}</h4>
                <p>{t('about.strengths.s4.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
