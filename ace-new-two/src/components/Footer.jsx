import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-brand">
            <div className="f-logo-wrap">
              <img
                src="/img/logoace.png"
                alt="ACE Energy"
                className="footer-logo-img"
                onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }}
              />
            </div>
            <p className="footer-tagline">{t('footer_tagline')}</p>
            <div className="footer-certs">
              <span>ISO 9001:2015</span>
              <span>ISO 14001:2015</span>
              <span>ISO 45001:2018</span>
            </div>
            <div className="footer-duns">D&B 5126042563</div>
          </div>

          <div className="footer-contact">
            <h4><i className="fas fa-phone-alt"></i> Contact</h4>
            <p><strong>Faizan Fahlevi Edrial</strong><br /><a href="tel:+6287770051282">+62 877-7005-1282</a></p>
            <h4 style={{ marginTop: '12px' }}><i class="fas fa-envelope"></i> Email</h4>
            <p><a href="mailto:admin@aceenergyservice.com">admin@aceenergyservice.com</a></p>
          </div>

          <div className="footer-social">
            <h4><i className="fas fa-share-alt"></i> Connect</h4>
            <div className="f-socials">
              <a href="https://www.linkedin.com/jobs/view/3704857284/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/ace_energys" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="f-copyright" dangerouslySetInnerHTML={{ __html: t('copyright') }} />
        </div>
      </div>
    </footer>
  );
}
