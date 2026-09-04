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
      ? 'Terima kasih! Tim kami akan segera menghubungi Anda.' 
      : (language === 'ko' ? '감사합니다! 곧 연락드리겠습니다.' : 'Thank you! Our team will reach out soon.');
    
    setResponseMsg(msg);
    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setResponseMsg('');
    }, 5000);
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className={`section-header ${active ? 'reveal active' : 'reveal'}`}>
          <span className="section-tag">{t('contact_tag')}</span>
          <h2>{t('contact_title')}</h2>
        </div>
        
        <div className="contact-grid">
          <div className={`contact-form ${active ? 'reveal active' : 'reveal'}`}>
            <h3>{t('contact_form_title')}</h3>
            <form id="contactForm" onSubmit={handleSubmit}>
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
              <textarea 
                rows="4" 
                placeholder={t('contact_message')}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn-primary">
                {t('contact_send')} <i className="fas fa-paper-plane"></i>
              </button>
            </form>
            {responseMsg && (
              <div id="formResponse">
                <i className="fas fa-check-circle"></i> {responseMsg}
              </div>
            )}
          </div>
          
          <div className={`contact-info ${active ? 'reveal active' : 'reveal'}`}>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <p>Alamanda Tower, TB Simatupang No.22-26, Jakarta Selatan, 12430</p>
            </div>
            <div>
              <i className="fas fa-phone-alt"></i>
              <p>+62 877-7005-1282 (Faizan) | +62 812-1857-8050 (Febra)</p>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <p>admin@aceenergyservice.com</p>
            </div>
            <div className="map-placeholder">
              <iframe 
                src="https://maps.google.com/maps?q=Alamanda+Tower+Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                loading="lazy" 
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
