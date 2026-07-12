// ===== TRANSLATIONS =====
const translations = {
    en: {
        nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', contact: 'Contact' },
        hero: {
            badge: "Indonesia's No.1 Solar EPC & O&M",
            title: 'Powering Indonesia\'s <span>Solar Future</span>',
            subtitle: 'PT. ACE ENERGY SERVICE delivers world-class solar PV solutions — from EPC to O&M — for a sustainable tomorrow.',
            cta1: 'Explore Services',
            cta2: 'Contact Us'
        },
        glance: {
            tag: 'Company at a Glance',
            title: 'ACE ENERGY SERVICE',
            subtitle: 'PT. ACE ENERGY SERVICE is the largest solar energy project developer in Indonesia.',
            card1: { title: 'Solar EPC Expert', desc: 'End-to-end Engineering, Procurement & Construction for solar PV systems.' },
            card2: { title: 'O&M Specialists', desc: '24/7 monitoring, preventive maintenance, and performance optimization.' },
            card3: { title: 'Sustainability Focus', desc: "Driving Indonesia's clean energy transition with reliable solar solutions." },
            card4: { title: '30+ Years Heritage', desc: "Backed by ACE E&C's B2 Grade construction license & multi-disciplinary expertise." }
        },
        stats: { projects: 'Projects Completed', years: 'Years of Expertise', revenue: 'Revenue (IDR Billion)', team: 'Expert Team' },
        about: {
            tag: 'About Us',
            title: 'Your Trusted Partner in Solar Energy',
            subtitle: "We are Korea's No. 1 Solar Power Development & EPC, O&M Company in Indonesia.",
            ace: {
                title: 'PT. ACE ENERGY SERVICE',
                p1: 'We launched our Renewable Energy and O&M business in November 2019. ACE ENERGY SERVICE is a leading EPC company in Indonesia, specializing in solar PV energy solutions and renewable energy operations & maintenance (O&M).',
                p2: 'Building a greener future, starting today. We are committed to taking action now — through sustainable solutions and responsible innovation — to ensure a cleaner, healthier environment for generations to come.',
                badge: "Indonesia's No.1 Solar EPC & O&M"
            },
            parent: {
                title: 'About E&C (Parent Company)',
                p1: 'ACE E&C is a leading construction company with over 30 years of expertise in large-scale factory and energy plant projects across Indonesia. We hold a B2 Grade construction license, the highest classification in the country.',
                item1: 'B2 Grade License',
                item2: '300+ Projects',
                item3: 'Multi-disciplinary Team',
                item4: 'IDR 1.2T Revenue (2023)'
            },
            strengths: {
                title: 'Our Strengths',
                quote: '"Quality and reliability are the foundation of every project we deliver."',
                s1: { title: 'Professional Team', desc: 'Cross-disciplinary expertise in engineering, legal, and business.' },
                s2: { title: 'International Standards', desc: 'Design and installation that meet global quality benchmarks.' },
                s3: { title: 'Sustainable Excellence', desc: 'Dependable solutions, optimized energy, and a sustainable future.' },
                s4: { title: 'High Quality Material', desc: 'Tier-1 equipment and the latest solar technology.' }
            },
            imagePlaceholder: 'Company Image'
        },
        services: {
            tag: 'Our Core Services',
            title: 'Committed to Excellence',
            subtitle: '"All-in-one integrated solar energy solutions at your fingertips"',
            tab1: 'O&M',
            tab2: 'Commercial EPC',
            tab3: 'Residential EPC',
            tab4: 'Agricultural EPC',
            tab5: 'REC',
            tab6: 'BESS',
            tab7: 'PPP & IPP',
            om: {
                title: 'Solar PV O&M Service',
                desc: "ACE ENERGY SERVICE's O&M service ensures your solar power system operates at peak performance. We provide real-time monitoring, routine inspections, preventive maintenance, and corrective repairs.",
                f1: '24/7 monitoring with digital system',
                f2: 'Experienced & certified technical team',
                f3: 'Preventive & predictive maintenance',
                f4: 'Transparent performance reports',
                f5: 'Fast response for emergency repairs'
            },
            commercial: {
                title: 'Industrial / Commercial Solar PV EPC',
                desc: 'EPC solar PV solutions for factories, warehouses, offices, shopping centers, hotels, and other business facilities. Reduce electricity costs and enhance sustainability.',
                f1: 'Tailored system design',
                f2: 'High-quality international standard components',
                f3: 'Fast, efficient, safe construction',
                f4: 'Flexible investment schemes',
                f5: 'Supports ESG & Sustainability Reporting'
            },
            residential: {
                title: 'Residential Solar PV EPC',
                desc: 'Solar PV services for the residential sector. Rooftop installations help reduce monthly electricity costs while contributing to a greener environment.',
                f1: 'Customized rooftop design',
                f2: 'Fast, neat, safe installation',
                f3: '25-year solar panel warranty',
                f4: 'App for monitoring consumption & production',
                f5: 'Post-installation technical support'
            },
            agri: {
                title: 'Agricultural & Livestock Solar PV EPC',
                desc: 'Tailored solar PV solutions for agriculture and livestock. Cut electricity costs for irrigation, water pumps, cooling, and lighting.',
                f1: 'Energy-efficient irrigation & pumps',
                f2: 'Solar-powered lighting & cooling',
                f3: 'Off-grid / hybrid technology',
                f4: 'Increased productivity, lower costs',
                f5: 'Eco-friendly energy for modern agriculture'
            },
            rec: {
                title: 'REC (Renewable Energy Certificate) Management',
                desc: 'A Renewable Energy Certificate (REC) is official proof of renewable energy usage. We help companies obtain RECs to support Net Zero Emission targets and ESG reporting.',
                f1: 'Full REC administrative assistance',
                f2: 'International REC provider network',
                f3: 'Competitive & transparent pricing',
                f4: 'Supports ESG & Green Financing',
                f5: 'Achieve Net Zero Emission targets'
            },
            bess: {
                title: 'Battery Energy Storage System (BESS)',
                desc: 'BESS solutions answer the challenges of renewable energy integration. Store solar energy for use anytime, day or night.',
                f1: 'Energy Shifting',
                f2: 'Grid Stability',
                f3: 'Backup Power',
                f4: 'Integration with Renewables'
            },
            ppp: {
                title: 'PPP & Independent Power Producer',
                desc: 'Public-Private Partnership and IPP project development. We combine public and private sector efficiency for large-scale solar power projects.',
                f1: 'BOT / BOO project structures',
                f2: 'PPA & financial structuring',
                f3: 'Regulatory & licensing expertise',
                f4: 'Grid access & capacity assessment'
            }
        },
        projects: {
            tag: 'Featured Projects',
            title: 'Our Solar Portfolio',
            subtitle: 'Delivering excellence across Indonesia — from industrial rooftops to utility-scale solar farms.',
            p1: { name: 'PT. Hwa Seung Indonesia', detail: 'Jepara · 4.1 MWp' },
            p2: { name: 'PT. Parkland World Indonesia', detail: 'Jepara · 2.4 MWp' },
            p3: { name: 'PT. Handal Sukses Karya', detail: 'Jepara · 1.1 MWp' },
            p4: { name: 'PT. Kanindo Makmur Jaya 2', detail: 'Jepara · 589 kWp' },
            p5: { name: 'PT. Shinsung Grand Indonesia', detail: 'Pemalang · 53 kWp' },
            p6: { name: 'PT. Kaiti Global Indonesia', detail: 'Cirebon · 31.8 kWp' }
        },
        contact: {
            tag: 'Contact Us',
            title: "Let's Build a Greener Future",
            subtitle: 'Get in touch with our solar energy experts today.',
            address: { title: 'Office Address', desc: 'Alamanda Tower, Jl. TB Simatupang No.22-26, Cilandak Barat, Jakarta Selatan 12430' },
            phone: { title: 'Phone' },
            email: { title: 'Email' },
            form: { name: 'Full Name', email: 'Email Address', phone: 'Phone Number', message: 'Message', submit: 'Send Message' }
        },
        footer: {
            tagline: "Indonesia's No.1 Solar Power Development & EPC, O&M Company",
            quickLinks: 'Quick Links',
            services: 'Our Services',
            contactUs: 'Contact Us',
            copyright: 'ACE ENERGY SERVICE. All rights reserved.',
            s1: 'Solar O&M',
            s2: 'Commercial EPC',
            s3: 'Residential EPC',
            s4: 'REC Management',
            s5: 'BESS'
        }
    },
    id: {
        nav: { home: 'Beranda', about: 'Tentang', services: 'Layanan', projects: 'Proyek', contact: 'Kontak' },
        hero: {
            badge: 'No.1 EPC & O&M Tenaga Surya di Indonesia',
            title: 'Mendorong <span>Masa Depan Surya</span> Indonesia',
            subtitle: 'PT. ACE ENERGY SERVICE menyediakan solusi PV surya kelas dunia — dari EPC hingga O&M — untuk masa depan yang berkelanjutan.',
            cta1: 'Jelajahi Layanan',
            cta2: 'Hubungi Kami'
        },
        glance: {
            tag: 'Sekilas Perusahaan',
            title: 'ACE ENERGY SERVICE',
            subtitle: 'PT. ACE ENERGY SERVICE adalah Pengembang Proyek Tenaga Surya Terbesar di Indonesia',
            card1: { title: 'Ahli EPC Surya', desc: 'Rekayasa, Pengadaan, dan Konstruksi ujung ke ujung untuk sistem PV surya.' },
            card2: { title: 'Spesialis O&M', desc: 'Pemantauan 24/7, pemeliharaan preventif, dan optimasi kinerja.' },
            card3: { title: 'Fokus Keberlanjutan', desc: 'Mendorong transisi energi bersih Indonesia dengan solusi surya yang andal.' },
            card4: { title: 'Warisan 30+ Tahun', desc: 'Didukung oleh lisensi konstruksi B2 ACE E&C & keahlian multi-disiplin.' }
        },
        stats: { projects: 'Proyek Selesai', years: 'Tahun Pengalaman', revenue: 'Pendapatan (Miliar IDR)', team: 'Tim Ahli' },
        about: {
            tag: 'Tentang Kami',
            title: 'Mitra Terpercaya Anda dalam Energi Surya',
            subtitle: 'Kami adalah Perusahaan Pengembangan & EPC, O&M Tenaga Surya No.1 di Indonesia.',
            ace: {
                title: 'PT. ACE ENERGY SERVICE',
                p1: 'Kami meluncurkan bisnis Energi Terbarukan dan O&M pada November 2019. ACE ENERGY SERVICE adalah perusahaan EPC terkemuka di Indonesia yang mengkhususkan diri dalam solusi energi PV surya dan operasi & pemeliharaan energi terbarukan.',
                p2: 'Membangun masa depan yang lebih hijau, mulai hari ini. Kami berkomitmen untuk bertindak sekarang — melalui solusi berkelanjutan dan inovasi yang bertanggung jawab — untuk memastikan lingkungan yang lebih bersih dan sehat bagi generasi mendatang.',
                badge: 'No.1 EPC & O&M Surya di Indonesia'
            },
            parent: {
                title: 'Tentang E&C (Perusahaan Induk)',
                p1: 'ACE E&C adalah perusahaan konstruksi terkemuka dengan pengalaman lebih dari 30 tahun dalam proyek pabrik skala besar dan pembangkit energi di seluruh Indonesia. Kami memegang lisensi konstruksi B2 Grade, klasifikasi tertinggi di negara ini.',
                item1: 'Lisensi B2 Grade',
                item2: '300+ Proyek',
                item3: 'Tim Multi-disiplin',
                item4: 'Pendapatan IDR 1,2T (2023)'
            },
            strengths: {
                title: 'Kekuatan Kami',
                quote: '"Kualitas dan keandalan adalah fondasi dari setiap proyek yang kami serahkan."',
                s1: { title: 'Tim Profesional', desc: 'Keahlian lintas disiplin (teknik, hukum, bisnis).' },
                s2: { title: 'Standar Internasional', desc: 'Desain dan instalasi yang memenuhi standar internasional.' },
                s3: { title: 'Keunggulan Berkelanjutan', desc: 'Setiap proyek kami dipandu oleh dedikasi pada solusi andal, penggunaan energi optimal, dan masa depan berkelanjutan.' },
                s4: { title: 'Material Berkualitas Tinggi', desc: 'Material berkualitas tinggi dan teknologi terbaru.' }
            },
            imagePlaceholder: 'Gambar Perusahaan'
        },
        services: {
            tag: 'Layanan Inti Kami',
            title: 'Berkomitmen pada Keunggulan',
            subtitle: '"Solusi energi surya terintegrasi all-in-one di ujung jari Anda"',
            tab1: 'O&M',
            tab2: 'EPC Komersial',
            tab3: 'EPC Residensial',
            tab4: 'EPC Pertanian',
            tab5: 'REC',
            tab6: 'BESS',
            tab7: 'PPP & IPP',
            om: {
                title: 'Layanan O&M PV Surya',
                desc: 'Layanan O&M ACE ENERGY SERVICE memastikan sistem tenaga surya Anda beroperasi pada kinerja puncak. Kami menyediakan pemantauan real-time, inspeksi rutin, pemeliharaan preventif, dan perbaikan korektif.',
                f1: 'Pemantauan 24/7 dengan sistem digital',
                f2: 'Tim teknis berpengalaman & bersertifikat',
                f3: 'Pemeliharaan preventif & prediktif',
                f4: 'Laporan kinerja transparan',
                f5: 'Respon cepat untuk perbaikan darurat'
            },
            commercial: {
                title: 'EPC PV Surya Industri / Komersial',
                desc: 'Solusi EPC PV surya untuk pabrik, gudang, perkantoran, pusat perbelanjaan, hotel, dan fasilitas bisnis lainnya. Kurangi biaya listrik dan tingkatkan keberlanjutan.',
                f1: 'Desain sistem yang disesuaikan',
                f2: 'Komponen berkualitas tinggi standar internasional',
                f3: 'Proses konstruksi cepat, aman, dan efisien',
                f4: 'Skema investasi fleksibel',
                f5: 'Mendukung pelaporan ESG & Keberlanjutan'
            },
            residential: {
                title: 'EPC PV Surya Residensial',
                desc: 'Layanan PV surya untuk sektor residensial. Instalasi atap membantu mengurangi biaya listrik bulanan sambil berkontribusi pada lingkungan yang lebih hijau.',
                f1: 'Desain atap yang disesuaikan',
                f2: 'Instalasi cepat, rapi, dan aman',
                f3: 'Garansi panel surya hingga 25 tahun',
                f4: 'Aplikasi untuk memantau konsumsi & produksi',
                f5: 'Dukungan teknis pasca-instalasi'
            },
            agri: {
                title: 'EPC PV Surya Pertanian & Peternakan',
                desc: 'Solusi PV surya yang disesuaikan untuk pertanian dan peternakan. Kurangi biaya listrik untuk irigasi, pompa air, pendinginan, dan penerangan.',
                f1: 'Irigasi & pompa hemat energi',
                f2: 'Penerangan & pendinginan bertenaga surya',
                f3: 'Teknologi off-grid / hybrid',
                f4: 'Produktivitas meningkat, biaya lebih rendah',
                f5: 'Energi ramah lingkungan untuk pertanian modern'
            },
            rec: {
                title: 'Manajemen REC (Sertifikat Energi Terbarukan)',
                desc: 'Sertifikat Energi Terbarukan (REC) adalah bukti resmi penggunaan energi terbarukan. Kami membantu perusahaan mendapatkan REC untuk mendukung target Net Zero Emission dan pelaporan ESG.',
                f1: 'Bantuan administratif REC penuh',
                f2: 'Jaringan penyedia REC internasional',
                f3: 'Harga kompetitif & transparan',
                f4: 'Mendukung ESG & Pembiayaan Hijau',
                f5: 'Capai target Net Zero Emission'
            },
            bess: {
                title: 'Sistem Penyimpanan Energi Baterai (BESS)',
                desc: 'Solusi BESS menjawab tantangan integrasi energi terbarukan. Simpan energi surya untuk digunakan kapan saja, siang atau malam.',
                f1: 'Pergeseran Energi',
                f2: 'Stabilitas Jaringan',
                f3: 'Cadangan Daya',
                f4: 'Integrasi dengan Energi Terbarukan'
            },
            ppp: {
                title: 'PPP & Independent Power Producer',
                desc: 'Pengembangan proyek Kemitraan Publik-Swasta dan IPP. Kami menggabungkan efisiensi sektor publik dan swasta untuk proyek tenaga surya skala besar.',
                f1: 'Struktur proyek BOT / BOO',
                f2: 'Strukturisasi PPA & keuangan',
                f3: 'Keahlian regulasi & perizinan',
                f4: 'Penilaian akses jaringan & kapasitas'
            }
        },
        projects: {
            tag: 'Proyek Unggulan',
            title: 'Portofolio Surya Kami',
            subtitle: 'Memberikan keunggulan di seluruh Indonesia — dari atap industri hingga ladang surya skala utilitas.',
            p1: { name: 'PT. Hwa Seung Indonesia', detail: 'Jepara · 4,1 MWp' },
            p2: { name: 'PT. Parkland World Indonesia', detail: 'Jepara · 2,4 MWp' },
            p3: { name: 'PT. Handal Sukses Karya', detail: 'Jepara · 1,1 MWp' },
            p4: { name: 'PT. Kanindo Makmur Jaya 2', detail: 'Jepara · 589 kWp' },
            p5: { name: 'PT. Shinsung Grand Indonesia', detail: 'Pemalang · 53 kWp' },
            p6: { name: 'PT. Kaiti Global Indonesia', detail: 'Cirebon · 31,8 kWp' }
        },
        contact: {
            tag: 'Hubungi Kami',
            title: 'Mari Bangun Masa Depan yang Lebih Hijau',
            subtitle: 'Hubungi ahli energi surya kami hari ini.',
            address: { title: 'Alamat Kantor', desc: 'Alamanda Tower, Jl. TB Simatupang No.22-26, Cilandak Barat, Jakarta Selatan 12430' },
            phone: { title: 'Telepon' },
            email: { title: 'Email' },
            form: { name: 'Nama Lengkap', email: 'Alamat Email', phone: 'Nomor Telepon', message: 'Pesan', submit: 'Kirim Pesan' }
        },
        footer: {
            tagline: 'No.1 Pengembang & EPC, O&M Tenaga Surya di Indonesia',
            quickLinks: 'Tautan Cepat',
            services: 'Layanan Kami',
            contactUs: 'Hubungi Kami',
            copyright: 'ACE ENERGY SERVICE. Hak cipta dilindungi.',
            s1: 'O&M Surya',
            s2: 'EPC Komersial',
            s3: 'EPC Residensial',
            s4: 'Manajemen REC',
            s5: 'BESS'
        }
    },
    ko: {
        nav: { home: '홈', about: '회사소개', services: '서비스', projects: '프로젝트', contact: '문의' },
        hero: {
            badge: '인도네시아 No.1 태양광 EPC & O&M',
            title: '인도네시아의 <span>태양광 미래</span>를 이끌다',
            subtitle: 'PT. ACE ENERGY SERVICE는 EPC부터 O&M까지 세계적 수준의 태양광 PV 솔루션을 제공하여 지속 가능한 내일을 만듭니다.',
            cta1: '서비스 살펴보기',
            cta2: '문의하기'
        },
        glance: {
            tag: '회사 개요',
            title: 'ACE ENERGY SERVICE',
            subtitle: 'PT. ACE ENERGY SERVICE는 인도네시아 최대 태양광 프로젝트 개발사입니다.',
            card1: { title: '태양광 EPC 전문가', desc: '태양광 PV 시스템을 위한 종합 설계, 조달, 시공.' },
            card2: { title: 'O&M 전문가', desc: '24/7 모니터링, 예방 유지보수, 성능 최적화.' },
            card3: { title: '지속가능성 중점', desc: '신뢰할 수 있는 태양광 솔루션으로 인도네시아의 청정 에너지 전환을 주도합니다.' },
            card4: { title: '30년 이상의 전통', desc: 'ACE E&C의 B2 등급 건설 면허 및 다분야 전문성의 지원을 받습니다.' }
        },
        stats: { projects: '완료된 프로젝트', years: '경험 연수', revenue: '매출 (억 IDR)', team: '전문가 팀' },
        about: {
            tag: '회사소개',
            title: '태양광 에너지의 신뢰할 수 있는 파트너',
            subtitle: '우리는 인도네시아 No.1 태양광 발전 개발 및 EPC, O&M 회사입니다.',
            ace: {
                title: 'PT. ACE ENERGY SERVICE',
                p1: '2019년 11월에 재생 에너지 및 O&M 사업을 시작했습니다. ACE ENERGY SERVICE는 인도네시아의 선도적인 EPC 회사로서 태양광 PV 에너지 솔루션 및 재생 에너지 운영 및 유지보수(O&M)를 전문으로 합니다.',
                p2: '오늘부터 더 푸른 미래를 건설합니다. 우리는 지속 가능한 솔루션과 책임 있는 혁신을 통해 지금 행동하여 미래 세대를 위해 더 깨끗하고 건강한 환경을 보장하기 위해 노력하고 있습니다.',
                badge: '인도네시아 No.1 태양광 EPC & O&M'
            },
            parent: {
                title: 'E&C (모회사) 소개',
                p1: 'ACE E&C는 인도네시아 전역에서 대규모 공장 및 에너지 플랜트 프로젝트에서 30년 이상의 전문성을 가진 선도적인 건설 회사입니다. 당사는 국가 최고 등급인 B2 등급 건설 면허를 보유하고 있습니다.',
                item1: 'B2 등급 면허',
                item2: '300+ 프로젝트',
                item3: '다분야 팀',
                item4: '매출 1.2조 IDR (2023년)'
            },
            strengths: {
                title: '우리의 강점',
                quote: '"품질과 신뢰성은 우리가 제공하는 모든 프로젝트의 기초입니다."',
                s1: { title: '전문 팀', desc: '엔지니어링, 법률, 비즈니스 등 다분야 전문성.' },
                s2: { title: '국제 표준', desc: '국제 표준을 충족하는 설계 및 설치.' },
                s3: { title: '지속 가능한 우수성', desc: '신뢰할 수 있는 솔루션, 최적화된 에너지 사용, 지속 가능한 미래에 대한 헌신.' },
                s4: { title: '고품질 자재', desc: '고품질 자재와 최신 기술.' }
            },
            imagePlaceholder: '회사 이미지'
        },
        services: {
            tag: '핵심 서비스',
            title: '우수성에 대한 헌신',
            subtitle: '"올인원 통합 태양광 에너지 솔루션을 손끝에서"',
            tab1: 'O&M',
            tab2: '상업용 EPC',
            tab3: '주거용 EPC',
            tab4: '농업용 EPC',
            tab5: 'REC',
            tab6: 'BESS',
            tab7: 'PPP & IPP',
            om: {
                title: '태양광 PV O&M 서비스',
                desc: 'ACE ENERGY SERVICE의 O&M 서비스는 태양광 발전 시스템이 최고 성능으로 작동하도록 보장합니다. 실시간 모니터링, 정기 점검, 예방 유지보수 및 교정 수리를 제공합니다.',
                f1: '디지털 시스템을 통한 24/7 모니터링',
                f2: '경험 많고 자격을 갖춘 기술 팀',
                f3: '예방 및 예측 유지보수',
                f4: '투명한 성능 보고서',
                f5: '긴급 수리에 대한 신속 대응'
            },
            commercial: {
                title: '산업/상업용 태양광 PV EPC',
                desc: '공장, 창고, 사무실, 쇼핑몰, 호텔 및 기타 비즈니스 시설을 위한 EPC 태양광 PV 솔루션. 전기 요금을 절감하고 지속 가능성을 향상시킵니다.',
                f1: '맞춤형 시스템 설계',
                f2: '국제 표준의 고품질 부품',
                f3: '신속하고 효율적이며 안전한 시공',
                f4: '유연한 투자 방식',
                f5: 'ESG 및 지속가능성 보고 지원'
            },
            residential: {
                title: '주거용 태양광 PV EPC',
                desc: '주거 부문을 위한 태양광 PV 서비스. 옥상 설치로 월간 전기 요금을 줄이고 더 푸른 환경에 기여합니다.',
                f1: '맞춤형 옥상 설계',
                f2: '신속하고 깔끔하며 안전한 설치',
                f3: '태양광 패널 25년 보증',
                f4: '소비 및 생산 모니터링 앱',
                f5: '설치 후 기술 지원'
            },
            agri: {
                title: '농업 및 축산 태양광 PV EPC',
                desc: '농업 및 축산을 지원하는 맞춤형 태양광 PV 솔루션. 관개, 펌프, 냉방 및 조명의 전기 비용을 절감합니다.',
                f1: '에너지 효율적인 관개 및 펌프',
                f2: '태양광 조명 및 냉방',
                f3: '오프그리드 / 하이브리드 기술',
                f4: '생산성 향상, 비용 절감',
                f5: '현대 농업을 위한 친환경 에너지'
            },
            rec: {
                title: 'REC(재생에너지 인증서) 관리',
                desc: '재생에너지 인증서(REC)는 재생 에너지 사용에 대한 공식 증명입니다. 당사는 기업이 REC를 획득하여 넷제로 배출 목표와 ESG 보고를 지원하도록 돕습니다.',
                f1: '전체 REC 행정 지원',
                f2: '국제 REC 공급업체 네트워크',
                f3: '경쟁력 있고 투명한 가격',
                f4: 'ESG 및 녹색 금융 지원',
                f5: '넷제로 배출 목표 달성'
            },
            bess: {
                title: '배터리 에너지 저장 시스템 (BESS)',
                desc: 'BESS 솔루션은 재생 에너지 통합의 과제에 대응합니다. 태양 에너지를 저장하여 언제든지 사용할 수 있습니다.',
                f1: '에너지 이동',
                f2: '계통 안정성',
                f3: '비상 전원',
                f4: '재생 에너지와 통합'
            },
            ppp: {
                title: 'PPP & 독립 발전사업자',
                desc: '공공-민간 파트너십 및 IPP 프로젝트 개발. 대규모 태양광 발전 프로젝트를 위해 공공 및 민간 부문의 효율성을 결합합니다.',
                f1: 'BOT / BOO 프로젝트 구조',
                f2: 'PPA 및 재무 구조화',
                f3: '규제 및 인허가 전문성',
                f4: '계통 접근 및 용량 평가'
            }
        },
        projects: {
            tag: '주요 프로젝트',
            title: '태양광 포트폴리오',
            subtitle: '인도네시아 전역에서 우수성 제공 — 산업용 지붕에서 대규모 태양광 발전소까지.',
            p1: { name: 'PT. Hwa Seung Indonesia', detail: 'Jepara · 4.1 MWp' },
            p2: { name: 'PT. Parkland World Indonesia', detail: 'Jepara · 2.4 MWp' },
            p3: { name: 'PT. Handal Sukses Karya', detail: 'Jepara · 1.1 MWp' },
            p4: { name: 'PT. Kanindo Makmur Jaya 2', detail: 'Jepara · 589 kWp' },
            p5: { name: 'PT. Shinsung Grand Indonesia', detail: 'Pemalang · 53 kWp' },
            p6: { name: 'PT. Kaiti Global Indonesia', detail: 'Cirebon · 31.8 kWp' }
        },
        contact: {
            tag: '문의하기',
            title: '더 푸른 미래를 함께 만들어요',
            subtitle: '오늘 태양광 에너지 전문가와 상담하세요.',
            address: { title: '사무실 주소', desc: 'Alamanda Tower, Jl. TB Simatupang No.22-26, Cilandak Barat, Jakarta Selatan 12430' },
            phone: { title: '전화번호' },
            email: { title: '이메일' },
            form: { name: '성명', email: '이메일 주소', phone: '전화번호', message: '메시지', submit: '메시지 보내기' }
        },
        footer: {
            tagline: '인도네시아 No.1 태양광 발전 개발 및 EPC, O&M 회사',
            quickLinks: '빠른 링크',
            services: '서비스',
            contactUs: '문의',
            copyright: 'ACE ENERGY SERVICE. 모든 권리 보유.',
            s1: '태양광 O&M',
            s2: '상업용 EPC',
            s3: '주거용 EPC',
            s4: 'REC 관리',
            s5: 'BESS'
        }
    }
};

// ===== CURRENT LANGUAGE =====
let currentLang = 'en';

// ===== DOM READY =====
document.addEventListener('DOMContentLoaded', () => {

    // ---- Language switcher ----
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            if (lang === currentLang) return;
            currentLang = lang;
            langBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            translatePage(lang);
        });
    });

    // ---- Page navigation ----
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const footerNavLinks = document.querySelectorAll('.footer-links a[data-page]');
    const heroButtons = document.querySelectorAll('.hero-buttons .btn[data-page]');

    function navigateTo(pageId) {
        pageSections.forEach(s => s.classList.remove('active'));
        const target = document.getElementById(`page-${pageId}`);
        if (target) target.classList.add('active');
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
        document.getElementById('mainNav').classList.remove('open');
        document.getElementById('menuToggle').classList.remove('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) navigateTo(page);
        });
    });

    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) navigateTo(page);
            const serviceIdx = this.dataset.service;
            if (serviceIdx !== undefined) {
                setTimeout(() => {
                    activateServiceTab(parseInt(serviceIdx));
                }, 300);
            }
        });
    });

    heroButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            if (page) navigateTo(page);
        });
    });

    // ---- Service tabs ----
    const serviceTabs = document.querySelectorAll('.service-tab');
    const serviceContents = document.querySelectorAll('.service-content');

    function activateServiceTab(index) {
        serviceTabs.forEach(tab => tab.classList.remove('active'));
        serviceContents.forEach(c => c.classList.remove('active'));
        const tab = document.querySelector(`.service-tab[data-service="${index}"]`);
        if (tab) tab.classList.add('active');
        const content = document.querySelector(`.service-content[data-service="${index}"]`);
        if (content) content.classList.add('active');
    }

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const idx = parseInt(this.dataset.service);
            activateServiceTab(idx);
        });
    });

    // ---- Mobile menu ----
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mainNav.classList.toggle('open');
    });

    // ---- Stats animation ----
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    function animateStats() {
        if (counted) return;
        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            counted = true;
            statNumbers.forEach(el => {
                const target = parseInt(el.dataset.count) || 0;
                let current = 0;
                const step = Math.ceil(target / 60);
                const interval = setInterval(() => {
                    current += step;
                    if (current >= target) {
                        current = target;
                        clearInterval(interval);
                    }
                    el.textContent = current;
                }, 25);
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    setTimeout(animateStats, 300);

    // ---- Contact form ----
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // ---- Translate on load ----
    translatePage('en');

});

// ===== TRANSLATION FUNCTION =====
function translatePage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    function setText(el, key) {
        if (!el) return;
        const keys = key.split('.');
        let val = dict;
        for (let k of keys) {
            if (val && val[k] !== undefined) val = val[k];
            else return;
        }
        if (typeof val === 'string') {
            if (val.includes('<span>') || val.includes('<br>')) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        }
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.dataset.i18n;
        setText(el, key);
    });

    document.documentElement.lang = lang;
}