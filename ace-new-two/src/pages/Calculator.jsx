import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Calculator() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const [bill, setBill] = useState(15000000);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const savings = Math.floor(bill * 0.82);
  const systemSize = (bill / 1200000).toFixed(1);
  const co2Offset = (parseFloat(systemSize) * 1.18).toFixed(1);

  return (
    <section id="calculator" className="calculator-section image-bg-section">
      <div className="container">
        <div className={`section-center-header ${active ? 'reveal active' : 'reveal'}`}>
          <span className="sub-headline">{t('nav_calc')}</span>
          <h2 className="section-title">{t('calc_title')}</h2>
          <p className="sub-desc">{t('calc_subtitle')}</p>
        </div>

        <div className={`calc-card ${active ? 'reveal active' : 'reveal'}`}>
          <div className="calc-input-area">
            <label htmlFor="billRange">{t('calc_label')}</label>
            <div className="range-wrapper">
              <input
                type="range"
                id="billRange"
                min="2000000"
                max="100000000"
                step="1000000"
                value={bill}
                onChange={(e) => setBill(parseInt(e.target.value, 10))}
              />
              <div className="range-values">
                <span>2M</span>
                <span id="currentBillVal" className="bill-highlight">
                  IDR {bill.toLocaleString()}
                </span>
                <span>100M+</span>
              </div>
            </div>
          </div>

          <div className="calc-results-grid">
            <div className="result-box-premium">
              <h5>{t('calc_res1')}</h5>
              <p id="saveMonthly">IDR {savings.toLocaleString()}</p>
            </div>
            <div className="result-box-premium">
              <h5>{t('calc_res2')}</h5>
              <p id="systemSize">{systemSize} kWp</p>
            </div>
            <div className="result-box-premium highlight-border">
              <h5>{t('calc_res3')}</h5>
              <p id="co2Offset">{co2Offset} Tons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
