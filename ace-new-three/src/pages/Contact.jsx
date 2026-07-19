import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch("https://formsubmit.co/ajax/admin@aceenergyservice.com", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "Nama / Name": name,
        "Email": email,
        "No. Telepon / Phone": phone,
        "Pesan / Message": message,
        "_subject": `New Inquiry from ACE Energy Website - ${name}`
      })
    })
    .then(res => res.json())
    .then(data => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setTimeout(() => setSuccess(false), 5000);
    })
    .catch(err => {
      setLoading(false);
      console.error("Failed to send email:", err);
      alert(language === 'id' ? 'Gagal mengirim pesan. Silakan coba kembali.' : 'Failed to send message. Please try again.');
    });
  };

  const getSuccessMsg = () => {
    if (language === 'id') return 'Terima kasih atas pesan Anda! Kami akan segera menghubungi Anda.';
    if (language === 'ko') return '메시지를 보내주셔서 감사합니다! 곧 회신해 드리겠습니다.';
    return 'Thank you for your message! We will get back to you soon.';
  };

  return (
    <div className="page-section active" id="page-contact">
      <div className="section contact-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('contact.tag')}</span>
            <h2>{t('contact.title')}</h2>
            <p>{t('contact.subtitle')}</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-card">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>{t('contact.address.title')}</h4>
                  <p>{t('contact.address.desc')}</p>
                </div>
              </div>
              <div className="contact-card">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>{t('contact.phone.title')}</h4>
                  <p>
                    +62 877-7005-1282 (Faizan)<br />
                    +62 812-1857-8050 (Febra)<br />
                    +62 856-9752-1395 (Mega)
                  </p>
                </div>
              </div>
              <div className="contact-card">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>{t('contact.email.title')}</h4>
                  <p>admin@aceenergyservice.com</p>
                </div>
              </div>
              <div className="contact-badges">
                <span><i className="fas fa-certificate"></i> ISO 9001:2015</span>
                <span><i className="fas fa-certificate"></i> ISO 14001:2015</span>
                <span><i className="fas fa-certificate"></i> ISO 45001:2018</span>
                <span><i className="fas fa-id-card"></i> D&B 5126042563</span>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    placeholder="Your name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.email')}</label>
                  <input 
                    type="email" 
                    placeholder="your@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.phone')}</label>
                  <input 
                    type="text" 
                    placeholder="+62 ..." 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>{t('contact.form.message')}</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your solar project..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                 <button type="submit" className="btn btn-primary" disabled={loading}>
                   {loading ? (language === 'id' ? 'Mengirim...' : language === 'ko' ? '전송 중...' : 'Sending...') : t('contact.form.submit')}
                 </button>
              </form>
              {success && (
                <div style={{ marginTop: '16px', color: '#f7931e', fontWeight: '600', fontSize: '0.95rem' }}>
                  {getSuccessMsg()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
