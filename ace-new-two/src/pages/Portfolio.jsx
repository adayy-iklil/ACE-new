import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';

const projectData = [
  { id: 1, cat: "industrial", capacity: "4.1 MWp", title: "PT. Hwa Seung Indonesia (Jepara)", descEN: "Large-scale industrial rooftop solar PV system, reducing 3,200 tons CO2/year.", descID: "Sistem PLTS atap industri skala besar, mereduksi emisi hingga 3.200 ton CO2/tahun.", descKO: "대규모 산업용 루프탑 태양광 발전 시스템으로 연간 3,200톤의 탄소를 절감합니다.", img: "/img/Hwaseung.png" },
  { id: 2, cat: "industrial", capacity: "2.4 MWp", title: "PT. Parkland World Indonesia (Jepara)", descEN: "Commercial factory solar installation with real-time monitoring.", descID: "Instalasi surya pabrik komersial dengan pemantauan analitik real-time.", descKO: "실시간 성능 모니터링 시스템과 결합된 상업용 공장 태양광 발전 인프라.", img: "/img/Parkland.png" },
  { id: 3, cat: "industrial", capacity: "1.1 MWp", title: "PT. Handal Sukses Karya (Jepara)", descEN: "Optimized energy for manufacturing, savings up to 25%.", descID: "Energi yang dioptimalkan untuk manufaktur, menghemat biaya operasional hingga 25%.", descKO: "제조 라인에 최적화된 청정에너지를 공급하여 전력 비용을 최대 25%까지 절감합니다.", img: "/img/Handal.png" },
  { id: 4, cat: "commercial", capacity: "589 kWp", title: "PT. Kanindo Makmur Jaya 2 (Jepara)", descEN: "Warehouse & logistics solar EPC.", descID: "Penyediaan EPC surya untuk area pergudangan dan pusat logistik komersial.", descKO: "대형 물류 창고 및 유통 센터를 위한 고효율 루프탑 태양광 EPC 구축.", img: "/img/Kanindo.png" },
  { id: 5, cat: "rooftop", capacity: "53 kWp", title: "PT. Shinsung Grand Indonesia (Pemalang)", descEN: "Rooftop residential-commercial hybrid system.", descID: "Sistem hibrida komersial-residensial atap yang efisien dan andal.", descKO: "하이브리드 분산형 자산 아키텍처 기반의 상업용·주거용 루프탑 시스템.", img: "/img/Shinsung.png" },
  { id: 6, cat: "commercial", capacity: "31.8 kWp", title: "PT. Kaiti Global Indonesia (Cirebon)", descEN: "Small-medium business PV system.", descID: "Sistem fotovoltaik terintegrasi untuk bisnis skala kecil dan menengah.", descKO: "중소기업 비즈니스 빌딩에 맞춤 설계된 고효율 태양광 PV 시스템.", img: "/img/Kaiti.png" }
];

export default function Portfolio() {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(p => p.cat === filter);

  const getDesc = (proj) => {
    if (language === 'id') return proj.descID;
    if (language === 'ko') return proj.descKO;
    return proj.descEN;
  };

  return (
    <>
      <section id="projects" className="portfolio-section image-bg-section">
        <div className="container">
          <div className={`portfolio-topreveal ${active ? 'reveal active' : 'reveal'}`}>
            <div>
              <span className="sub-headline">{t('projects_tag')}</span>
              <h2 className="section-title">{t('projects_title')}</h2>
            </div>
            <div className="modern-filter-tabs">
              <button 
                className={`filter-tab-btn ${filter === 'all' ? 'active' : ''}`} 
                onClick={() => setFilter('all')}
              >
                {t('filter_all')}
              </button>
              <button 
                className={`filter-tab-btn ${filter === 'industrial' ? 'active' : ''}`} 
                onClick={() => setFilter('industrial')}
              >
                {t('filter_industrial')}
              </button>
              <button 
                className={`filter-tab-btn ${filter === 'commercial' ? 'active' : ''}`} 
                onClick={() => setFilter('commercial')}
              >
                {t('filter_commercial')}
              </button>
            </div>
          </div>
          
          <div id="projectsGrid" className="premium-portfolio-masonry">
            {filteredProjects.map((proj) => (
              <div 
                key={proj.id} 
                className={`portfolio-item-card reveal active`}
                onClick={() => setSelectedProject(proj)}
              >
                <div className="p-img-area">
                  <img 
                    src={proj.img} 
                    alt={proj.title} 
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=600&auto=format&fit=crop';
                    }} 
                  />
                </div>
                <div className="p-desc-area">
                  <span className="p-cap-label">{proj.capacity}</span>
                  <h4>{proj.title}</h4>
                  <p className="text-muted" style={{ fontSize: '12px', marginTop: '4px' }}>
                    {getDesc(proj)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
