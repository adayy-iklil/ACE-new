import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProjectModal from '../components/ProjectModal';

const projectsData = [
  { name: "PT. Hwa Seung Indonesia (Jepara)", capacity: "4.1 MWp", category: "industrial", desc: "Large-scale industrial rooftop solar PV system, reducing 3,200 tons CO2/year.", image: "/img/Hwaseung.png" },
  { name: "PT. Parkland World Indonesia (Jepara)", capacity: "2.4 MWp", category: "industrial", desc: "Commercial factory solar installation with real-time monitoring.", image: "/img/Parkland.png" },
  { name: "PT. Handal Sukses Karya (Jepara)", capacity: "1.1 MWp", category: "industrial", desc: "Optimized energy for manufacturing, savings up to 25%.", image: "/img/Handal.png" },
  { name: "PT. Kanindo Makmur Jaya 2 (Jepara)", capacity: "589 kWp", category: "commercial", desc: "Warehouse & logistics solar EPC.", image: "/img/Kanindo.png" },
  { name: "PT. Shinsung Grand Indonesia (Pemalang)", capacity: "53 kWp", category: "rooftop", desc: "Rooftop residential-commercial hybrid system.", image: "/img/Shinsung.png" },
  { name: "PT. Kaiti Global Indonesia (Cirebon)", capacity: "31.8 kWp", category: "commercial", desc: "Small-medium business PV system.", image: "/img/Kaiti.png" },
  { name: "PT. Handal Sukses Karya (Jepara)", capacity: "11 MWp", category: "industrial", desc: "Flagship project, one of largest solar carport/rooftop in Java.", image: "/img/Handal.png" }
];

export default function Projects() {
  const { t } = useLanguage();
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <>
      <section id="projects" className="section bg-light">
        <div className="container">
          <div className={`section-header ${active ? 'reveal active' : 'reveal'}`}>
            <span className="section-tag">{t('projects_tag')}</span>
            <h2>{t('projects_title')}</h2>
            <p>{t('projects_sub')}</p>
          </div>
          
          <div className={`filter-buttons ${active ? 'reveal active' : 'reveal'}`}>
            <button 
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
              onClick={() => setFilter('all')}
            >
              {t('filter_all')}
            </button>
            <button 
              className={`filter-btn ${filter === 'industrial' ? 'active' : ''}`} 
              onClick={() => setFilter('industrial')}
            >
              {t('filter_industrial')}
            </button>
            <button 
              className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`} 
              onClick={() => setFilter('commercial')}
            >
              {t('filter_commercial')}
            </button>
            <button 
              className={`filter-btn ${filter === 'rooftop' ? 'active' : ''}`} 
              onClick={() => setFilter('rooftop')}
            >
              {t('filter_rooftop')}
            </button>
          </div>

          <div id="projectsGrid" className="projects-grid">
            {filteredProjects.length === 0 ? (
              <p className="no-projects">
                {t('filter_all') === "All Projects" ? "No projects in this category." : "Tidak ada proyek dalam kategori ini."}
              </p>
            ) : (
              filteredProjects.map((proj, idx) => (
                <div 
                  key={idx} 
                  className={`project-card ${active ? 'reveal active' : 'reveal'}`}
                  onClick={() => setSelectedProject(proj)}
                >
                  <div className="project-img">
                    <img 
                      src={proj.image} 
                      alt={proj.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        const parent = e.target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<i class="fas fa-solar-panel" style="font-size:48px; color:#7c8b9c;"></i>';
                          parent.style.background = '#e2e8f0';
                          parent.style.display = 'flex';
                          parent.style.alignItems = 'center';
                          parent.style.justifyContent = 'center';
                        }
                      }}
                    />
                  </div>
                  <div className="project-info">
                    <h3>{proj.name}</h3>
                    <div className="project-capacity">{proj.capacity}</div>
                    <p>{proj.desc.substring(0, 80)}...</p>
                    <button className="view-detail-btn">
                      {t('view_details')} <i className="fas fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Legacy & Milestones Section */}
      <section className="section">
        <div className="container">
          <div className="legacy-grid">
            <div className={`legacy-text ${active ? 'reveal active' : 'reveal'}`}>
              <span className="section-tag">{t('legacy_tag')}</span>
              <h2>{t('legacy_title')}</h2>
              <div className="legacy-list">
                <div dangerouslySetInnerHTML={{ __html: `<i class='fas fa-trophy'></i> ` + t('legacy1') }} />
                <div dangerouslySetInnerHTML={{ __html: `<i class='fas fa-shield-alt'></i> ` + t('legacy2') }} />
                <div dangerouslySetInnerHTML={{ __html: `<i class='fas fa-chart-line'></i> ` + t('legacy3') }} />
                <div dangerouslySetInnerHTML={{ __html: `<i class='fas fa-certificate'></i> ` + t('legacy4') }} />
              </div>
            </div>
            
            <div className={`milestone-card ${active ? 'reveal active' : 'reveal'}`}>
              <h3>{t('milestone_title')}</h3>
              <ul>
                <li dangerouslySetInnerHTML={{ __html: `<i class='fas fa-calendar-alt'></i> ` + t('milestone1') }} />
                <li dangerouslySetInnerHTML={{ __html: `<i class='fas fa-calendar-alt'></i> ` + t('milestone2') }} />
                <li dangerouslySetInnerHTML={{ __html: `<i class='fas fa-calendar-alt'></i> ` + t('milestone3') }} />
              </ul>
              <div className="cert-badges">
                <span>ISO 9001</span>
                <span>B2 License</span>
                <span>Tier-1 Modules</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Project Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
