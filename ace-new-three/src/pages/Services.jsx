import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    if (location.state && location.state.serviceTab !== undefined) {
      setActiveTab(location.state.serviceTab);
    }
  }, [location.state]);

  const tabs = [
    { idx: 0, labelKey: 'services.tab1' },
    { idx: 1, labelKey: 'services.tab2' },
    { idx: 2, labelKey: 'services.tab3' },
    { idx: 3, labelKey: 'services.tab4' },
    { idx: 4, labelKey: 'services.tab5' },
    { idx: 5, labelKey: 'services.tab6' },
    { idx: 6, labelKey: 'services.tab7' }
  ];

  return (
    <div className="page-section active" id="page-services">
      <div className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">{t('services.tag')}</span>
            <h2>{t('services.title')}</h2>
            <p>{t('services.subtitle')}</p>
          </div>

          <div className="service-tabs">
            {tabs.map((tab) => (
              <button 
                key={tab.idx}
                className={`service-tab ${activeTab === tab.idx ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.idx)}
              >
                {t(tab.labelKey)}
              </button>
            ))}
          </div>

          <div className="service-content-wrapper">
            {/* O&M */}
            {activeTab === 0 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-bolt"></i></div>
                  <div className="service-info">
                    <h3>{t('services.om.title')}</h3>
                    <p>{t('services.om.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.om.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.om.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.om.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.om.f4')}</li>
                      <li><i className="fas fa-check"></i> {t('services.om.f5')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-tools"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* Commercial EPC */}
            {activeTab === 1 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-building"></i></div>
                  <div className="service-info">
                    <h3>{t('services.commercial.title')}</h3>
                    <p>{t('services.commercial.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.commercial.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.commercial.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.commercial.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.commercial.f4')}</li>
                      <li><i className="fas fa-check"></i> {t('services.commercial.f5')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-industry"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* Residential EPC */}
            {activeTab === 2 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-home"></i></div>
                  <div className="service-info">
                    <h3>{t('services.residential.title')}</h3>
                    <p>{t('services.residential.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.residential.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.residential.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.residential.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.residential.f4')}</li>
                      <li><i className="fas fa-check"></i> {t('services.residential.f5')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-house-chimney"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* Agricultural EPC */}
            {activeTab === 3 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-tractor"></i></div>
                  <div className="service-info">
                    <h3>{t('services.agri.title')}</h3>
                    <p>{t('services.agri.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.agri.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.agri.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.agri.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.agri.f4')}</li>
                      <li><i className="fas fa-check"></i> {t('services.agri.f5')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-seedling"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* REC */}
            {activeTab === 4 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-certificate"></i></div>
                  <div className="service-info">
                    <h3>{t('services.rec.title')}</h3>
                    <p>{t('services.rec.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.rec.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.rec.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.rec.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.rec.f4')}</li>
                      <li><i className="fas fa-check"></i> {t('services.rec.f5')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-file-invoice"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* BESS */}
            {activeTab === 5 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-battery-full"></i></div>
                  <div className="service-info">
                    <h3>{t('services.bess.title')}</h3>
                    <p>{t('services.bess.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.bess.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.bess.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.bess.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.bess.f4')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-bolt"></i></div>
                  </div>
                </div>
              </div>
            )}

            {/* PPP & IPP */}
            {activeTab === 6 && (
              <div className="service-content active">
                <div className="service-detail">
                  <div className="service-icon"><i className="fas fa-handshake"></i></div>
                  <div className="service-info">
                    <h3>{t('services.ppp.title')}</h3>
                    <p>{t('services.ppp.desc')}</p>
                    <ul className="service-features">
                      <li><i className="fas fa-check"></i> {t('services.ppp.f1')}</li>
                      <li><i className="fas fa-check"></i> {t('services.ppp.f2')}</li>
                      <li><i className="fas fa-check"></i> {t('services.ppp.f3')}</li>
                      <li><i className="fas fa-check"></i> {t('services.ppp.f4')}</li>
                    </ul>
                  </div>
                  <div className="service-image">
                    <div className="img-placeholder small"><i className="fas fa-handshake"></i></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
