// script.js - ACE Energy Premium Architecture Engine

const translations = {
  en: {
    nav_home: "Home", nav_about: "About", nav_services: "Solutions", nav_calc: "ROI Calculator", nav_projects: "Portfolio", nav_contact: "Get Consultation",
    hero_badge: "Tier-1 Solar EPC Leader", hero_title: "Architecting Sustainable <span class='gradient-text'>Energy Independence</span>", hero_desc: "High-performance industrial, commercial, and residential turnkey solar PV systems optimized for maximum generation and ROI.", hero_btn1: "Calculate Savings", hero_btn2: "Corporate Proposal",
    track_curr: "Current Generation", track_co2: "CO2 Reduced Today",
    about_tag: "Corporate Profile", about_title: "Engineered For Decades of Reliable Power", about_desc: "Affiliated with ACE E&C with over 30 years of large-scale structural mastery. PT. ACE ENERGY SERVICE delivers premier asset maintenance and robust solar EPC installations across South East Asia, ensuring stringent ISO standards and optimized Levelized Cost of Energy (LCOE).",
    about_stat2: "B2 Grade & ISO Certified", about_stat4: "IDR 1.2T Group Scaling",
    counter1: "Years of Infrastructure Mastery", counter3: "Commissioned Solar Assets",
    calc_title: "Estimate Your Solar Yield Instantly", calc_subtitle: "Input your average monthly electrical expenditures to see how much you could optimize.", calc_label: "Monthly Electricity Bill (IDR):",
    calc_res1: "Est. Monthly Savings", calc_res2: "Recommended System Size", calc_res3: "CO2 Offset / Year",
    services_tag: "Ecosystem Matrix", services_title: "Comprehensive Energy Capabilities",
    service1_title: "Predictive Solar O&M", service1_desc: "Drone thermography diagnostics, 24/7 cloud SCADA analytics, and rapid response cleaning systems.",
    service2_title: "Industrial Turnkey EPC", service2_desc: "Tailored zero-capital options (PPA) or high-yield CAPEX engineering for mega factories.",
    service3_title: "Residential Luxury Microgrids", service3_desc: "Sleek smart-home integrated rooftops with 25-year structural warranties.",
    service6_title: "BESS Utility Storage", service6_desc: "Peak shifting backup batteries maintaining power reliability during unstable grid micro-cuts.",
    projects_tag: "Proven Implementations", projects_title: "High-Yield Assets",
    filter_all: "All Installations", filter_industrial: "Heavy Industrial", filter_commercial: "Commercial", filter_rooftop: "Rooftop Systems",
    contact_title: "Initiate Your Energy Transition", contact_tag: "Schedule an on-site engineering assessment with our senior technicians.",
    contact_name: "Your Name", contact_email: "Business Email", contact_message: "Describe your energy requirements...", contact_send: "Request Site Survey",
    copyright: "&copy; 2026 ACE ENERGY SERVICE. All asset rights architecture preserved.",
    modal_button: "Inquire For Similar Scale",
    footer_tagline: "“Indonesia Solar PV Energy Expert”"
  },
  id: {
    nav_home: "Beranda", nav_about: "Tentang Kami", nav_services: "Solusi", nav_calc: "Kalkulator ROI", nav_projects: "Portofolio", nav_contact: "Konsultasi Gratis",
    hero_badge: "Pemimpin EPC Surya Tier-1", hero_title: "Membangun Kemandirian <span class='gradient-text'>Energi Berkelanjutan</span>", hero_desc: "Sistem PLTS atap industrial, komersial, dan residensial berkinerja tinggi yang dioptimalkan untuk hasil generasi dan ROI maksimal.", hero_btn1: "Hitung Penghematan", hero_btn2: "Proposal Perusahaan",
    track_curr: "Generasi Saat Ini", track_co2: "Reduksi CO2 Hari Ini",
    about_tag: "Profil Perusahaan", about_title: "Dirancang Untuk Keandalan Energi Puluhan Tahun", about_desc: "Terafiliasi dengan ACE E&C yang memiliki lebih dari 30 tahun keahlian struktural skala besar. PT. ACE ENERGY SERVICE menghadirkan pemeliharaan aset premium dan instalasi EPC surya yang kokoh di seluruh Asia Tenggara, memastikan standar ISO yang ketat dan Levelized Cost of Energy (LCOE) yang optimal.",
    about_stat2: "Sertifikasi Kelas B2 & ISO", about_stat4: "Skala Grup IDR 1.2T",
    counter1: "Tahun Pengalaman Infrastruktur", counter3: "Aset Surya yang Dioperasikan",
    calc_title: "Estimasi Hasil Panel Surya Anda Seketika", calc_subtitle: "Masukkan pengeluaran listrik bulanan Anda untuk melihat potensi optimalisasi penghematan.", calc_label: "Tagihan Listrik Bulanan (IDR):",
    calc_res1: "Estimasi Hemat Bulanan", calc_res2: "Rekomendasi Ukuran Sistem", calc_res3: "Reduksi CO2 / Tahun",
    services_tag: "Matriks Ekosistem", services_title: "Kemampuan Energi Komprehensif",
    service1_title: "O&M Surya Prediktif", service1_desc: "Diagnostik termografi drone, analitik cloud SCADA 24/7, dan sistem pembersihan respons cepat.",
    service2_title: "EPC Turnkey Industrial", service2_desc: "Pilihan tanpa modal (PPA) atau teknik CAPEX hasil tinggi yang disesuaikan untuk pabrik mega.",
    service3_title: "Luxury Microgrid Residensial", service3_desc: "Atap terintegrasi rumah pintar yang elegan dengan garansi struktural hingga 25 tahun.",
    service6_title: "Penyimpanan Utilitas BESS", service6_desc: "Baterai cadangan penggeser beban puncak menjaga keandalan daya saat terjadi pemadaman mikro grid.",
    projects_tag: "Implementasi Terbukti", projects_title: "Aset Hasil Tinggi",
    filter_all: "Semua Instalasi", filter_industrial: "Industri Berat", filter_commercial: "Komersial", filter_rooftop: "Sistem Rooftop",
    contact_title: "Mulai Transisi Energi Anda", contact_tag: "Jadwalkan penilaian teknik langsung di lokasi bersama teknisi senior kami.",
    contact_name: "Nama Anda", contact_email: "Email Bisnis", contact_message: "Jelaskan kebutuhan energi Anda...", contact_send: "Ajukan Survei Lokasi",
    copyright: "&copy; 2026 ACE ENERGY SERVICE. Seluruh arsitektur hak aset dilindungi.",
    modal_button: "Ajukan Skala Serupa",
    footer_tagline: "“Indonesia Solar PV Energy Expert”"
  },
  ko: {
    nav_home: "홈", nav_about: "회사소개", nav_services: "솔루션", nav_calc: "ROI 계산기", nav_projects: "포트폴리오", nav_contact: "무료 상담",
    hero_badge: "Tier-1 태양광 EPC 리더", hero_title: "지속 가능한 <span class='gradient-text'>에너지 자립</span> 설계", hero_desc: "최대 발전량 및 투자 수익률(ROI)에 최적화된 고성능 산업용, 상업용, 주거용 턴키 태양광 발전 시스템.", hero_btn1: "절감액 계산하기", hero_btn2: "기업 제안서 요청",
    track_curr: "현재 발전량", track_co2: "오늘 탄소 절감량",
    about_tag: "기업 프로필", about_title: "수십 년간 신뢰할 수 있는 전력 엔지니어링", about_desc: "30년 이상의 대규모 구조물 공사 노하우를 보유한 ACE E&C와 제휴하여, PT. ACE ENERGY SERVICE는 동남아시아 전역에 최고 수준의 자산 관리 및 탄탄한 태양광 EPC 설치를 제공하며 엄격한 ISO 표준과 최적화된 균등화발전비용(LCOE)을 보장합니다.",
    about_stat2: "B2 등급 및 ISO 인증획득", about_stat4: "그룹 자산 규모 1.2조 IDR",
    counter1: "기반 시설 마스터 경력(년)", counter3: "운영 중인 태양광 자산",
    calc_title: "태양광 발전량 즉시 추정", calc_subtitle: "월평균 전기 요금을 입력하여 얼마나 최적화할 수 있는지 즉시 확인하십시오.", calc_label: "월간 전기 요금 (IDR):",
    calc_res1: "예상 월간 절감액", calc_res2: "권장 시스템 용량", calc_res3: "연간 탄소 상쇄량",
    services_tag: "에코시스템 매트릭스", services_title: "종합 에너지 역량",
    service1_title: "예측형 태양광 O&M", service1_desc: "드론 열화상 진단, 24/7 클라우드 SCADA 분석 및 신속 대응 세척 시스템.",
    service2_title: "산업용 턴키 EPC", service2_desc: "대형 공장을 위한 맞춤형 제로 자본 옵션 (PPA) 또는 고수익 CAPEX 엔지니어링.",
    service3_title: "주거용 럭셔리 마이크로그리드", service3_desc: "25년 구조 보증이 포함된 세련된 스마트홈 통합형 루프탑.",
    service6_title: "BESS 유틸리티 저장장치", service6_desc: "불안정한 그리드 미세 단전 시 전력 신뢰성을 유지하는 피크 시프팅 백업 배터리.",
    projects_tag: "검증된 구현 사례", projects_title: "고수익 자산",
    filter_all: "전체 설치 사례", filter_industrial: "중공업 부문", filter_commercial: "상업 부문", filter_rooftop: "루프탑 시스템",
    contact_title: "에너지 전환 시작하기", contact_tag: "수석 엔지니어와 함께 현장 엔지니어링 평가 일정을 잡으십시오.",
    contact_name: "이름", contact_email: "회사 이메일", contact_message: "필요한 에너지 요구 사항을 설명하십시오...", contact_send: "현장 실사 요청",
    copyright: "&copy; 2026 ACE ENERGY SERVICE. 모든 자산 권리 아키텍처가 보존됩니다.",
    modal_button: "유사 규모 문의하기",
    footer_tagline: "“Indonesia Solar PV Energy Expert”"
  }
};

const projectData = [
  { id: 1, cat: "industrial", capacity: "4.1 MWp", title: "PT. Hwa Seung Indonesia (Jepara)", descEN: "Large-scale industrial rooftop solar PV system, reducing 3,200 tons CO2/year.", descID: "Sistem PLTS atap industri skala besar, mereduksi emisi hingga 3.200 ton CO2/tahun.", descKO: "대규모 산업용 루프탑 태양광 발전 시스템으로 연간 3,200톤의 탄소를 절감합니다.", img: "img/Hwaseung.png" },
  { id: 2, cat: "industrial", capacity: "2.4 MWp", title: "PT. Parkland World Indonesia (Jepara)", descEN: "Commercial factory solar installation with real-time monitoring.", descID: "Instalasi surya pabrik komersial dengan pemantauan analitik real-time.", descKO: "실시간 성능 모니터링 시스템과 결합된 상업용 공장 태양광 발전 인프라.", img: "img/Parkland.png" },
  { id: 3, cat: "industrial", capacity: "1.1 MWp", title: "PT. Handal Sukses Karya (Jepara)", descEN: "Optimized energy for manufacturing, savings up to 25%.", descID: "Energi yang dioptimalkan untuk manufaktur, menghemat biaya operasional hingga 25%.", descKO: "제조 라인에 최적화된 청정에너지를 공급하여 전력 비용을 최대 25%까지 절감합니다.", img: "img/Handal.png" },
  { id: 4, cat: "commercial", capacity: "589 kWp", title: "PT. Kanindo Makmur Jaya 2 (Jepara)", descEN: "Warehouse & logistics solar EPC.", descID: "Penyediaan EPC surya untuk area pergudangan dan pusat logistik komersial.", descKO: "대형 물류 창고 및 유통 센터를 위한 고효율 루프탑 태양광 EPC 구축.", img: "img/Kanindo.png" },
  { id: 5, cat: "rooftop", capacity: "53 kWp", title: "PT. Shinsung Grand Indonesia (Pemalang)", descEN: "Rooftop residential-commercial hybrid system.", descID: "Sistem hibrida komersial-residensial atap yang efisien dan andal.", descKO: "하이브리드 분산형 자산 아키텍처 기반의 상업용·주거용 루프탑 시스템.", img: "img/Shinsung.png" },
  { id: 6, cat: "commercial", capacity: "31.8 kWp", title: "PT. Kaiti Global Indonesia (Cirebon)", descEN: "Small-medium business PV system.", descID: "Sistem fotovoltaik terintegrasi untuk bisnis skala kecil dan menengah.", descKO: "중소기업 비즈니스 빌딩에 맞춤 설계된 고효율 태양광 PV 시스템.", img: "img/Kaiti.png" }
];

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  const flagMap = { en: "🇬🇧 EN", id: "🇮🇩 ID", ko: "🇰🇷 KO" };
  const btn = document.getElementById('currentLangBtn');
  if (btn) btn.innerHTML = `${flagMap[lang]} <i class="fas fa-chevron-down"></i>`;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  runCalculatorUpdate();
  renderPortfolioGrid();
}

function renderPortfolioGrid(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = "";
  const filtered = filter === "all" ? projectData : projectData.filter(p => p.cat === filter);
  filtered.forEach(proj => {
    const card = document.createElement("div");
    card.className = "portfolio-item-card reveal active";
    card.setAttribute("data-id", proj.id);
    const displayDesc = currentLang === "id" ? proj.descID : (currentLang === "ko" ? proj.descKO : proj.descEN);
    card.innerHTML = `
      <div class="p-img-area">
        <img src="${proj.img}" alt="${proj.title}" onerror="this.src='https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop'">
      </div>
      <div class="p-desc-area">
        <span class="p-cap-label">${proj.capacity}</span>
        <h4>${proj.title}</h4>
        <p class="text-muted" style="font-size: 12px; margin-top: 4px;">${displayDesc}</p>
      </div>
    `;
    card.addEventListener("click", () => triggerModalOpen(proj));
    grid.appendChild(card);
  });
}

function triggerModalOpen(proj) {
  const modal = document.getElementById("projectModal");
  if (!modal) return;
  const mTitle = document.getElementById("modalTitle");
  const mCap = document.getElementById("modalCapacity");
  const mDesc = document.getElementById("modalDesc");
  mTitle.innerText = proj.title;
  mCap.innerText = proj.capacity;
  mDesc.innerText = currentLang === "id" ? proj.descID : (currentLang === "ko" ? proj.descKO : proj.descEN);
  modal.style.display = "flex";
}

function runCalculatorUpdate() {
  const slider = document.getElementById("billRange");
  if (!slider) return;
  const val = parseInt(slider.value);
  document.getElementById("currentBillVal").innerText = "IDR " + val.toLocaleString();
  const savings = Math.floor(val * 0.82);
  const kwp = (val / 1200000).toFixed(1);
  const co2 = (kwp * 1.18).toFixed(1);
  document.getElementById("saveMonthly").innerText = "IDR " + savings.toLocaleString();
  document.getElementById("systemSize").innerText = `${kwp} kWp`;
  document.getElementById("co2Offset").innerText = `${co2} Tons`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-dropdown-content button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const selectedLang = e.currentTarget.getAttribute("data-lang");
      setLanguage(selectedLang);
    });
  });

  const slider = document.getElementById("billRange");
  if (slider) {
    slider.addEventListener("input", runCalculatorUpdate);
  }

  document.querySelectorAll(".filter-tab-btn").forEach(tab => {
    tab.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-tab-btn").forEach(t => t.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const fValue = e.currentTarget.getAttribute("data-filter");
      renderPortfolioGrid(fValue);
    });
  });

  setLanguage("en");

  const counters = document.querySelectorAll('.counter-num');
  const revealItems = document.querySelectorAll('.reveal');
  const globalObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        if (entry.target.classList.contains('counter-num')) {
          const targetNum = parseInt(entry.target.getAttribute('data-target'));
          let currentNum = 0;
          const tickInterval = setInterval(() => {
            currentNum += Math.ceil(targetNum / 20);
            if (currentNum >= targetNum) {
              currentNum = targetNum;
              clearInterval(tickInterval);
            }
            entry.target.innerText = currentNum;
          }, 35);
          globalObserver.unobserve(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });
  revealItems.forEach(item => globalObserver.observe(item));
  counters.forEach(c => globalObserver.observe(c));

  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.close-modal');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });
  }

  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    menu.addEventListener('click', () => menu.classList.add('hidden'));
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const resp = document.getElementById('formResponse');
      if (resp) {
        resp.style.marginTop = "14px";
        resp.style.fontSize = "14px";
        resp.style.color = "#10b981";
        resp.innerText = currentLang === 'id' ? 'Permintaan survei berhasil dikirim! Tim teknik kami akan menghubungi Anda.' : 
                         (currentLang === 'ko' ? '실사 요청이 성공적으로 접수되었습니다! 곧 연락드리겠습니다.' : 'Survey request successfully submitted! Our team will contact you shortly.');
        form.reset();
      }
    });
  }
});