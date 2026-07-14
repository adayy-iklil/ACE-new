import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  products, 
  calculateCapacity, 
  validateRoofConstraints, 
  filterProducts, 
  rankProductsTopsis 
} from '../utils/calcEngine';
import './Calculator.css';

export default function Calculator() {
  const { t, language } = useLanguage();

  // Wizard Step State (Total 3 Steps)
  const [step, setStep] = useState(1);
  
  // Step 1: Client profile info
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');

  // Step 2: Technical inputs (Only roof area, grid capacity, and monthly bill)
  const [roofArea, setRoofArea] = useState(50);
  const [gridCapacity, setGridCapacity] = useState(2200);
  const [monthlyBill, setMonthlyBill] = useState(15000000);

  // Hidden/Fixed defaults for backend logic compatibility
  const roofType = 'pitched';
  const roofMaterial = 'spandek';
  const slopeAngle = 15;
  const shadingPct = 10;
  const isIndustrial = false;

  // Fixed MCDM Priority weights (Cost: 35%, Efficiency: 25%, Warranty: 20%, TechRating: 20%)
  const wPrice = 35;
  const wEfficiency = 25;
  const wWarranty = 20;
  const wTechRating = 20;

  // Calculation outputs
  const [calcResult, setCalcResult] = useState(null);
  const [validation, setValidation] = useState({ status: { isValid: true, score: 100, level: 'SUCCESS' }, warnings: [] });
  const [rankedProducts, setRankedProducts] = useState([]);

  // Google Form Link
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLScP_Z2n5vA6b4qN_Z2eX2j6o3W4y6K9_vA6b4qN_Z2eX2j6o3W/viewform";

  // Recalculate everything when inputs change
  useEffect(() => {
    // 1. Calculate kWp Capacity
    const capacityInfo = calculateCapacity(monthlyBill, roofArea, gridCapacity);
    setCalcResult(capacityInfo);

    // 2. Validate Roof Constraints with default values
    const valInfo = validateRoofConstraints(roofType, roofMaterial, slopeAngle, shadingPct);
    setValidation(valInfo);

    // 3. Filter products & Rank with TOPSIS
    const filtered = filterProducts(capacityInfo.recommendedKwp, isIndustrial, roofMaterial);
    const ranked = rankProductsTopsis(filtered, {
      price: wPrice,
      efficiency: wEfficiency,
      warranty: wWarranty,
      techRating: wTechRating
    });
    setRankedProducts(ranked);
  }, [monthlyBill, roofArea, gridCapacity]);

  const handleNext = () => {
    if (step === 1 && (!clientName || !clientPhone || !clientEmail)) {
      alert(t('calc_alertFillProfile'));
      return;
    }
    if (step < 3) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePrint = () => {
    window.print();
  };

  const getStepClass = (stepNum) => {
    if (step === stepNum) return 'step-node active';
    if (step > stepNum) return 'step-node completed';
    return 'step-node';
  };

  const formatCurrency = (val) => {
    return 'Rp ' + Math.round(val).toLocaleString('id-ID');
  };

  const getPaybackPeriod = () => {
    if (!calcResult || rankedProducts.length === 0) return 0;
    const baseCostPerKwp = 13500000;
    const systemCost = calcResult.recommendedKwp * baseCostPerKwp;
    const annualSavings = calcResult.annualSavings;
    if (annualSavings === 0) return 0;
    return parseFloat((systemCost / annualSavings).toFixed(1));
  };

  return (
    <div className="calc-container">
      
      {/* SCREEN UI (Hidden on Print) */}
      <div className="no-print">
        
        {/* STEPPER PROGRESS */}
        <div className="stepper-progress">
          <div className={getStepClass(1)}>
            1
            <span className="step-label">{t('calc_step1Label')}</span>
          </div>
          <div className={getStepClass(2)}>
            2
            <span className="step-label">{t('calc_step2Label')}</span>
          </div>
          <div className={getStepClass(3)}>
            3
            <span className="step-label">{t('calc_step3Label')}</span>
          </div>
        </div>

        {/* WIZARD CARD CONTAINER */}
        <div className="wizard-card">
          
          {/* STEP 1: CLIENT IDENTITY */}
          {step === 1 && (
            <div>
              <h3 className="wizard-title">{t('calc_step1Title')}</h3>
              <p className="wizard-desc">{t('calc_step1Desc')}</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label>{t('calc_clientNameLabel')}</label>
                  <input 
                    type="text" 
                    placeholder={t('calc_clientNamePlaceholder')}
                    value={clientName} 
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('calc_clientPhoneLabel')}</label>
                  <input 
                    type="tel" 
                    placeholder={t('calc_clientPhonePlaceholder')}
                    value={clientPhone} 
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>{t('calc_clientEmailLabel')}</label>
                  <input 
                    type="email" 
                    placeholder={t('calc_clientEmailPlaceholder')}
                    value={clientEmail} 
                    onChange={(e) => setClientEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: TECHNICAL INPUTS */}
          {step === 2 && (
            <div>
              <h3 className="wizard-title">{t('calc_step2Title')}</h3>
              <p className="wizard-desc">{t('calc_step2Desc')}</p>
              
              <div className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label>{t('calc_roofAreaLabel')}</label>
                  <input 
                    type="number" 
                    value={roofArea} 
                    onChange={(e) => setRoofArea(Math.max(1, parseInt(e.target.value) || 0))}
                  />
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>{t('calc_roofAreaNote')}</span>
                </div>
                <div className="form-group">
                  <label>{t('calc_gridCapacityLabel')}</label>
                  <select value={gridCapacity} onChange={(e) => setGridCapacity(parseInt(e.target.value))}>
                    <option value="1300">1300 VA (1-Phase)</option>
                    <option value="2200">2200 VA (1-Phase)</option>
                    <option value="3500">3500 VA (1-Phase)</option>
                    <option value="4400">4400 VA (1-Phase)</option>
                    <option value="5500">5500 VA (1-Phase)</option>
                    <option value="6600">6600 VA (1-Phase)</option>
                    <option value="11000">11000 VA (3-Phase)</option>
                    <option value="22000">22000 VA (3-Phase)</option>
                    <option value="33000">33000 VA (3-Phase)</option>
                    <option value="66000">66000 VA (3-Phase)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>{t('calc_monthlyBillLabel')}</label>
                  <input 
                    type="number" 
                    step="500000"
                    value={monthlyBill} 
                    onChange={(e) => setMonthlyBill(Math.max(500000, parseInt(e.target.value) || 0))}
                  />
                </div>
              </div>

              {calcResult && (
                <div className="indicator-grid" style={{ marginTop: '32px' }}>
                  <div className="indicator-box">
                    <h5>{t('calc_idealKwp')}</h5>
                    <p>{calcResult.targetKwp} <small>kWp</small></p>
                  </div>
                  <div className="indicator-box">
                    <h5>{t('calc_maxKwp')}</h5>
                    <p>{calcResult.maxKwpFromRoof} <small>kWp</small></p>
                  </div>
                  <div className="indicator-box highlight">
                    <h5>{t('calc_recKwp')}</h5>
                    <p>{calcResult.recommendedKwp} <small>kWp</small></p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: REPORT & RECOMMENDATIONS */}
          {step === 3 && (
            <div>
              <h3 className="wizard-title">{t('calc_step3Title')}</h3>
              <p className="wizard-desc">{t('calc_step3Desc')}</p>
              
              {calcResult && (
                <div className="indicator-grid">
                  <div className="indicator-box">
                    <h5>{t('calc_estSavings')}</h5>
                    <p style={{ color: '#0A2B4E' }}>{formatCurrency(calcResult.annualSavings / 12)}</p>
                  </div>
                  <div className="indicator-box">
                    <h5>{t('calc_paybackPeriod')}</h5>
                    <p>{getPaybackPeriod()} <small>{t('calc_years')}</small></p>
                  </div>
                  <div className="indicator-box highlight">
                    <h5>{t('calc_co2Offset')}</h5>
                    <p>{calcResult.co2OffsetTons} <small>{t('calc_tons')}</small></p>
                  </div>
                </div>
              )}

              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', marginTop: '24px', color: '#0A2B4E' }}>
                {t('calc_selectedPanels')}
              </h4>
              
              <div className="mcdm-results">
                {rankedProducts.length > 0 ? (
                  rankedProducts.map((p, idx) => (
                    <div key={p.id} className="ranked-item-card">
                      <div className={`rank-badge ${idx === 0 ? 'top-1' : 'others'}`}>
                        {idx + 1}
                      </div>
                      <div className="item-info">
                        <h4>{p.brand} - {p.model}</h4>
                        <p>{t('calc_price')}: {formatCurrency(p.price)} | {t('calc_efficiency')}: {p.efficiency}% | {t('calc_warranty')}: {p.warranty} {t('calc_years')}</p>
                      </div>
                      <div className="item-score-area">
                        <span className="closeness-pct">{p.closeness}%</span>
                        <div className="closeness-bar-bg">
                          <div className="closeness-bar-fg" style={{ width: `${p.closeness}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p style={{ color: '#64748b' }}>{t('calc_noProducts')}</p>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <button 
                  className="btn-nav next"
                  onClick={handlePrint}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 36px' }}
                >
                  <i className="fas fa-file-pdf"></i> {t('calc_downloadPdf')}
                </button>

                {/* Google Form Redirection */}
                <div style={{ 
                  marginTop: '20px', 
                  padding: '24px', 
                  borderRadius: '16px', 
                  background: '#fffdf5', 
                  border: '1px solid #e9d5ff',
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.95rem', color: '#1e293b', marginBottom: '12px', fontWeight: '500' }}>
                    {t('calc_consultationText')}
                  </p>
                  <a 
                    href={googleFormUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: '8px', 
                      color: '#D4AF37', 
                      textDecoration: 'none', 
                      fontWeight: '700', 
                      fontSize: '1rem',
                      borderBottom: '2px solid #D4AF37',
                      paddingBottom: '2px'
                    }}
                  >
                    {t('calc_consultationLink')} <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* WIZARD NAVIGATION CONTROLS */}
        <div className="wizard-actions">
          <button 
            className="btn-nav prev" 
            onClick={handlePrev}
            style={{ visibility: step === 1 ? 'hidden' : 'visible' }}
          >
            {t('calc_btnBack')}
          </button>
          {step < 3 && (
            <button className="btn-nav next" onClick={handleNext}>
              {t('calc_btnNext')} <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
            </button>
          )}
        </div>

      </div>

      {/* PRINT-ONLY LAYOUT (Visible only during PDF print generation) */}
      <div className="print-only print-container">
        
        {/* Letterhead */}
        <div className="print-header">
          <div className="print-header-left">
            <img 
              src="/img/logoace.png" 
              alt="ACE Energy Logo" 
              className="print-logo" 
              onError={(e) => { e.target.src = 'https://placehold.co/120x40/0A2B4E/white?text=ACE'; }}
            />
            <div className="print-header-title" style={{ marginLeft: '12px' }}>
              <h1 style={{ color: '#0A2B4E', fontFamily: 'Arial' }}>PT. ACE ENERGY SERVICE</h1>
              <p style={{ fontSize: '8pt', color: '#555' }}>Green Infrastructure & Solar PV EPC Leader · ISO 9001, 14001, 45001 Certified</p>
            </div>
          </div>
          <div className="print-header-right">
            <strong>{t('calc_pdfTitle')}</strong><br />
            {t('calc_pdfDocNo')}: ACE-ROI-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}<br />
            {t('calc_pdfDate')}: {new Date().toLocaleDateString(language === 'id' ? 'id-ID' : language === 'ko' ? 'ko-KR' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: '15pt', margin: '20px 0', textTransform: 'uppercase', fontFamily: 'Arial', color: '#0A2B4E' }}>
          {t('calc_pdfSub')}
        </h2>

        {/* Client Profile Info Table */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>{t('calc_pdfSec1')}</div>
        <table className="print-table" style={{ marginBottom: '24px' }}>
          <tbody>
            <tr>
              <td style={{ width: '30%', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>{t('calc_pdfClientName')}</td>
              <td><strong>{clientName}</strong></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>{t('calc_pdfClientPhone')}</td>
              <td><strong>{clientPhone}</strong></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>{t('calc_pdfClientEmail')}</td>
              <td><strong>{clientEmail}</strong></td>
            </tr>
          </tbody>
        </table>

        {/* Section 2: Input Parameters */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>{t('calc_pdfSec2')}</div>
        <table className="print-table">
          <thead>
            <tr>
              <th>{t('calc_pdfParam')}</th>
              <th>{t('calc_pdfVal')}</th>
              <th>{t('calc_pdfDesc')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('calc_roofAreaLabel').split(' (')[0]}</td>
              <td><strong>{roofArea} m²</strong></td>
              <td>{t('calc_pdfRoofAreaDesc')}</td>
            </tr>
            <tr>
              <td>{t('calc_gridCapacityLabel').split(' (')[0]}</td>
              <td><strong>{gridCapacity} VA</strong></td>
              <td>{t('calc_pdfGridDesc')}</td>
            </tr>
            <tr>
              <td>{t('calc_monthlyBillLabel').split(' (')[0]}</td>
              <td><strong>{formatCurrency(monthlyBill)}</strong></td>
              <td>{t('calc_pdfBillDesc')}</td>
            </tr>
          </tbody>
        </table>

        {/* Section 3: ROI Math */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>{t('calc_pdfSec3')}</div>
        {calcResult && (
          <table className="print-table">
            <thead>
              <tr>
                <th>{t('calc_pdfMetric')}</th>
                <th>{t('calc_pdfEstVal')}</th>
                <th>{t('calc_pdfTechDesc')}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t('calc_recKwp')}</td>
                <td><strong>{calcResult.recommendedKwp} kWp</strong></td>
                <td>{t('calc_pdfRecKwpDesc')}</td>
              </tr>
              <tr>
                <td>{t('calc_pdfAnnGen')}</td>
                <td><strong>{calcResult.annualGeneration.toLocaleString()} {t('calc_pdfAnnGenUnit')}</strong></td>
                <td>{t('calc_pdfAnnGenDesc')}</td>
              </tr>
              <tr>
                <td>{t('calc_pdfAnnSavings')}</td>
                <td><strong>{formatCurrency(calcResult.annualSavings)} / {t('calc_years')}</strong></td>
                <td>{t('calc_pdfAnnSavingsDesc').replace('{savings}', formatCurrency(calcResult.annualSavings / 12))}</td>
              </tr>
              <tr>
                <td>{t('calc_pdfAnnSavings').replace(t('calc_pdfAnnSavings').split(' ')[0], t('calc_paybackPeriod').split(' ')[0])}</td>
                <td><strong>{getPaybackPeriod()} {t('calc_years')}</strong></td>
                <td>{t('calc_pdfPaybackDesc')}</td>
              </tr>
              <tr>
                <td>{t('calc_co2Offset')}</td>
                <td><strong>{calcResult.co2OffsetTons} {t('calc_tons')} CO₂ / {t('calc_years')}</strong></td>
                <td>{t('calc_pdfCo2Desc')}</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Section 4: Recommendations */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>{t('calc_pdfSec4')}</div>
        <p style={{ fontSize: '10pt', marginBottom: '8px', fontStyle: 'italic' }}>
          {t('calc_pdfSec4Note')}
        </p>
        <table className="print-table">
          <thead>
            <tr>
              <th>{t('calc_pdfRank')}</th>
              <th>{t('calc_pdfPanelBrand')}</th>
              <th>{t('calc_pdfTechSpec')}</th>
              <th>{t('calc_pdfEstPrice')}</th>
              <th>{t('calc_pdfCloseness')}</th>
            </tr>
          </thead>
          <tbody>
            {rankedProducts.map((p, idx) => (
              <tr key={p.id}>
                <td><strong>#{idx + 1}</strong></td>
                <td>{p.brand} {p.model}</td>
                <td>{t('calc_efficiency')}: {p.efficiency}% | {t('calc_warranty')}: {p.warranty} {t('calc_years')} | {t('calc_pdfTechSpec').split(' ')[1] || 'Rating'}: {p.techRating}</td>
                <td>{formatCurrency(p.price)}</td>
                <td><strong>{p.closeness}%</strong></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Note about Consultation Form */}
        <div style={{ marginTop: '24px', fontSize: '9pt', color: '#555', fontStyle: 'italic', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          {t('calc_pdfFormNote').replace('{url}', googleFormUrl)}
        </div>

        {/* Signature Box */}
        <div className="signature-area" style={{ marginTop: '40px' }}>
          <div className="sig-block">
            <p>{t('calc_pdfCreatedBy')}</p>
            <strong style={{ color: '#0A2B4E' }}>PT. ACE ENERGY SERVICE</strong>
            <div className="sig-line">
              {t('calc_pdfSeniorTech')}
            </div>
          </div>
          <div className="sig-block">
            <p>{t('calc_pdfApprovedBy')}</p>
            <strong>{t('calc_pdfClientRep')}</strong>
            <div className="sig-line">
              {t('calc_pdfSigLine')}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
