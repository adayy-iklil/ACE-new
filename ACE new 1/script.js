// script.js - Final with 3 languages (EN, ID, KO)

// ========== MULTI BAHASA ==========
const translations = {
  en: {
    // Navigation
    nav_home: "Home", nav_about: "About", nav_strength: "Strengths", nav_services: "Services", nav_projects: "Projects", nav_contact: "Contact",
    // Hero
    hero_badge: "🇮🇩 Indonesia's No.1 Solar EPC & O&M", hero_title: "Empowering the Future with <span class='gold-text'>Clean Energy</span>", hero_desc: "Premium solar solutions — EPC, O&M, and renewable innovation for industries, commercial, residential, and agriculture.", hero_btn1: "Learn More", hero_btn2: "Contact Us",
    // About
    about_tag: "About Us", about_title: "Your Trusted Partner in Solar Energy", about_desc: "PT. ACE ENERGY SERVICE (affiliated with ACE E&C, a B2 Grade construction leader with 30+ years of expertise) delivers world-class solar PV solutions across Indonesia. Since 2019, we have specialized in EPC, O&M, and innovative renewable services — empowering businesses and homes with clean, reliable energy.", about_stat1: "300+ Group Projects", about_stat2: "ISO & B2 Licensed", about_stat3: "Nationwide Portfolio", about_stat4: "IDR 1.2T Sales (2023)",
    counter1: "Years of Excellence", counter2: "Major Projects", counter3: "Installed Capacity", counter4: "Corporate Clients",
    // Strengths
    strengths_tag: "Why Choose Us", strengths_title: "Our Core Strengths", strengths_sub: "Quality, reliability, and innovation in every project.",
    strength1_title: "Professional Team", strength1_desc: "Multidisciplinary experts engineering, legal & business synergy.",
    strength2_title: "International Standards", strength2_desc: "Designs & materials meet global IEC/ISO benchmarks.",
    strength3_title: "Sustainable Excellence", strength3_desc: "Optimized energy, long-term decarbonization impact.",
    strength4_title: "Tier-1 Materials", strength4_desc: "High-quality components & latest solar technology.",
    // Services
    services_tag: "Comprehensive Solutions", services_title: "Our Core Services", services_sub: "End-to-end solar energy services — from EPC to O&M and beyond",
    service1_title: "Solar PV O&M Service", service1_desc: "24/7 monitoring, predictive maintenance, rapid repair, and performance reporting.",
    service2_title: "Commercial Solar EPC", service2_desc: "For factories, malls, offices — turnkey installation & flexible financing.",
    service3_title: "Residential EPC", service3_desc: "Rooftop solar, 25-year panel warranty, monitoring app & post-install service.",
    service4_title: "Agricultural Solar", service4_desc: "Irrigation pumps, solar cooling, off-grid & hybrid — reduce costs.",
    service5_title: "REC Management", service5_desc: "I-REC certification, carbon neutrality reporting & ESG support.",
    service6_title: "BESS Solutions", service6_desc: "Energy storage: peak shifting, grid stability, backup power.",
    service7_title: "PPP & IPP Projects", service7_desc: "Build-Operate-Transfer (BOT), BOO models — experts in PPA structuring.",
    // Projects
    projects_tag: "Portfolio", projects_title: "Featured Projects", projects_sub: "Proven excellence across Indonesia's solar landscape",
    filter_all: "All Projects", filter_industrial: "Industrial", filter_commercial: "Commercial", filter_rooftop: "Rooftop",
    view_details: "View Details",
    // Legacy
    legacy_tag: "Our Legacy", legacy_title: "Why Choose ACE Energy Service?",
    legacy1: "<i class='fas fa-trophy'></i> <strong>B2 Grade License</strong> – Highest classification in Indonesia",
    legacy2: "<i class='fas fa-shield-alt'></i> <strong>Strict HSE & Quality Standards</strong> – ISO 9001, 14001, 45001",
    legacy3: "<i class='fas fa-chart-line'></i> <strong>Non-CAPEX / Flexible Schemes</strong> – Reduce electricity costs without upfront investment",
    legacy4: "<i class='fas fa-certificate'></i> <strong>DUNS Registered & International REC Partners</strong>",
    milestone_title: "Milestones",
    milestone1: "<i class='fas fa-calendar-alt'></i> <strong>2019</strong> – ACE ENERGY SERVICE launched",
    milestone2: "<i class='fas fa-calendar-alt'></i> <strong>2021-2023</strong> – 11 MWp Hankook Tire, 4 MWp Hwa Seung",
    milestone3: "<i class='fas fa-calendar-alt'></i> <strong>2025</strong> – Supporting 42.6 GW national solar target",
    // Contact
    contact_tag: "Get In Touch", contact_title: "Let's Build a Greener Future", contact_form_title: "Send a Message",
    contact_name: "Full Name", contact_email: "Email Address", contact_message: "Your message", contact_send: "Send Inquiry",
    // Footer
    footer_text: "Indonesia's No.1 Solar EPC & O&M since 2019.", footer_links: "Quick Links", footer_cert: "Certifications", footer_follow: "Follow Us", copyright: "© 2026 ACE ENERGY SERVICE. All rights reserved.",
    // Modal
    modal_capacity: "Capacity:", modal_button: "Contact Us"
  },
  id: {
    nav_home: "Beranda", nav_about: "Tentang", nav_strength: "Keunggulan", nav_services: "Layanan", nav_projects: "Proyek", nav_contact: "Kontak",
    hero_badge: "🇮🇩 No.1 EPC & O&M Tenaga Surya di Indonesia", hero_title: "Memberdayakan Masa Depan dengan <span class='gold-text'>Energi Bersih</span>", hero_desc: "Solusi tenaga surya premium — EPC, O&M, dan inovasi terbarukan untuk industri, komersial, perumahan, dan pertanian.", hero_btn1: "Pelajari Lebih", hero_btn2: "Hubungi Kami",
    about_tag: "Tentang Kami", about_title: "Mitra Terpercaya Anda dalam Energi Surya", about_desc: "PT. ACE ENERGY SERVICE (afiliasi dengan ACE E&C, pemimpin konstruksi berlisensi B2 dengan pengalaman 30+ tahun) memberikan solusi PLTS kelas dunia di seluruh Indonesia. Sejak 2019, kami berspesialisasi dalam EPC, O&M, dan layanan terbarukan yang inovatif.", about_stat1: "300+ Proyek Grup", about_stat2: "Bersertifikat ISO & B2", about_stat3: "Portofolio Nasional", about_stat4: "Penjualan IDR 1,2T (2023)",
    counter1: "Tahun Keunggulan", counter2: "Proyek Utama", counter3: "Kapasitas Terpasang", counter4: "Klien Korporat",
    strengths_tag: "Mengapa Memilih Kami", strengths_title: "Kekuatan Utama Kami", strengths_sub: "Kualitas, keandalan, dan inovasi di setiap proyek.",
    strength1_title: "Tim Profesional", strength1_desc: "Ahli multidisiplin di bidang teknik, hukum, dan bisnis.",
    strength2_title: "Standar Internasional", strength2_desc: "Desain & material memenuhi tolok ukur IEC/ISO global.",
    strength3_title: "Keunggulan Berkelanjutan", strength3_desc: "Energi optimal, dampak dekarbonisasi jangka panjang.",
    strength4_title: "Material Tier-1", strength4_desc: "Komponen berkualitas tinggi & teknologi surya terkini.",
    services_tag: "Solusi Lengkap", services_title: "Layanan Inti Kami", services_sub: "Layanan energi surya ujung ke ujung — dari EPC hingga O&M dan seterusnya",
    service1_title: "Layanan O&M PLTS", service1_desc: "Pemantauan 24/7, pemeliharaan prediktif, perbaikan cepat, dan pelaporan kinerja.",
    service2_title: "EPC Komersial", service2_desc: "Untuk pabrik, mal, perkantoran — instalasi turnkey & pembiayaan fleksibel.",
    service3_title: "EPC Perumahan", service3_desc: "Atap surya, garansi panel 25 tahun, aplikasi monitoring & layanan purna jual.",
    service4_title: "Pertanian", service4_desc: "Pompa irigasi, pendingin surya, off-grid/hybrid — kurangi biaya.",
    service5_title: "Manajemen REC", service5_desc: "Sertifikasi I-REC, pelaporan netralitas karbon & dukungan ESG.",
    service6_title: "Solusi BESS", service6_desc: "Penyimpanan energi: pergeseran puncak, stabilitas jaringan, daya cadangan.",
    service7_title: "Proyek PPP & IPP", service7_desc: "Model BOT, BOO — ahli dalam penyusunan PPA & ladang surya skala besar.",
    projects_tag: "Portofolio", projects_title: "Proyek Unggulan", projects_sub: "Keunggulan terbukti di lanskap surya Indonesia",
    filter_all: "Semua Proyek", filter_industrial: "Industri", filter_commercial: "Komersial", filter_rooftop: "Atap",
    view_details: "Lihat Detail",
    legacy_tag: "Warisan Kami", legacy_title: "Mengapa Memilih ACE Energy Service?",
    legacy1: "<i class='fas fa-trophy'></i> <strong>Lisensi B2 Grade</strong> – Klasifikasi tertinggi di Indonesia",
    legacy2: "<i class='fas fa-shield-alt'></i> <strong>Standar HSE & Kualitas Ketat</strong> – ISO 9001, 14001, 45001",
    legacy3: "<i class='fas fa-chart-line'></i> <strong>Skema Non-CAPEX / Fleksibel</strong> – Kurangi biaya listrik tanpa investasi awal",
    legacy4: "<i class='fas fa-certificate'></i> <strong>Terdaftar DUNS & Mitra REC Internasional</strong>",
    milestone_title: "Pencapaian",
    milestone1: "<i class='fas fa-calendar-alt'></i> <strong>2019</strong> – ACE ENERGY SERVICE diluncurkan",
    milestone2: "<i class='fas fa-calendar-alt'></i> <strong>2021-2023</strong> – 11 MWp Hankook Tire, 4 MWp Hwa Seung",
    milestone3: "<i class='fas fa-calendar-alt'></i> <strong>2025</strong> – Mendukung target nasional 42,6 GW",
    contact_tag: "Hubungi Kami", contact_title: "Mari Bangun Masa Depan yang Lebih Hijau", contact_form_title: "Kirim Pesan",
    contact_name: "Nama Lengkap", contact_email: "Alamat Email", contact_message: "Pesan Anda", contact_send: "Kirim Pertanyaan",
    footer_text: "No.1 EPC & O&M Tenaga Surya di Indonesia sejak 2019.", footer_links: "Tautan Cepat", footer_cert: "Sertifikasi", footer_follow: "Ikuti Kami", copyright: "© 2026 ACE ENERGY SERVICE. Hak cipta dilindungi.",
    modal_capacity: "Kapasitas:", modal_button: "Hubungi Kami"
  },
  ko: {
    nav_home: "홈", nav_about: "회사소개", nav_strength: "강점", nav_services: "서비스", nav_projects: "프로젝트", nav_contact: "연락처",
    hero_badge: "🇮🇩 인도네시아 No.1 태양광 EPC 및 O&M", hero_title: "미래를 깨끗한 에너지로 <span class='gold-text'>활성화</span>", hero_desc: "프리미엄 태양광 솔루션 — EPC, O&M 및 산업, 상업, 주거, 농업을 위한 재생 혁신.", hero_btn1: "더 알아보기", hero_btn2: "문의하기",
    about_tag: "회사소개", about_title: "태양광 분야의 신뢰받는 파트너", about_desc: "PT. ACE ENERGY SERVICE(30년 이상 경력의 B2 등급 건설 리더 ACE E&C 계열사)는 인도네시아 전역에 세계적 수준의 태양광 PV 솔루션을 제공합니다. 2019년부터 EPC, O&M 및 혁신적인 재생 서비스를 전문으로 합니다.", about_stat1: "300+ 그룹 프로젝트", about_stat2: "ISO 및 B2 인증", about_stat3: "전국 포트폴리오", about_stat4: "IDR 1.2T 매출(2023년)",
    counter1: "우수성의 해", counter2: "주요 프로젝트", counter3: "설치 용량", counter4: "법인 고객",
    strengths_tag: "선택 이유", strengths_title: "핵심 강점", strengths_sub: "모든 프로젝트의 품질, 신뢰성 및 혁신.",
    strength1_title: "전문가 팀", strength1_desc: "엔지니어링, 법무, 비즈니스 분야의 다학제 전문가.",
    strength2_title: "국제 표준", strength2_desc: "글로벌 IEC/ISO 벤치마크를 충족하는 설계 및 자재.",
    strength3_title: "지속 가능한 우수성", strength3_desc: "최적화된 에너지, 장기적 탈탄소 영향.",
    strength4_title: "Tier-1 자재", strength4_desc: "고품질 부품 및 최신 태양광 기술.",
    services_tag: "종합 솔루션", services_title: "핵심 서비스", services_sub: "EPC에서 O&M까지 종합 태양광 서비스",
    service1_title: "태양광 O&M 서비스", service1_desc: "24/7 모니터링, 예측 유지보수, 신속 수리 및 성능 보고.",
    service2_title: "상업용 EPC", service2_desc: "공장, 쇼핑몰, 사무실을 위한 턴키 설치 및 유연한 자금 조달.",
    service3_title: "주거용 EPC", service3_desc: "옥상 태양광, 25년 패널 보증, 모니터링 앱 및 사후 지원.",
    service4_title: "농업용 태양광", service4_desc: "관개 펌프, 태양광 냉방, 오프그리드/하이브리드 — 비용 절감.",
    service5_title: "REC 관리", service5_desc: "I-REC 인증, 탄소 중립 보고 및 ESG 지원.",
    service6_title: "BESS 솔루션", service6_desc: "에너지 저장: 피크 이동, 계통 안정성, 비상 전원.",
    service7_title: "PPP 및 IPP 프로젝트", service7_desc: "BOT, BOO 모델 — PPA 구조화 및 대규모 태양광 발전소 전문.",
    projects_tag: "포트폴리오", projects_title: "주요 프로젝트", projects_sub: "인도네시아 태양광 분야에서 입증된 우수성",
    filter_all: "전체 프로젝트", filter_industrial: "산업", filter_commercial: "상업", filter_rooftop: "옥상",
    view_details: "자세히 보기",
    legacy_tag: "우리의 유산", legacy_title: "ACE Energy Service를 선택해야 하는 이유?",
    legacy1: "<i class='fas fa-trophy'></i> <strong>B2 등급 라이선스</strong> – 인도네시아 최고 등급",
    legacy2: "<i class='fas fa-shield-alt'></i> <strong>엄격한 HSE 및 품질 기준</strong> – ISO 9001, 14001, 45001",
    legacy3: "<i class='fas fa-chart-line'></i> <strong>비용 효율적인 스킴</strong> – 선투자 없이 전기료 절감",
    legacy4: "<i class='fas fa-certificate'></i> <strong>DUNS 등록 및 국제 REC 파트너</strong>",
    milestone_title: "이정표",
    milestone1: "<i class='fas fa-calendar-alt'></i> <strong>2019</strong> – ACE ENERGY SERVICE 출범",
    milestone2: "<i class='fas fa-calendar-alt'></i> <strong>2021-2023</strong> – 11 MWp 한국타이어, 4 MWp 화승",
    milestone3: "<i class='fas fa-calendar-alt'></i> <strong>2025</strong> – 국가 목표 42.6 GW 지원",
    contact_tag: "연락하기", contact_title: "더 푸른 미래를 함께 만들어요", contact_form_title: "메시지 보내기",
    contact_name: "이름", contact_email: "이메일", contact_message: "메시지", contact_send: "문의 보내기",
    footer_text: "2019년부터 인도네시아 No.1 태양광 EPC 및 O&M", footer_links: "빠른 링크", footer_cert: "인증", footer_follow: "팔로우", copyright: "© 2026 ACE ENERGY SERVICE. 모든 권리 보유.",
    modal_capacity: "용량:", modal_button: "문의하기"
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update teks biasa
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update placeholder input/textarea
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const key = btn.getAttribute('data-i18n');
    if (key && translations[lang][key]) btn.innerText = translations[lang][key];
  });

  // Update tombol view details di proyek (tanpa merusak event)
  document.querySelectorAll('.view-detail-btn').forEach(btn => {
    btn.innerHTML = `${translations[lang].view_details} <i class="fas fa-arrow-right"></i>`;
  });

  // Update modal static text (modal capacity label)
  const modalCapacityLabel = document.querySelector('.modal-capacity strong');
  if (modalCapacityLabel && translations[lang].modal_capacity) {
    modalCapacityLabel.innerText = translations[lang].modal_capacity;
  }
  const modalBtn = document.querySelector('.modal-btn');
  if (modalBtn && translations[lang].modal_button) {
    modalBtn.innerHTML = translations[lang].modal_button;
  }
}

// ========== PROJECTS DATA ==========
const projectsData = [
  { name: "PT. Hwa Seung Indonesia (Jepara)", capacity: "4.1 MWp", category: "industrial", desc: "Large-scale industrial rooftop solar PV system, reducing 3,200 tons CO2/year.", image: "img/Hwaseung.png" },
  { name: "PT. Parkland World Indonesia (Jepara)", capacity: "2.4 MWp", category: "industrial", desc: "Commercial factory solar installation with real-time monitoring.", image: "img/Parkland.png" },
  { name: "PT. Handal Sukses Karya (Jepara)", capacity: "1.1 MWp", category: "industrial", desc: "Optimized energy for manufacturing, savings up to 25%.", image: "img/Handal.png" },
  { name: "PT. Kanindo Makmur Jaya 2 (Jepara)", capacity: "589 kWp", category: "commercial", desc: "Warehouse & logistics solar EPC.", image: "img/Kanindo.png" },
  { name: "PT. Shinsung Grand Indonesia (Pemalang)", capacity: "53 kWp", category: "rooftop", desc: "Rooftop residential-commercial hybrid system.", image: "img/Shinsung.png" },
  { name: "PT. Kaiti Global Indonesia (Cirebon)", capacity: "31.8 kWp", category: "commercial", desc: "Small-medium business PV system.", image: "img/Kaiti.png" },
  { name: "PT. Handal Sukses Karya (Jepara)", capacity: "11 MWp", category: "industrial", desc: "Flagship project, one of largest solar carport/rooftop in Java.", image: "img/Handal.png" }
];

function renderProjects(filter = "all") {
  const container = document.getElementById("projectsGrid");
  if (!container) return;
  const filtered = filter === "all" ? projectsData : projectsData.filter(p => p.category === filter);
  if (filtered.length === 0) {
    container.innerHTML = `<p class="no-projects">${translations[currentLang].filter_all === "All Projects" ? "No projects in this category." : "Tidak ada proyek dalam kategori ini."}</p>`;
    return;
  }
  container.innerHTML = filtered.map(proj => `
    <div class="project-card" data-project='${JSON.stringify(proj)}'>
      <div class="project-img">
        <img src="${proj.image}" alt="${proj.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\'fas fa-solar-panel\' style=\'font-size:48px; color:#7c8b9c;\'></i>'; this.parentElement.style.background='#e2e8f0'; this.parentElement.style.display='flex'; this.parentElement.style.alignItems='center'; this.parentElement.style.justifyContent='center';">
      </div>
      <div class="project-info">
        <h3>${proj.name}</h3>
        <div class="project-capacity">${proj.capacity}</div>
        <p>${proj.desc.substring(0, 80)}...</p>
        <button class="view-detail-btn">${translations[currentLang].view_details} <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>
  `).join('');
  attachProjectEvents();
}

function attachProjectEvents() {
  document.querySelectorAll('.project-card').forEach(card => {
    const data = JSON.parse(card.getAttribute('data-project'));
    const btn = card.querySelector('.view-detail-btn');
    if (btn) {
      btn.removeEventListener('click', () => {});
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        showModal(data);
      });
    }
  });
}

function showModal(project) {
  const modal = document.getElementById('projectModal');
  if (!modal) return;
  document.getElementById('modalTitle').innerText = project.name;
  document.getElementById('modalDesc').innerText = project.desc;
  document.getElementById('modalCapacity').innerText = project.capacity;
  modal.style.display = 'flex';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.style.display = 'none';
}

function initFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.getAttribute('data-filter'));
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll('.counter-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        let current = 0;
        const step = Math.ceil(target / 40);
        const interval = setInterval(() => {
          if (current < target) {
            current += step;
            if (current > target) current = target;
            el.innerText = current;
          } else clearInterval(interval);
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('active');
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));
}

function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('hidden'));
    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => menu.classList.add('hidden'));
    });
  }
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const resp = document.getElementById('formResponse');
      const msg = currentLang === 'id' ? 'Terima kasih! Tim kami akan segera menghubungi Anda.' : (currentLang === 'ko' ? '감사합니다! 곧 연락드리겠습니다.' : 'Thank you! Our team will reach out soon.');
      resp.innerHTML = `<i class="fas fa-check-circle"></i> ${msg}`;
      form.reset();
      setTimeout(() => resp.innerHTML = '', 5000);
    });
  }
}

function initModalClose() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.querySelector('.close-modal');
  if (modal && closeBtn) {
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }
}

function initLanguage() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      // Re-render proyek dengan bahasa baru (terutama tombol view details)
      const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
      renderProjects(activeFilter);
    });
  });
  setLanguage(currentLang);
  // Render awal proyek
  renderProjects('all');
}

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initFilters();
  initCounters();
  initScrollReveal();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
  initModalClose();
});