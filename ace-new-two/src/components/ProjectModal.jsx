import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  if (!project) return null;

  const handleContactClick = () => {
    onClose();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDesc = () => {
    if (language === 'id') return project.descID;
    if (language === 'ko') return project.descKO;
    return project.descEN;
  };

  return (
    <div id="projectModal" className="modal show" onClick={(e) => { if (e.target.id === 'projectModal') onClose(); }}>
      <div className="modal-content">
        <span className="close-modal" onClick={onClose}>&times;</span>
        <h3 id="modalTitle">{project.title}</h3>
        <p id="modalDesc" style={{ marginTop: '16px', color: '#94a3b8', fontSize: '0.95rem' }}>{getDesc()}</p>
        <div className="modal-capacity">
          <strong>Capacity:</strong> <span id="modalCapacity">{project.capacity}</span>
        </div>
        <button className="btn-primary modal-btn" onClick={handleContactClick} style={{ 
          background: '#10b981', 
          border: 'none', 
          color: '#fff', 
          width: '100%', 
          padding: '12px', 
          borderRadius: '10px', 
          fontWeight: '700', 
          cursor: 'pointer',
          marginTop: '16px'
        }}>
          {t('modal_button')}
        </button>
      </div>
    </div>
  );
}
