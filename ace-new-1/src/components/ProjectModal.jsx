import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  if (!project) return null;

  const handleContactClick = () => {
    onClose();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="projectModal" className="modal show" onClick={(e) => { if (e.target.id === 'projectModal') onClose(); }}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h3 id="modalTitle">{project.name}</h3>
        <p id="modalDesc">{project.desc}</p>
        <div className="modal-capacity">
          <strong>{t('modal_capacity')}</strong> <span id="modalCapacity">{project.capacity}</span>
        </div>
        <button className="btn-primary modal-btn" onClick={handleContactClick}>
          {t('modal_button')}
        </button>
      </div>
    </div>
  );
}
