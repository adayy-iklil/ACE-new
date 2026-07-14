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
  const { t } = useLanguage();

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
      alert('Mohon lengkapi profil Nama, Nomor Telepon, dan Email terlebih dahulu.');
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
            <span className="step-label">Profil Klien</span>
          </div>
          <div className={getStepClass(2)}>
            2
            <span className="step-label">Kebutuhan PLTS</span>
          </div>
          <div className={getStepClass(3)}>
            3
            <span className="step-label">Hasil Rekomendasi</span>
          </div>
        </div>

        {/* WIZARD CARD CONTAINER */}
        <div className="wizard-card">

          {/* STEP 1: CLIENT IDENTITY */}
          {step === 1 && (
            <div>
              <h3 className="wizard-title">Langkah 1: Identitas Profil Klien</h3>
              <p className="wizard-desc">Harap masukkan nama, nomor telepon, dan email aktif Anda untuk menyusun proposal penawaran PLTS resmi.</p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="form-group">
                  <label>Nama Lengkap / Nama Perusahaan</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap Anda..."
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Nomor Telepon / WhatsApp</label>
                  <input
                    type="tel"
                    placeholder="Contoh: 087770051282"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Alamat Email</label>
                  <input
                    type="email"
                    placeholder="Contoh: nama@domain.com"
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
              <h3 className="wizard-title">Langkah 2: Data Teknis & Konsumsi Listrik</h3>
              <p className="wizard-desc">Masukkan luas atap bersih dan informasi kelistrikan PLN Anda untuk menghitung kapasitas PLTS yang disarankan.</p>

              <div className="form-grid">
                <div className="form-group" style={{ gridColumn: 'span 2' }}>
                  <label>Luas Atap yang Tersedia (m²)</label>
                  <input
                    type="number"
                    value={roofArea}
                    onChange={(e) => setRoofArea(Math.max(1, parseInt(e.target.value) || 0))}
                  />
                  <span style={{ fontSize: '0.8rem', color: '#64748b' }}>Standard luas: 1 kWp panel surya membutuhkan ± 5-6 m² area atap bersih.</span>
                </div>
                <div className="form-group">
                  <label>Sambungan Kontrak Daya Listrik PLN (VA)</label>
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
                  <label>Tagihan Listrik Rata-Rata Bulanan (IDR)</label>
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
                    <h5>Kebutuhan Ideal</h5>
                    <p>{calcResult.targetKwp} <small>kWp</small></p>
                  </div>
                  <div className="indicator-box">
                    <h5>Batas Maks Atap</h5>
                    <p>{calcResult.maxKwpFromRoof} <small>kWp</small></p>
                  </div>
                  <div className="indicator-box highlight">
                    <h5>Rekomendasi Kapasitas</h5>
                    <p>{calcResult.recommendedKwp} <small>kWp</small></p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* STEP 3: REPORT & RECOMMENDATIONS */}
          {step === 3 && (
            <div>
              <h3 className="wizard-title">Langkah 3: Hasil Analisis ROI & Pemeringkatan Produk</h3>
              <p className="wizard-desc">Analisis ROI telah selesai. Berikut adalah laporan finansial kelayakan PLTS dan rekomendasi produk surya terbaik berdasarkan masukan Anda.</p>

              {calcResult && (
                <div className="indicator-grid">
                  <div className="indicator-box">
                    <h5>Estimasi Hemat Bulanan</h5>
                    <p style={{ color: '#0F5A3E' }}>{formatCurrency(calcResult.annualSavings / 12)}</p>
                  </div>
                  <div className="indicator-box">
                    <h5>Masa Balik Modal</h5>
                    <p>{getPaybackPeriod()} <small>Tahun</small></p>
                  </div>
                  <div className="indicator-box highlight">
                    <h5>Reduksi CO2 / Tahun</h5>
                    <p>{calcResult.co2OffsetTons} <small>Ton</small></p>
                  </div>
                </div>
              )}

              <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '16px', marginTop: '24px', color: '#0F5A3E' }}>
                Rekomendasi Panel Surya Terpilih untuk Anda
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
                        <p>Harga: {formatCurrency(p.price)} | Efisiensi: {p.efficiency}% | Garansi: {p.warranty} Tahun</p>
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
                  <p style={{ color: '#64748b' }}>Tidak ada produk yang lolos filtering aturan kecocokan atap.</p>
                )}
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <button
                  className="btn-nav next"
                  onClick={handlePrint}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 36px' }}
                >
                  <i className="fas fa-file-pdf"></i> Unduh Laporan PDF Resmi
                </button>

                {/* Google Form Redirection */}
                <div style={{
                  marginTop: '20px',
                  padding: '24px',
                  borderRadius: '16px',
                  background: '#f0fbf7',
                  border: '1px solid #a7f3d0',
                  width: '100%',
                  textAlign: 'center'
                }}>
                  <p style={{ fontSize: '0.95rem', color: '#1e293b', marginBottom: '12px', fontWeight: '500' }}>
                    Ingin survei lokasi fisik secara gratis dan penawaran harga resmi yang disesuaikan dari Tim Engineering ACE?
                  </p>
                  <a
                    href={googleFormUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      color: '#0F5A3E',
                      textDecoration: 'none',
                      fontWeight: '700',
                      fontSize: '1rem',
                      borderBottom: '2px solid #0F5A3E',
                      paddingBottom: '2px'
                    }}
                  >
                    Klik Selengkapnya Untuk Konsultasi Lebih Lanjut <i className="fas fa-external-link-alt"></i>
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
            Kembali
          </button>
          {step < 3 && (
            <button className="btn-nav next" onClick={handleNext}>
              Lanjutkan <i className="fas fa-arrow-right" style={{ marginLeft: '6px' }}></i>
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
            <strong>LAPORAN ANALISIS KELAYAKAN PLTS</strong><br />
            No Dokumen: ACE-ROI-{new Date().getFullYear()}-{Math.floor(1000 + Math.random() * 9000)}<br />
            Tanggal: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>

        <h2 style={{ textAlign: 'center', fontSize: '15pt', margin: '20px 0', textTransform: 'uppercase', fontFamily: 'Arial', color: '#0A2B4E' }}>
          Laporan Teknis Rekomendasi Investasi Energi Surya
        </h2>

        {/* Client Profile Info Table */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>1. Profil Informasi Klien</div>
        <table className="print-table" style={{ marginBottom: '24px' }}>
          <tbody>
            <tr>
              <td style={{ width: '30%', backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Nama Klien / Perusahaan</td>
              <td><strong>{clientName}</strong></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Nomor Telepon / WhatsApp</td>
              <td><strong>{clientPhone}</strong></td>
            </tr>
            <tr>
              <td style={{ backgroundColor: '#f2f2f2', fontWeight: 'bold' }}>Alamat Email</td>
              <td><strong>{clientEmail}</strong></td>
            </tr>
          </tbody>
        </table>

        {/* Section 2: Input Parameters */}
        <div className="print-section-title" style={{ color: '##0A2B4E' }}>2. Parameter Masukan Teknis</div>
        <table className="print-table">
          <thead>
            <tr>
              <th>Parameter Masukan</th>
              <th>Nilai Input</th>
              <th>Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Luas Atap yang Tersedia</td>
              <td><strong>{roofArea} m²</strong></td>
              <td>Luas fisik yang dialokasikan untuk instalasi panel PV.</td>
            </tr>
            <tr>
              <td>Sambungan Kontrak Daya Listrik PLN</td>
              <td><strong>{gridCapacity} VA</strong></td>
              <td>Kapasitas jaringan daya listrik aktif di lokasi.</td>
            </tr>
            <tr>
              <td>Rata-rata Tagihan Listrik Bulanan</td>
              <td><strong>{formatCurrency(monthlyBill)}</strong></td>
              <td>Dasar perhitungan kebutuhan energi harian.</td>
            </tr>
          </tbody>
        </table>

        {/* Section 3: ROI Math */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>3. Hasil Analisis Kapasitas & Evaluasi ROI</div>
        {calcResult && (
          <table className="print-table">
            <thead>
              <tr>
                <th>Metrik Evaluasi Sistem</th>
                <th>Nilai Estimasi</th>
                <th>Keterangan Teknis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rekomendasi Kapasitas Panel Surya</td>
                <td><strong>{calcResult.recommendedKwp} kWp</strong></td>
                <td>Kapasitas optimal yang disesuaikan luas atap & daya PLN.</td>
              </tr>
              <tr>
                <td>Estimasi Produksi Energi Listrik</td>
                <td><strong>{calcResult.annualGeneration.toLocaleString()} kWh / Tahun</strong></td>
                <td>Mengacu pada sun hours harian rata-rata di Indonesia.</td>
              </tr>
              <tr>
                <td>Estimasi Penghematan Finansial</td>
                <td><strong>{formatCurrency(calcResult.annualSavings)} / Tahun</strong></td>
                <td>Atau setara dengan {formatCurrency(calcResult.annualSavings / 12)} / Bulan.</td>
              </tr>
              <tr>
                <td>Estimasi Waktu Balik Modal (Payback)</td>
                <td><strong>{getPaybackPeriod()} Tahun</strong></td>
                <td>Asumsi biaya sistem rata-rata standar ACE.</td>
              </tr>
              <tr>
                <td>Reduksi Emisi Karbon (CO2 Offset)</td>
                <td><strong>{calcResult.co2OffsetTons} Ton CO2 / Tahun</strong></td>
                <td>Sertifikasi hijau kontribusi pelaporan keberlanjutan.</td>
              </tr>
            </tbody>
          </table>
        )}

        {/* Section 4: Recommendations */}
        <div className="print-section-title" style={{ color: '#0A2B4E' }}>4. Urutan Rekomendasi Produk Panel Surya Terbaik</div>
        <p style={{ fontSize: '10pt', marginBottom: '8px', fontStyle: 'italic' }}>
          Diurutkan secara otomatis berdasarkan prioritas performa, durasi garansi pabrikan, dan nilai ekonomis investasi.
        </p>
        <table className="print-table">
          <thead>
            <tr>
              <th>Peringkat</th>
              <th>Merek & Model Panel</th>
              <th>Spesifikasi Teknis</th>
              <th>Estimasi Harga</th>
              <th>Tingkat Kecocokan</th>
            </tr>
          </thead>
          <tbody>
            {rankedProducts.map((p, idx) => (
              <tr key={p.id}>
                <td><strong>#{idx + 1}</strong></td>
                <td>{p.brand} {p.model}</td>
                <td>Efisiensi: {p.efficiency}% | Garansi: {p.warranty} Tahun | Rating: {p.techRating}</td>
                <td>{formatCurrency(p.price)}</td>
                <td><strong>{p.closeness}%</strong></td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Note about Consultation Form */}
        <div style={{ marginTop: '24px', fontSize: '9pt', color: '#555', fontStyle: 'italic', borderTop: '1px solid #ccc', paddingTop: '10px' }}>
          Catatan: Untuk melakukan konsultasi lanjutan dan penjadwalan survei fisik terperinci, silakan hubungi tim teknik melalui tautan kuesioner Google Form berikut: {googleFormUrl}
        </div>

        {/* Signature Box */}
        <div className="signature-area" style={{ marginTop: '40px' }}>
          <div className="sig-block">
            <p>Dibuat Oleh,</p>
            <strong style={{ color: '#0A2B4E' }}>PT. ACE ENERGY SERVICE</strong>
            <div className="sig-line">
              Technician Engineer Senior
            </div>
          </div>
          <div className="sig-block">
            <p>Disetujui Oleh,</p>
            <strong>Perwakilan Klien / Kemitraan</strong>
            <div className="sig-line">
              Tanda Tangan & Nama Terang
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
