import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMsg, setResponseMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = language === 'id' 
      ? 'Permintaan survei berhasil dikirim! Tim teknik kami akan menghubungi Anda.' 
      : (language === 'ko' ? '실사 요청이 성공적으로 접수되었습니다! 곧 연락드리겠습니다.' : 'Survey request successfully submitted! Our team will contact you shortly.');
    
    setResponseMsg(msg);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setResponseMsg('');
    }, 5000);
  };

  return (
    <section id="contact" className="contact-section image-bg-section">
      <div className="container">
        <div className={`contact-frame-wrapper ${active ? 'reveal active' : 'reveal'}`}>
          <div className="contact-details-side">
            <h2>{t('contact_title')}</h2>
            <p>{t('contact_tag')}</p>
            <div className="contact-links-list">
              <div className="c-link-item">
                <i className="fas fa-envelope-open-text"></i>
                <span>admin@aceenergyservice.com</span>
              </div>
              <div className="c-link-item">
                <i className="fas fa-map-location-dot"></i>
                <span>Alamanda Tower, Level 23, TB Simatupang, Jakarta</span>
              </div>
            </div>
            
            <div className="contact-location-placeholder">
              <div className="loc-pin-icon"><i className="fas fa-location-dot"></i></div>
              <div className="loc-text">Alamanda Tower, Jakarta</div>
              <div className="loc-map-thumb">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.123456789012!2d106.800000!3d-6.300000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed123456789%3A0x1234567890abcdef!2sAlamanda%20Tower!5e0!3m2!1sen!2sid!4v1700000000000"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ACE Energy Location"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="contact-form-side">
            <form id="contactForm" className="modern-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <input 
                  type="text" 
                  placeholder={t('contact_name')} 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
                <input 
                  type="email" 
                  placeholder={t('contact_email')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <textarea 
                rows="4" 
                placeholder={t('contact_message')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <button type="submit" className="form-submit-glow">
                {t('contact_send')} <i className="fas fa-arrow-right"></i>
              </button>
            </form>
            {responseMsg && (
              <div id="formResponse" style={{ marginTop: '14px', fontSize: '14px', color: '#10b981' }}>
                {responseMsg}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
