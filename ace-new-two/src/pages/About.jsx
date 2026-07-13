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
          let increment = Math.ceil(end / 30);
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

  return <span ref={elementRef} className="big-num">{count}</span>;
}

export default function About() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about-section image-bg-section">
      <div className="container">
        <div className="modern-grid-2">
          <div className={active ? 'reveal active' : 'reveal'}>
            <span className="sub-headline">{t('about_tag')}</span>
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="body-text text-muted">{t('about_desc')}</p>
            
            <div className="mini-features">
              <div className="m-feat-item">
                <i className="fas fa-shield-halved"></i>
                <div>
                  <h4>{t('about_stat2')}</h4>
                  <p>Top classification tier asset deployment.</p>
                </div>
              </div>
              <div className="m-feat-item">
                <i className="fas fa-chart-network"></i>
                <div>
                  <h4>{t('about_stat4')}</h4>
                  <p>Financially solid infrastructure backing.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`interactive-stats ${active ? 'reveal active' : 'reveal'}`}>
            <div className="stat-card-modern">
              <AnimatedCounter target="30" />
              <span className="suffix">+</span>
              <p>{t('counter1')}</p>
            </div>
            <div className="stat-card-modern">
              <AnimatedCounter target="45" />
              <span className="suffix">MWp</span>
              <p>{t('counter3')}</p>
            </div>
            <div className="stat-card-modern bg-gradient-box">
              <AnimatedCounter target="100" />
              <span className="suffix">%</span>
              <p>{t('strength2_title')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
