import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Projects() {
  const { t } = useLanguage();

  const projectList = [
    { id: 'p1', img: '/img/hwi.jpg', labelKey: 'projects.p1.name', detailKey: 'projects.p1.detail' },
    { id: 'p2', img: '/img/pwj.jpg', labelKey: 'projects.p2.name', detailKey: 'projects.p2.detail' },
    { id: 'p3', img: '/img/hsk.jpg', labelKey: 'projects.p3.name', detailKey: 'projects.p3.detail' },
    { id: 'p4', img: '/img/kanindo.jpg', labelKey: 'projects.p4.name', detailKey: 'projects.p4.detail' },
    { id: 'p5', img: '/img/shinsung.jpg', labelKey: 'projects.p5.name', detailKey: 'projects.p5.detail' },
    { id: 'p6', img: '/img/kaiti.jpg', labelKey: 'projects.p6.name', detailKey: 'projects.p6.detail' },
  ];

  return (
    <div className="page-section active" id="page-projects">
      <div className="section projects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('projects.tag')}</span>
            <h2>{t('projects.title')}</h2>
            <p>{t('projects.subtitle')}</p>
          </div>

          <div className="projects-grid">
            {projectList.map((p) => (
              <div key={p.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={p.img} 
                    alt={t(p.labelKey)} 
                    className="project-img" 
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop';
                    }}
                  />
                </div>
                <div className="project-info">
                  <h4>{t(p.labelKey)}</h4>
                  <p>{t(p.detailKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
