import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './News.css';

export default function News() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Localized Articles
  const articles = {
    en: [
      {
        id: 1,
        category: 'projects',
        date: 'Wednesday, Apr 8, 2026',
        publisher: 'Sulteng Raya',
        title: 'Partnering with Ace Energy, Anwar Hafid Brings Solar Power to Central Sulawesi',
        excerpt: 'The Governor of Central Sulawesi, Anwar Hafid, has established a collaborative partnership with PT Ace Energy Service to improve the reliability of renewable energy-based electricity supply.',
        image: '/img/GUBERNUR.png',
        link: '#'
      },
      {
        id: 2,
        category: 'sustainability',
        date: 'Tuesday, May 12, 2026',
        publisher: 'LKFT UGM',
        title: 'PT ACE Energy Service Prepares International Standard Solar and Battery Development',
        excerpt: 'PT ACE Energy Service and UGM LKFT Research Center signed a MoA focusing on a bankable feasibility study for integrating Solar PV and Battery Energy Storage Systems (BESS) in Indonesia.',
        image: '/img/UGM.png',
        link: '#'
      },
      {
        id: 3,
        category: 'corporate',
        date: 'Friday, Apr 17, 2026',
        publisher: 'Radar Banten',
        title: 'Supporting Net Zero Emission, Modern Cikande and PT Ace Energy Service Cooperate on Solar Panel Development',
        excerpt: 'PT Modern Industrial Estate partnered with PT ACE ENERGY SERVICE (ACEES) to transform the Modern Cikande industrial estate into a green, environment-friendly industrial zone.',
        image: '/img/BANTEN.png',
        link: '#'
      }
    ],
    id: [
      {
        id: 1,
        category: 'projects',
        date: 'Rabu, 8 Apr 2026',
        publisher: 'Sulteng Raya',
        title: 'Gandeng Ace Energy, Anwar Hafid Hadirkan Listrik Tenaga Surya di Sulteng',
        excerpt: 'Gubernur Sulawesi Tengah, Anwar Hafid menjalin kerja sama kolaboratif dengan PT Ace Energy Service dalam upaya meningkatkan keandalan pasokan listrik berbasis energi baru terbarukan.',
        image: '/img/GUBERNUR.png',
        link: '#'
      },
      {
        id: 2,
        category: 'sustainability',
        date: 'Selasa, 12 Mei 2026',
        publisher: 'LKFT UGM',
        title: 'PT ACE Energy Service Siapkan Pengembangan Energi Surya dan Sistem Baterai Berstandar Internasional',
        excerpt: 'PT ACE Energy Service bersama LKFT UGM menandatangani MoA berfokus pada penyusunan studi kelayakan (feasibility study) berstandar bankable untuk integrasi PLTS dan sistem baterai BESS di Indonesia.',
        image: '/img/UGM.png',
        link: '#'
      },
      {
        id: 3,
        category: 'corporate',
        date: 'Jumat, 17 Apr 2026',
        publisher: 'Radar Banten',
        title: 'Dukung Net Zero Emission, Modern Cikande dan PT Ace Energy Service Jalin Kerja Sama Pengembangan Solar Panel',
        excerpt: 'PT Modern Industrial Estate secara resmi menggandeng PT ACE ENERGY SERVICE (ACEES) dalam mentransformasi kawasan industri Modern Cikande menjadi kawasan industri hijau yang ramah lingkungan.',
        image: '/img/BANTEN.png',
        link: '#'
      }
    ],
    ko: [
      {
        id: 1,
        category: 'projects',
        date: '2026년 4월 8일 (수)',
        publisher: 'Sulteng Raya',
        title: 'Ace Energy와 협력하여 Anwar Hafid 주지사, 중부 술라웨시에 태양광 발전 도입',
        excerpt: '안와르 하피드 중부 술라웨시 주지사는 신재생에너지 기반 전력 공급의 신뢰성을 향상시키기 위해 PT Ace Energy Service와 협력 관계를 구축했습니다.',
        image: '/img/GUBERNUR.png',
        link: '#'
      },
      {
        id: 2,
        category: 'sustainability',
        date: '2026년 5월 12일 (화)',
        publisher: 'LKFT UGM',
        title: 'PT ACE Energy Service, 국제 표준 태양광 및 배터리 시스템 개발 준비',
        excerpt: 'PT ACE Energy Service와 UGM LKFT 연구센터는 인도네시아 태양광(PV) 및 배터리 에너지 저장 시스템(BESS) 통합 타당성 조사 수립에 중점을 둔 MoA를 체결했습니다.',
        image: '/img/UGM.png',
        link: '#'
      },
      {
        id: 3,
        category: 'corporate',
        date: '2026년 4월 17일 (금)',
        publisher: 'Radar Banten',
        title: '넷제로 배출 지원, Modern Cikande 및 PT Ace Energy Service 태양광 패널 개발 협력 체결',
        excerpt: 'PT Modern Industrial Estate는 Modern Cikande 산업단지를 환경 친화적인 친환경 산업단지로 전환하기 위해 PT ACE ENERGY SERVICE(ACEES)와 파트너십을 체결했습니다.',
        image: '/img/BANTEN.png',
        link: '#'
      }
    ]
  };

  const currentLang = language === 'ko' ? 'ko' : language === 'id' ? 'id' : 'en';
  const localizedArticles = articles[currentLang];

  // Filter Logic
  const filteredArticles = localizedArticles.filter((article) => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="news-page-container">
      <div className="container">

        {/* HEADER SECTION */}
        <div className="news-header">
          <span className="news-tag">PT. ACE ENERGY SERVICE</span>
          <h1>{language === 'ko' ? '뉴스 & 미디어 피드' : language === 'id' ? 'Kabar Berita & Media' : 'News & Corporate Updates'}</h1>
          <p>
            {language === 'ko'
              ? '신재생에너지 인프라 리더, ACE Energy의 최신 동향과 프로젝트 소식을 전해드립니다.'
              : language === 'id'
                ? 'Ikuti perkembangan terbaru, pencapaian proyek PLTS, dan insight energi terbarukan dari tim ACE Energy.'
                : 'Stay up-to-date with our latest projects, achievements, and clean energy insights.'}
          </p>
        </div>

        {/* CONTROLS */}
        <div className="news-controls">
          <div className="search-bar-wrapper">
            <i className="fas fa-search search-icon"></i>
            <input
              type="text"
              placeholder={language === 'ko' ? '검색어를 입력하세요...' : language === 'id' ? 'Cari berita di sini...' : 'Search articles...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-tabs">
            <button
              className={`category-tab-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              {language === 'ko' ? '전체보기' : language === 'id' ? 'Semua' : 'All'}
            </button>
            <button
              className={`category-tab-btn ${selectedCategory === 'corporate' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('corporate')}
            >
              Corporate
            </button>
            <button
              className={`category-tab-btn ${selectedCategory === 'projects' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('projects')}
            >
              {language === 'ko' ? '프로젝트' : language === 'id' ? 'Proyek PLTS' : 'Projects'}
            </button>
            <button
              className={`category-tab-btn ${selectedCategory === 'sustainability' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('sustainability')}
            >
              Sustainability
            </button>
          </div>
        </div>

        {/* CONTENT LAYOUT: Main feed + Social Sidebar */}
        <div className="news-layout-grid">

          {/* Main Feed */}
          <div className="news-feed-main">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <div key={art.id} className="news-article-card">
                  <div className="article-image-box">
                    <img src={art.image} alt={art.title} />
                    <span className="article-badge-category">{art.category}</span>
                  </div>
                  <div className="article-content-box">
                    <span className="article-date">
                      <i className="far fa-calendar-alt"></i> {art.date}
                      {art.publisher && (
                        <>
                          <span style={{ margin: '0 8px', color: '#cbd5e1' }}>|</span>
                          <i className="fas fa-user-edit" style={{ marginRight: '6px' }}></i> {art.publisher}
                        </>
                      )}
                    </span>
                    <h3>{art.title}</h3>
                    <p>{art.excerpt}</p>
                    <a href={art.link} className="article-readmore-btn">
                      {language === 'ko' ? '자세히 보기' : language === 'id' ? 'Selengkapnya' : 'Read More'}
                      <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-news-found">
                <i className="fas fa-newspaper"></i>
                <p>
                  {language === 'ko'
                    ? '해당하는 뉴스를 찾을 수 없습니다.'
                    : language === 'id'
                      ? 'Tidak ditemukan berita yang cocok.'
                      : 'No matching news updates found.'}
                </p>
              </div>
            )}
          </div>

          {/* Social Sidebar */}
          <div className="news-sidebar">
            <div className="sidebar-card">
              <h3><i className="fab fa-linkedin linkedin-color"></i> LinkedIn Highlights</h3>
              <p className="sidebar-intro">
                {language === 'ko' ? 'ACE Energy의 비즈니스 소식과 파트너십 소식' : language === 'id' ? 'Ikuti kemitraan bisnis dan pencapaian korporat kami' : 'Follow our professional network activity'}
              </p>

              <div style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', minHeight: '380px', background: '#fff' }}>
                <iframe
                  src="https://www.linkedin.com/embed/feed/update/urn:li:activity:7481160169809178625"
                  height="380"
                  width="100%"
                  frameBorder="0"
                  allowFullScreen=""
                  title="Embedded LinkedIn Post"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
              <a
                href="https://www.linkedin.com/company/pt-aceenergyservice/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="social-action-btn"
                style={{ marginTop: '16px' }}
              >
                View on LinkedIn <i className="fas fa-external-link-alt"></i>
              </a>
            </div>

            <div className="sidebar-card">
              <h3><i className="fab fa-instagram instagram-color"></i> Instagram Updates</h3>
              <p className="sidebar-intro">
                {language === 'ko' ? '공식 인스타그램 채널을 팔로우하고 소식을 확인하세요' : language === 'id' ? 'Ikuti akun Instagram resmi kami untuk update terbaru' : 'Follow our official Instagram channel'}
              </p>

              <div style={{ overflow: 'hidden', borderRadius: '12px', border: '1px solid #e2e8f0', minHeight: '440px', background: '#fff' }}>
                <iframe
                  src="https://www.instagram.com/p/Damskk7CQhc/embed/"
                  height="440"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  title="Embedded Instagram Post"
                  style={{ display: 'block' }}
                ></iframe>
              </div>
              <a
                href="https://www.instagram.com/aceenergyservice/?hl=ar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-action-btn"
                style={{ marginTop: '16px' }}
              >
                Follow @aceenergyservice <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
