import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const [barHeights, setBarHeights] = useState(['0%', '0%', '0%', '0%', '0%']);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
      setBarHeights(['40%', '60%', '85%', '95%', '70%']);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleCalculateSavings = () => {
    navigate('/calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleContact = () => {
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section video-hero">
      <div className="hero-video-wrapper">
        <img src="/img/background.png" alt="Hero Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div className="hero-video-overlay"></div>
      </div>
      <div className="container hero-wrapper">
        <div className={`hero-left ${active ? 'reveal active' : 'reveal'}`}>
          <div className="tag-badge">
            <i className="fas fa-leaf"></i> {t('hero_badge')}
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: t('hero_title') }} />
          <p>{t('hero_desc')}</p>
          <div className="hero-action-group">
            <button className="action-btn primary-glow" onClick={handleCalculateSavings} style={{ border: 'none', cursor: 'pointer' }}>
              {t('hero_btn1')}
            </button>
            <button className="action-btn secondary-outline" onClick={handleContact} style={{ cursor: 'pointer' }}>
              {t('hero_btn2')}
            </button>
          </div>
        </div>

        <div className={`hero-right ${active ? 'reveal active' : 'reveal'}`}>
          <div className="live-tracker-mockup">
            <div className="tracker-header">
              <span className="dot live-dot"></span>
              <span className="tracker-title">ACE Live Plant O&M Tracker</span>
            </div>
            <div className="tracker-metrics">
              <div className="metric-box">
                <span className="m-label">{t('track_curr')}</span>
                <span className="m-val text-neon">42.8 <small>MW</small></span>
              </div>
              <div className="metric-box">
                <span className="m-label">{t('track_co2')}</span>
                <span className="m-val">142.5 <small>Tons</small></span>
              </div>
            </div>
            <div className="tracker-chart-placeholder">
              {barHeights.map((h, idx) => (
                <div key={idx} className="bar" style={{ height: h }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
