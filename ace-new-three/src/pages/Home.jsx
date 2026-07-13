import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

function StatCounter({ target }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = parseInt(target, 10);
          if (start === end) {
            setCount(end);
            return;
          }
          let totalDuration = 1200; // 1.2s
          let increment = Math.ceil(end / 40);
          if (increment === 0) increment = 1;
          let stepTime = Math.abs(Math.floor(totalDuration / (end / increment)));

          let timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return <span ref={elementRef} className="stat-number">{count}</span>;
}

export default function Home() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleServicesClick = () => {
    navigate('/services');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContactClick = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="page-section active" id="page-home">
      <div className="hero" id="heroSection">
        <div className="hero-video-bg">
          <video autoPlay muted loop playsInline>
            <source src="/img/profilAce.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-overlay"></div>

        <div className="hero-content container">
          <div className="hero-text">
            <span className="hero-badge">{t('hero.badge')}</span>
            <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
            <p>{t('hero.subtitle')}</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleServicesClick}>
                {t('hero.cta1')}
              </button>
              <button className="btn btn-outline" onClick={handleContactClick}>
                {t('hero.cta2')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Company at a Glance */}
      <div className="section glance-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('glance.tag')}</span>
            <h2>{t('glance.title')}</h2>
            <p>{t('glance.subtitle')}</p>
          </div>
          <div className="glance-grid">
            <div className="glance-card">
              <div className="glance-icon"><i className="fas fa-solar-panel"></i></div>
              <h3>{t('glance.card1.title')}</h3>
              <p>{t('glance.card1.desc')}</p>
            </div>
            <div className="glance-card">
              <div className="glance-icon"><i className="fas fa-tools"></i></div>
              <h3>{t('glance.card2.title')}</h3>
              <p>{t('glance.card2.desc')}</p>
            </div>
            <div className="glance-card">
              <div className="glance-icon"><i className="fas fa-leaf"></i></div>
              <h3>{t('glance.card3.title')}</h3>
              <p>{t('glance.card3.desc')}</p>
            </div>
            <div className="glance-card">
              <div className="glance-icon"><i className="fas fa-building"></i></div>
              <h3>{t('glance.card4.title')}</h3>
              <p>{t('glance.card4.desc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div>
                <StatCounter target="15" />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">{t('stats.projects')}</span>
            </div>
            <div className="stat-item">
              <div>
                <StatCounter target="10" />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">{t('stats.years')}</span>
            </div>
            <div className="stat-item">
              <div>
                <StatCounter target="800" />
              </div>
              <span className="stat-label">{t('stats.revenue')}</span>
            </div>
            <div className="stat-item">
              <div>
                <StatCounter target="15" />
                <span className="stat-suffix">+</span>
              </div>
              <span className="stat-label">{t('stats.team')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
