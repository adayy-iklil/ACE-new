import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

function AnimatedCounter({ target }) {
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
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [target]);

  return <span ref={elementRef} className="counter-num">{count}</span>;
}

export default function About() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className={`about-text ${active ? 'reveal active' : 'reveal'}`}>
            <span className="section-tag">{t('about_tag')}</span>
            <h2>{t('about_title')}</h2>
            <p>{t('about_desc')}</p>
            <div className="stats-row">
              <div>
                <i className="fas fa-check-circle"></i> {t('about_stat1')}
              </div>
              <div>
                <i className="fas fa-certificate"></i> {t('about_stat2')}
              </div>
              <div>
                <i className="fas fa-globe"></i> {t('about_stat3')}
              </div>
              <div>
                <i className="fas fa-chart-line"></i> {t('about_stat4')}
              </div>
            </div>
          </div>
          <div className={`about-image ${active ? 'reveal active' : 'reveal'}`}>
            <img 
              src="/img/parents.png" 
              alt="Kantor ACE" 
              className="about-img" 
              onError={(e) => { e.target.src = 'https://placehold.co/500x400/eef2f5/0A2B4E?text=Gambar+Kantor'; }} 
            />
          </div>
        </div>

        <div className={`counter-grid ${active ? 'reveal active' : 'reveal'}`}>
          <div className="counter-item">
            <AnimatedCounter target="30" />+
            <p>{t('counter1')}</p>
          </div>
          <div className="counter-item">
            <AnimatedCounter target="28" />+
            <p>{t('counter2')}</p>
          </div>
          <div className="counter-item">
            <AnimatedCounter target="45" /> MWp
            <p>{t('counter3')}</p>
          </div>
          <div className="counter-item">
            <AnimatedCounter target="35" />+
            <p>{t('counter4')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
