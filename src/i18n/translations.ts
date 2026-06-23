export type Lang = 'en' | 'id';

export const translations: Record<string, Record<Lang, string>> = {
  // ======= NAVBAR =======
  'nav.about': { en: 'About', id: 'Tentang' },
  'nav.skills': { en: 'Skills', id: 'Keahlian' },
  'nav.experience': { en: 'Experience', id: 'Pengalaman' },
  'nav.project': { en: 'Projects', id: 'Project' },
  'nav.showcase': { en: 'Showcase', id: 'Showcase' },
  'nav.contact': { en: 'Contact', id: 'Kontak' },
  'nav.toggle_language': { en: 'Toggle Language', id: 'Ganti Bahasa' },

  // ======= HERO =======
  'hero.role': { en: 'Fullstack Developer', id: 'Fullstack Developer' },
  'hero.line1': {
    en: 'Bringing <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Ideas</span>',
    id: 'Menghidupkan <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Ide</span>'
  },
  'hero.line2': {
    en: 'Through <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Lines of Code.</span>',
    id: 'Lewat <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Baris Kode.</span>'
  },
  'hero.desc': {
    en: 'Turning complex system logic into <span class="text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4 font-bold">intuitive, clean, and modern</span> digital experiences.',
    id: 'Mengubah logika sistem yang kompleks menjadi pengalaman digital yang <span class="text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4 font-bold">intuitif, bersih, dan modern</span>.'
  },
  'hero.cta': { en: 'Contact Me', id: 'Hubungi Saya' },
  'hero.showcase': { en: 'View Showcase', id: 'Lihat Showcase' },

  // ======= ABOUT SECTION =======
  'about.section_title': { en: 'About Me.', id: 'Tentang Saya.' },
  'about.role': { en: 'Fullstack Developer', id: 'Fullstack Developer' },
  'about.profile_alt': { en: 'Profile Photo', id: 'Foto Profil' },
  'about.years_label': { en: 'Years', id: 'Tahun' },

  // ======= ABOUT DATA =======
  'about.data_title': { en: 'Professional Summary', id: 'Ringkasan Profesional' },
  'about.data_description': {
    en: 'Fullstack Developer with over {yearsExp} years of experience building modern web applications using Laravel + Inertia.js + React. Currently actively developing internal systems for a chemical company and digital agency. Proficient in Next.js, Supabase, Docker, and leveraging AI Agents to increase coding productivity by up to 40%. Focused on delivering scalable, user-friendly solutions that have a real impact on business efficiency.',
    id: 'Fullstack Developer dengan lebih dari {yearsExp} tahun pengalaman membangun aplikasi web modern menggunakan Laravel + Inertia.js + React. Saat ini aktif mengembangkan sistem internal untuk perusahaan kimia dan digital agency. Mahir dalam Next.js, Supabase, Docker, serta memanfaatkan AI Agents untuk meningkatkan produktivitas coding hingga 40%. Fokus menghasilkan solusi yang scalable, user-friendly, dan berdampak nyata terhadap efisiensi bisnis.'
  },
  'about.stats_projects': { en: 'Projects Completed', id: 'Proyek Selesai' },
  'about.stats_commitment': { en: 'Commitment', id: 'Commitment' },

  // ======= SKILLS =======
  'skills.section_title': { en: 'Tech Stack & Skills.', id: 'Tech Stack & Keahlian.' },

  // ======= EXPERIENCE SECTION =======
  'experience.section_title': { en: 'Experience.', id: 'Pengalaman.' },

  // ======= EXPERIENCE DATA =======
  'experience.data_title': { en: 'Career Journey', id: 'Perjalanan Karir' },
  'experience.data_subtitle': { en: 'Experience & Projects', id: 'Pengalaman & Proyek' },
  'experience.item.0.desc': {
    en: 'Development of a Document Advance system customized specifically for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem Document Advance yang disesuikan khusus untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.1.desc': {
    en: 'Development of a Stock Opname system customized specifically for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem Stock Opname yang disesuikan khusus untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.2.desc': {
    en: 'Development of a Shipment Status system customized specifically for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem Shipment Status yang disesuikan khusus untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.3.desc': {
    en: 'Development of the interface for a Contractor Management application, useful for designing Budget Estimates (RAB), and assisting in application interface design.',
    id: 'Pembuatan antarmuka untuk aplikasi Contractor Management, yang berguna untuk membantu merancang Rancangan Anggaran Biaya (RAB), serta membantu pembuatan pembuatan rancangan antarmuka aplikasi.'
  },
  'experience.item.4.desc': {
    en: 'Development of a Customer Complaint system for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem Customer Complaint untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.5.desc': {
    en: 'Development of a Cash Advance system with special features for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem Cash Advance yang memiliki fitur khusus untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.6.desc': {
    en: 'Development of the ONCR (Online New Customer Registration) system for company needs, including server deployment assistance.',
    id: 'Pembuatan sistem ONCR (Online New Customer Registration) untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.7.desc': {
    en: 'Redesigned internal company systems & designed UI/UX for company needs, including server deployment assistance.',
    id: 'Redesain sistem internal perusahaan & merancang desain UI/UX untuk kebutuhan perusahaan serta membantu develop ke server.'
  },
  'experience.item.8.desc': {
    en: 'Development of the SISM (Sample Management Information System) for company needs.',
    id: 'Pembuatan sistem SISM (Sistem Informasi Sample Management) untuk kebutuhan perusahaan.'
  },
  'experience.item.9.desc': {
    en: 'Development of a simple POS system for cooperative needs.',
    id: 'Pembuatan sistem POS sederhana untuk kebutuhan koperasi.'
  },

  // ======= CONTACT SECTION =======
  'contact.badge': { en: "Let's Collaborate", id: "Let's Collaborate" },
  'contact.heading': {
    en: 'Ready to <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Start</span><br/>Your Project?',
    id: 'Siap untuk <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Memulai</span><br/>Projectmu?'
  },
  'contact.desc': {
    en: 'Every big idea starts with a single conversation. Contact me and let\'s discuss how digital solutions can bring your vision to life.',
    id: 'Setiap ide besar dimulai dari satu percakapan. Hubungi saya dan mari kita diskusikan bagaimana solusi digital dapat mewujudkan visi Anda.'
  },
  'contact.cta': { en: 'Contact Me', id: 'Hubungi Saya' },

  // ======= KONTAK PAGE =======
  'kontak.badge': { en: 'Contact', id: 'Kontak' },
  'kontak.heading': {
    en: 'Get In <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Touch</span>',
    id: 'Hubungi <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Saya</span>'
  },
  'kontak.desc': {
    en: 'Have questions, want to collaborate, or just chat? Feel free to reach out to me through any of the channels below.',
    id: 'Punya pertanyaan, ingin berkolaborasi, atau sekadar ngobrol? Jangan ragu untuk menghubungi saya melalui salah satu channel di bawah.'
  },
  'kontak.address_label': { en: 'Address', id: 'Alamat' },
  'kontak.email_label': { en: 'Email', id: 'Email' },
  'kontak.whatsapp_label': { en: 'WhatsApp', id: 'WhatsApp' },
  'kontak.instagram_label': { en: 'Instagram', id: 'Instagram' },

  // ======= PROJECT LIST PAGE =======
  'project.badge': { en: 'Portfolio', id: 'Portfolio' },
  'project.heading': {
    en: 'Professional <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Projects</span>',
    id: 'Project <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Profesional</span>'
  },
  'project.desc': {
    en: 'A collection of professional projects I have worked on using modern technology and solutions that make a real impact on business.',
    id: 'Kumpulan proyek profesional yang telah saya kerjakan dengan teknologi modern dan solusi yang berdampak nyata bagi bisnis.'
  },
  'project.detail': { en: 'View Details', id: 'Lihat Detail' },

  // ======= PROJECT DETAIL =======
  'project.back': { en: 'Back to Projects', id: 'Kembali ke Project' },
  'project.challenge': { en: 'Challenge', id: 'Tantangan' },
  'project.solution': { en: 'Solution', id: 'Solusi' },
  'project.features': { en: 'Key Features', id: 'Fitur Utama' },
  'project.tech': { en: 'Technology', id: 'Teknologi' },
  'project.result': { en: 'Results & Impact', id: 'Hasil & Dampak' },
  'project.info': { en: 'Information', id: 'Informasi' },
  'project.techstack': { en: 'Tech Stack', id: 'Tech Stack' },
  'project.table_component': { en: 'Component', id: 'Komponen' },
  'project.table_tech': { en: 'Technology', id: 'Teknologi' },

  // ======= PROJECT DATA =======
  // Customer Complaint Management
  'project.customer-complaint-management.shortDesc': {
    en: 'Digital Transformation of Customer Complaint Handling with ISO Standards Through Cross-Department Collaboration.',
    id: 'Transformasi Digital Penanganan Keluhan Pelanggan Berstandar ISO Melalui Kolaborasi Lintas Departemen.'
  },
  'project.customer-complaint-management.challengeDesc': {
    en: 'Before this system was implemented, the company faced operational obstacles that hindered customer service quality:',
    id: 'Sebelum sistem ini diimplementasikan, perusahaan menghadapi kendala operasional yang menghambat kualitas layanan pelanggan:'
  },
  'project.customer-complaint-management.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Fragmented Data</strong>: Complaints were recorded manually and scattered across various media, making it difficult to accurately track resolution status and progress.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Weak Cross-Department Collaboration</strong>: No formal mechanism for assigning investigations across departments led to slow and uncoordinated complaint handling.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Compliance Risk</strong>: The lack of documentation standards hindered the company from meeting ISO audit requirements, coupled with manual reporting that was time-consuming and error-prone.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Terfragmentasi</strong>: Pengaduan dicatat secara manual dan tersebar di berbagai media, sehingga sulit untuk melacak status dan progres penyelesaian secara akurat.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kolaborasi Lintas Departemen yang Lemah</strong>: Tidak adanya mekanisme formal untuk menugaskan investigasi antar departemen menyebabkan penanganan keluhan menjadi lambat dan tidak terkoordinasi.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Risiko Kepatuhan (Compliance)</strong>: Ketiadaan standar dokumentasi menghambat perusahaan dalam memenuhi persyaratan audit ISO, ditambah dengan proses pelaporan manual yang memakan waktu dan rentan kesalahan.</span></li></ul>'
  },
  'project.customer-complaint-management.solution': {
    en: 'I developed a web-based complaint management application that integrates a structured workflow from the initial report stage to final resolution. This system is designed to create full transparency, where each department can collaborate on a centralized platform. With document automation and audit tracking, this solution ensures every customer complaint is handled according to international quality standards.',
    id: 'Saya mengembangkan aplikasi manajemen pengaduan berbasis web yang mengintegrasikan alur kerja (workflow) terstruktur dari tahap laporan masuk hingga penyelesaian akhir. Sistem ini dirancang untuk menciptakan transparansi penuh, di mana setiap departemen dapat berkolaborasi dalam satu platform terpusat. Dengan otomatisasi dokumen dan sistem pelacakan audit, solusi ini memastikan setiap keluhan pelanggan ditangani sesuai dengan standar mutu internasional.'
  },
  'project.customer-complaint-management.features.0.title': { en: 'Integrated Workflow', id: 'Workflow Terintegrasi' },
  'project.customer-complaint-management.features.0.desc': {
    en: 'Manage the complaint lifecycle transparently, from draft and investigation to solution provision and case closure.',
    id: 'Mengelola siklus hidup pengaduan secara transparan, mulai dari draf, investigasi, hingga pemberian solusi dan penutupan kasus.'
  },
  'project.customer-complaint-management.features.1.title': { en: 'Multi-Department Collaboration', id: 'Kolaborasi Multi-Departemen' },
  'project.customer-complaint-management.features.1.desc': {
    en: 'Investigation assignment feature allowing relevant teams to input root causes and corrective actions directly.',
    id: 'Fitur penugasan investigasi yang memungkinkan tim terkait untuk menginput akar masalah (root cause) serta tindakan korektif secara langsung.'
  },
  'project.customer-complaint-management.features.2.title': { en: 'Real-Time Analytics Dashboard', id: 'Dashboard Analitik Real-Time' },
  'project.customer-complaint-management.features.2.desc': {
    en: 'Visualization of complaint statistics, monthly trends, and department workload distribution to support management decision-making.',
    id: 'Visualisasi statistik keluhan, tren bulanan, dan distribusi beban kerja departemen untuk mendukung pengambilan keputusan manajemen.'
  },
  'project.customer-complaint-management.features.3.title': { en: 'ISO Standard Automated Reporting', id: 'Pelaporan Otomatis Standar ISO' },
  'project.customer-complaint-management.features.3.desc': {
    en: 'Instant report generation to PDF and Excel formats, already adapted to ISO audit form standards.',
    id: 'Generator laporan instan ke format PDF dan Excel yang sudah disesuaikan dengan standar formulir audit ISO.'
  },
  'project.customer-complaint-management.features.4.title': { en: 'Audit Trail & Security', id: 'Audit Trail & Keamanan' },
  'project.customer-complaint-management.features.4.desc': {
    en: 'Automatic logging of every status change and user action to ensure data integrity and ease of traceability during audits.',
    id: 'Pencatatan otomatis setiap perubahan status dan aksi pengguna guna menjamin integritas data dan kemudahan penelusuran saat audit.'
  },
  'project.customer-complaint-management.features.5.title': { en: 'Document Management System', id: 'Sistem Manajemen Dokumen' },
  'project.customer-complaint-management.features.5.desc': {
    en: 'Easily upload supporting documents and link complaints with invoice data automatically through the import feature.',
    id: 'Kemudahan mengunggah dokumen pendukung dan menghubungkan pengaduan dengan data faktur (invoice) secara otomatis melalui fitur impor.'
  },
  'project.customer-complaint-management.resultDesc': {
    en: 'Implementation of this system had a significant impact on the company\'s operations.',
    id: 'Implementasi sistem ini memberikan dampak signifikan terhadap operasional perusahaan.'
  },
  'project.customer-complaint-management.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Efficiency</strong>: Reduced report generation and inter-department coordination time by more than 60% through system automation.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Accuracy & Transparency</strong>: Eliminated the risk of lost complaint data and provided management with full visibility into customer service performance.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">ISO Audit Readiness</strong>: Ensured the company is always prepared for audits with standardized, organized, and easily accessible documentation.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">SLA Improvement</strong>: Accelerated complaint resolution time thanks to clear assignment workflows and integrated reminder systems.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Efisiensi Operasional</strong>: Memangkas waktu pembuatan laporan dan koordinasi antar departemen hingga lebih dari 60% melalui otomasi sistem.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Akurasi & Transparansi</strong>: Menghilangkan risiko hilangnya data pengaduan dan memberikan visibilitas penuh kepada manajemen terhadap kinerja layanan pelanggan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kesiapan Audit ISO</strong>: Memastikan perusahaan selalu siap menghadapi audit dengan dokumentasi yang terstandarisasi, rapi, dan mudah diakses kapan saja.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Peningkatan SLA</strong>: Mempercepat waktu penyelesaian keluhan pelanggan berkat alur penugasan yang jelas dan sistem pengingat yang terintegrasi.</span></li></ul>'
  },
  'project.customer-complaint-management.techStack.0': { en: 'Backend', id: 'Backend' },
  'project.customer-complaint-management.techStack.1': { en: 'Frontend', id: 'Frontend' },
  'project.customer-complaint-management.techStack.2': { en: 'Database', id: 'Database' },
  'project.customer-complaint-management.techStack.3': { en: 'Styling', id: 'Styling' },
  'project.customer-complaint-management.techStack.4': { en: 'Tools', id: 'Tools' },

  // SOA Management System
  'project.soa-management-system.shortDesc': {
    en: 'Digitalization of Receivables Management for Cash Flow Acceleration and Finance Team Efficiency.',
    id: 'Digitalisasi Pengelolaan Piutang untuk Akselerasi Arus Kas dan Efisiensi Tim Finance.'
  },
  'project.soa-management-system.challengeDesc': {
    en: 'Before this system was implemented, the Finance & Accounting team in a manufacturing company faced operational hurdles impacting productivity:',
    id: 'Sebelum sistem ini diimplementasikan, tim Finance & Accounting pada perusahaan manufaktur menghadapi hambatan operasional yang berdampak pada produktivitas:'
  },
  'project.soa-management-system.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Inefficient Manual Process</strong>: Monthly receivables data processing consumed a lot of time as it was done manually, from data entry to distribution to customers.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Low Data Visibility</strong>: Management struggled to monitor receivables positions in real-time, perform aging analysis, or identify top customers with the largest receivables.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Fragmented Data</strong>: Customer contact information and special notes (memos) were scattered across separate Excel files, complicating coordination and data retrieval.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Proses Manual yang Tidak Efisien</strong>: Pengolahan data piutang bulanan memakan banyak waktu karena dilakukan secara manual, mulai dari input data hingga distribusi ke pelanggan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Visibilitas Data Rendah</strong>: Manajemen kesulitan memantau posisi piutang secara real-time, analisis penuaan piutang (aging analysis), maupun peringkat pelanggan dengan piutang terbesar.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Terfragmentasi</strong>: Informasi kontak pelanggan dan catatan khusus (memo) tersebar di berbagai file Excel yang terpisah, sehingga menyulitkan koordinasi dan penelusuran data.</span></li></ul>'
  },
  'project.soa-management-system.solution': {
    en: 'I built a centralized web application serving as a Single Source of Truth for all receivables data. This solution integrates automated data import with interactive analytics dashboards. Using a Modern Monolith approach (Laravel + React), the system offers fast performance, high security, and ease of use for operational teams in managing the entire Accounts Receivable (AR) cycle from start to finish.',
    id: 'Saya membangun aplikasi web terpusat yang berfungsi sebagai Single Source of Truth untuk seluruh data piutang. Solusi ini mengintegrasikan otomasi impor data dengan dasbor analitik interaktif. Dengan pendekatan Modern Monolith (Laravel + React), sistem ini menawarkan performa yang cepat, keamanan tingkat tinggi, dan kemudahan penggunaan bagi tim operasional dalam mengelola siklus Accounts Receivable (AR) dari awal hingga akhir.'
  },
  'project.soa-management-system.features.0.title': { en: 'Automated Excel Import', id: 'Otomasi Impor Excel' },
  'project.soa-management-system.features.0.desc': {
    en: 'Drag-and-drop feature capable of processing and validating dozens of data columns automatically, reducing work time from hours to seconds.',
    id: 'Fitur drag-and-drop yang mampu memproses dan memvalidasi puluhan kolom data secara otomatis, memangkas waktu kerja dari hitungan jam menjadi hitungan detik.'
  },
  'project.soa-management-system.features.1.title': { en: 'Real-Time Analytics Dashboard', id: 'Dasbor Analitik Real-Time' },
  'project.soa-management-system.features.1.desc': {
    en: 'Data visualization including total receivables, monthly trends, and top 10 customer rankings to support strategic decision-making.',
    id: 'Visualisasi data yang mencakup total piutang, tren bulanan, hingga peringkat 10 pelanggan teratas untuk mendukung pengambilan keputusan strategis.'
  },
  'project.soa-management-system.features.2.title': { en: 'Aging Analysis', id: 'Analisis Penuaan Piutang (Aging)' },
  'project.soa-management-system.features.2.desc': {
    en: 'Automatic monitoring of receivables age categories (0 to >270 days) to identify late payment risks early.',
    id: 'Pemantauan otomatis kategori umur piutang (0 hingga >270 hari) guna mengidentifikasi risiko keterlambatan pembayaran lebih dini.'
  },
  'project.soa-management-system.features.3.title': { en: 'Centralized Data Management', id: 'Manajemen Data Terpusat' },
  'project.soa-management-system.features.3.desc': {
    en: 'Comprehensive customer database, including contact information and special memo history for each transaction.',
    id: 'Basis data pelanggan yang komprehensif, mencakup informasi kontak hingga riwayat memo khusus untuk setiap transaksi.'
  },
  'project.soa-management-system.features.4.title': { en: 'OTP Security & Tiered Access', id: 'Keamanan OTP & Akses Berjenjang' },
  'project.soa-management-system.features.4.desc': {
    en: 'Secure authentication via email OTP codes and Role-Based Access Control to protect the confidentiality of financial company data.',
    id: 'Autentikasi aman melalui kode OTP email dan pembatasan hak akses (Role-Based Access) guna melindungi kerahasiaan data finansial perusahaan.'
  },
  'project.soa-management-system.resultDesc': {
    en: 'This system brought real transformation to the Finance department in managing receivables.',
    id: 'Sistem ini membawa transformasi nyata bagi departemen Finance dalam mengelola piutang.'
  },
  'project.soa-management-system.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Efficiency</strong>: Automation of the monthly process significantly reduced the Finance team\'s administrative time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Accuracy</strong>: Eliminated the risk of human error in data entry through automatic validation during the import process.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Financial Transparency</strong>: Management has instant access to the company\'s receivables health, accelerating collection follow-up and optimizing cash flow.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Readiness</strong>: All data is stored in a structured and well-documented manner, facilitating both internal and external audit processes.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Efisiensi Operasional</strong>: Otomasi proses bulanan berhasil memangkas waktu administratif tim Finance secara signifikan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Akurasi Data</strong>: Menghilangkan risiko human error dalam input data melalui sistem validasi otomatis saat proses impor.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Transparansi Keuangan</strong>: Manajemen memiliki akses instan terhadap kesehatan piutang perusahaan, mempercepat tindak lanjut penagihan, dan mengoptimalkan arus kas (cash flow).</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kesiapan Audit</strong>: Semua data tersimpan secara terstruktur dan terdokumentasi dengan baik, memudahkan proses audit internal maupun eksternal.</span></li></ul>'
  },
  'project.soa-management-system.techStack.0': { en: 'Backend', id: 'Backend' },
  'project.soa-management-system.techStack.1': { en: 'Frontend', id: 'Frontend' },
  'project.soa-management-system.techStack.2': { en: 'Database', id: 'Database' },
  'project.soa-management-system.techStack.3': { en: 'Styling', id: 'Styling' },
  'project.soa-management-system.techStack.4': { en: 'Visualization', id: 'Visualization' },
  'project.soa-management-system.techStack.5': { en: 'Tools', id: 'Tools' },

  // Stock Opname Enterprise
  'project.stock-opname-enterprise.shortDesc': {
    en: 'Integrated Inventory Digitalization for Real-Time Stock Accuracy and Audit Compliance.',
    id: 'Digitalisasi Inventaris Terpadu untuk Akurasi Stok Real-Time dan Kepatuhan Audit.'
  },
  'project.stock-opname-enterprise.challengeDesc': {
    en: 'As an industrial chemical distribution company, Behn Meyer Chemicals faced critical obstacles in manual inventory management that impacted operational efficiency:',
    id: 'Sebagai perusahaan distribusi bahan kimia industrial, Behn Meyer Chemicals menghadapi hambatan kritis dalam manajemen inventaris manual yang berdampak pada efisiensi operasional:'
  },
  'project.stock-opname-enterprise.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Fragmentation & Manual Process</strong>: Stock data was scattered across various systems without a single source of truth, causing stocktaking to take a long time (5-7 days) with complex cross-department coordination.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Human Error Risk & Low Visibility</strong>: Manual recording triggered high input error rates (up to 5%), while management had no real-time access to monitor field progress.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Challenges</strong>: Unstructured data change records complicated internal audit processes and report generation that took up to 3 working days.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Fragmentasi Data & Proses Manual</strong>: Data stok tersebar di berbagai sistem tanpa sumber tunggal (single source of truth), menyebabkan proses pencocokan stok (stocktaking) memakan waktu lama (5-7 hari) dan melibatkan koordinasi lintas departemen yang rumit.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Risiko Human Error & Visibilitas Rendah</strong>: Pencatatan manual memicu tingginya tingkat kesalahan input (mencapai 5%), sementara manajemen tidak memiliki akses real-time untuk memantau progres lapangan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kendala Audit</strong>: Pencatatan perubahan data tidak terstruktur, sehingga menyulitkan proses audit internal dan pembuatan laporan yang memakan waktu hingga 3 hari kerja.</span></li></ul>'
  },
  'project.stock-opname-enterprise.solution': {
    en: 'I developed an enterprise-level inventory system that automates the entire stock opname workflow. This solution integrates data from various sources (WMS and Non-WMS) into a single centralized platform. With a User-Centric approach, the system is designed to simplify coordination between managers, supervisors, and field staff through standardized, transparent, and secure workflows.',
    id: 'Saya mengembangkan sistem inventaris tingkat enterprise yang mengotomatiskan seluruh alur kerja stock opname. Solusi ini mengintegrasikan data dari berbagai sumber (WMS dan Non-WMS) ke dalam satu platform terpusat. Dengan pendekatan User-Centric, sistem ini dirancang untuk mempermudah koordinasi antara manajer, supervisor, dan staf lapangan melalui alur kerja yang terstandarisasi, transparan, dan aman.'
  },
  'project.stock-opname-enterprise.features.0.title': { en: 'Intelligent Data Import', id: 'Intelligent Data Import' },
  'project.stock-opname-enterprise.features.0.desc': {
    en: 'Eliminates manual data entry with a document upload system (Excel/CSV) featuring automatic validation to maintain data quality.',
    id: 'Mengeliminasi input manual dengan sistem unggah dokumen (Excel/CSV) yang dilengkapi validasi otomatis untuk menjaga kualitas data.'
  },
  'project.stock-opname-enterprise.features.1.title': { en: 'Automated Workflow & Task Assignment', id: 'Automated Workflow & Task Assignment' },
  'project.stock-opname-enterprise.features.1.desc': {
    en: 'Structured task assignment system allowing supervisors to distribute tasks based on specific areas or item groups.',
    id: 'Sistem penugasan terstruktur yang memungkinkan supervisor membagi tugas berdasarkan area atau grup barang secara spesifik.'
  },
  'project.stock-opname-enterprise.features.2.title': { en: 'Real-Time Monitoring Dashboard', id: 'Real-time Monitoring Dashboard' },
  'project.stock-opname-enterprise.features.2.desc': {
    en: 'Interactive dashboard providing instant visibility for management to monitor physical progress and task completion status in the field.',
    id: 'Dasbor interaktif yang memberikan visibilitas instan bagi manajemen untuk memantau progres fisik dan status pengerjaan di lapangan.'
  },
  'project.stock-opname-enterprise.features.3.title': { en: 'Verification Module (Mobile Friendly)', id: 'Verification Module (Mobile Friendly)' },
  'project.stock-opname-enterprise.features.3.desc': {
    en: 'Special interface for field workers supporting direct stock count validation to minimize discrepancies.',
    id: 'Antarmuka khusus untuk pelaksana di lapangan yang mendukung validasi perhitungan stok secara langsung guna meminimalkan selisih (discrepancy).'
  },
  'project.stock-opname-enterprise.features.4.title': { en: 'Enterprise Standard Reporting', id: 'Enterprise Standard Reporting' },
  'project.stock-opname-enterprise.features.4.desc': {
    en: 'Automatic report export feature (Form A & B) matching standard company formats and ready for external audit needs.',
    id: 'Fitur ekspor laporan otomatis (Form A & B) yang sesuai dengan format standar perusahaan dan siap digunakan untuk kebutuhan audit eksternal.'
  },
  'project.stock-opname-enterprise.features.5.title': { en: 'Role-Based Access Control (RBAC)', id: 'Role-Based Access Control (RBAC)' },
  'project.stock-opname-enterprise.features.5.desc': {
    en: 'Layered security system ensuring each user only has access according to their job function, maintaining company data integrity.',
    id: 'Sistem keamanan berlapis yang memastikan setiap pengguna hanya memiliki akses sesuai fungsi jabatannya, menjaga integritas data perusahaan.'
  },
  'project.stock-opname-enterprise.resultDesc': {
    en: 'Implementation of this system had a significant impact on the company\'s business performance:',
    id: 'Implementasi sistem ini memberikan dampak signifikan terhadap performa bisnis perusahaan:'
  },
  'project.stock-opname-enterprise.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Acceleration</strong>: Stock opname process time reduced by 60% (from 7 days to just 2-3 days).</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Reporting Efficiency</strong>: Report generation that previously took 3 days is now available in Real-Time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Maximum Data Accuracy</strong>: Improved stock data accuracy to 99.5% and reduced error rate by up to 90%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Readiness</strong>: Meets internal audit compliance standards through comprehensive and structured audit trail records.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Akselerasi Operasional</strong>: Waktu proses stock opname berkurang 60% (dari 7 hari menjadi hanya 2-3 hari).</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Efisiensi Pelaporan</strong>: Pembuatan laporan yang sebelumnya memakan waktu 3 hari kini tersedia secara Real-Time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Akurasi Data Maksimal</strong>: Meningkatkan akurasi data stok hingga 99.5% dan menekan angka kesalahan (error rate) hingga 90%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kesiapan Audit</strong>: Memenuhi standar kepatuhan audit internal melalui catatan aktivitas (audit trail) yang komprehensif dan terstruktur.</span></li></ul>'
  },
  'project.stock-opname-enterprise.techStack.0': { en: 'Backend', id: 'Backend' },
  'project.stock-opname-enterprise.techStack.1': { en: 'Frontend', id: 'Frontend' },
  'project.stock-opname-enterprise.techStack.2': { en: 'Styling', id: 'Styling' },
  'project.stock-opname-enterprise.techStack.3': { en: 'Database', id: 'Database' },
  'project.stock-opname-enterprise.techStack.4': { en: 'Infrastructure', id: 'Infrastructure' },

  // Shipment Status Tracking
  'project.shipment-status-tracking-system.shortDesc': {
    en: 'Shipment status tracking system with complete audit trail, digital document management, and structured approval workflow for the procurement-to-shipment process.',
    id: 'Sistem pelacakan status pengiriman dengan audit trail lengkap, manajemen dokumen digital, dan workflow approval terstruktur untuk procurement-to-shipment process.'
  },
  'project.shipment-status-tracking-system.challengeDesc': {
    en: 'Before the integrated tracking system was implemented, the procurement and logistics departments faced operational complexities that hindered efficiency and visibility of the shipping process:',
    id: 'Sebelum implementasi sistem pelacakan terpadu, departemen procurement dan logistics menghadapi kompleksitas operasional yang menghambat efisiensi dan visibilitas proses pengiriman:'
  },
  'project.shipment-status-tracking-system.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Unstandardized Manual Tracking</strong>: Shipment status was recorded in separate spreadsheets and emails, causing data inconsistencies without a clear audit trail.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Scattered Documents</strong>: Purchase orders, Bills of Lading, and customs documents were scattered across emails and local folders, making retrieval and version control difficult.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">No Cross-Department Visibility</strong>: Procurement, logistics, warehouse, and finance lacked unified visibility of shipment status from PR to goods receipt.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Manual Sequence Generation</strong>: PR and PO numbers were created manually, prone to duplication and input errors.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">No Role-Based Access Control</strong>: Sensitive procurement data could be accessed by unauthorized parties.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Manual Management Reporting</strong>: Report generation for management was time-consuming and not real-time.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tracking Manual yang Tidak Terstandarkan</strong>: Status pengiriman tercatat di spreadsheet terpisah dan email, menyebabkan inkonsistensi data dan tanpa audit trail yang jelas.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Dokumen Tersebar</strong>: File-file purchase order, Bill of Lading, dan dokumen customs tersebar di email dan folder lokal, sulit untuk retrievals dan version control.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tidak Ada Visibilitas Lintas Departemen</strong>: Procurement, logistics, warehouse, dan finance tidak memiliki visibility yang terpadu terhadap status shipment dari PR hingga penerimaan barang.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Manual Sequence Generation</strong>: Nomor PR dan PO dibuat manual, rentan terhadap duplikasi dan kesalahan input.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tidak Ada Role-Based Access Control</strong>: Data procurement sensitif bisa diakses oleh pihak yang tidak berwenang.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Reporting Manual untuk Management</strong>: Proses pembuatan laporan untuk manajemen memakan waktu dan tidak real-time.</span></li></ul>'
  },
  'project.shipment-status-tracking-system.solution': {
    en: 'I developed an integrated shipment status tracking system that manages the entire procurement-to-shipment lifecycle in one centralized platform. This system provides a structured approval workflow with 8 status lifecycle stages (Draft to Completed), complete with an audit trail for every data change. The hierarchical document management feature ensures all attachments (PR, PO, BOL, customs docs, invoice, GRN) are stored in an organized manner with unique naming conventions and traceability. A real-time commenting system facilitates inter-department communication with full logging, while dynamic item management supports purchase orders with import duty and handling cost calculations.',
    id: 'Saya mengembangkan sistem pelacakan status pengiriman terpadu yang mengelola seluruh lifecycle procurement-to-shipment dalam satu platform terpusat. Sistem ini menyediakan workflow approval terstruktur dengan 8 status lifecycle (Draft → PO Issued → PIB Filed → In Transit → Arrived → In Warehouse → Invoice Received → Completed), lengkap dengan audit trail untuk setiap perubahan data. Fitur manajemen dokumen dengan hierarchical folders memastikan semua attachment (PR, PO, BOL, customs docs, invoice, GRN) tersimpan secara terorganisir dengan naming convention unik dan traceability. Real-time commenting system memfasilitasi komunikasi antar departemen dengan full logging, sementara dynamic item management mendukung purchase orders dengan Bea Masuk dan handling costs calculation.'
  },
  'project.shipment-status-tracking-system.features.0.title': { en: 'Shipment Lifecycle Management', id: 'Shipment Lifecycle Management' },
  'project.shipment-status-tracking-system.features.0.desc': {
    en: 'Track shipment status through 8 stages with complete metadata (PR Number, PO, PIB, ETD/ETA, BOL, GRN, invoice) and approval timestamps for every transition.',
    id: 'Tracking status pengiriman melalui 8 tahapan dengan metadata lengkap (PR Number, PO, PIB, ETD/ETA, BOL, GRN, invoice) dan approval timestamps untuk setiap transisi.'
  },
  'project.shipment-status-tracking-system.features.1.title': { en: 'Hierarchical File Management', id: 'Hierarchical File Management' },
  'project.shipment-status-tracking-system.features.1.desc': {
    en: 'Structured attachment management with custom folders, support for multiple uploads, rename, delete with transaction rollback, and unique naming conventions for traceability.',
    id: 'Manajemen attachment terstruktur dengan custom folders, support multiple upload, rename, delete dengan transaction rollback, dan naming convention unik untuk traceability.'
  },
  'project.shipment-status-tracking-system.features.2.title': { en: 'Real-Time Commenting System', id: 'Real-time Commenting System' },
  'project.shipment-status-tracking-system.features.2.desc': {
    en: 'Threaded comments with attachment support for every shipment record. Each comment is logged with user info, timestamp, and attachments for audit purposes.',
    id: 'Threaded comments dengan attachment support untuk setiap shipment record. Setiap comment ter-log dengan user info, timestamp, dan attachments untuk audit purposes.'
  },
  'project.shipment-status-tracking-system.features.3.title': { en: 'Material & Item Management', id: 'Material & Item Management' },
  'project.shipment-status-tracking-system.features.3.desc': {
    en: 'Dynamic item line creation for purchase orders with material master data support. Each item can be edited for quantity, price, import duty, and handling costs.',
    id: 'Dynamic item line creation untuk purchase orders dengan support material master data. Setiap item bisa di-edit untuk quantity, price, Bea Masuk, handling costs.'
  },
  'project.shipment-status-tracking-system.features.4.title': { en: 'Bulk Import & Data Migration', id: 'Bulk Import & Data Migration' },
  'project.shipment-status-tracking-system.features.4.desc': {
    en: 'Import purchase data in bulk from Excel templates with validation and error reporting. The import process records the file source and timestamp for audit trail.',
    id: 'Import purchase data dalam bulk dari Excel template dengan validasi dan error reporting. Import process mencatat file source dan timestamp untuk audit trail.'
  },
  'project.shipment-status-tracking-system.features.5.title': { en: 'Role-Based Access Control', id: 'Role-Based Access Control' },
  'project.shipment-status-tracking-system.features.5.desc': {
    en: 'Structured permission system for 6 roles (Procurement, Logistics, Warehouse, Finance, Management, Admin) with Laravel Sanctum authentication.',
    id: 'Sistem permission terstruktur untuk 6 role (Procurement, Logistics, Warehouse, Finance, Management, Admin) dengan Laravel Sanctum authentication.'
  },
  'project.shipment-status-tracking-system.features.6.title': { en: 'Comprehensive Audit Trail', id: 'Comprehensive Audit Trail' },
  'project.shipment-status-tracking-system.features.6.desc': {
    en: 'Complete recording of every data change: created_by, updated_by, timestamps, and field-by-field changes for compliance and audit purposes.',
    id: 'Pencatatan lengkap setiap perubahan data: created_by, updated_by, timestamps, dan perubahan field-by-field untuk kepatuhan compliance dan audit purposes.'
  },
  'project.shipment-status-tracking-system.features.7.title': { en: 'Dashboard & Reporting', id: 'Dashboard & Reporting' },
  'project.shipment-status-tracking-system.features.7.desc': {
    en: 'Real-time dashboard with analytics for shipment status distribution, throughput metrics, and PDF/Excel report export for management decision-making.',
    id: 'Dashboard real-time dengan analytics untuk shipment status distribution, throughput metrics, dan laporan ekspor ke PDF/Excel untuk management decision-making.'
  },
  'project.shipment-status-tracking-system.resultDesc': {
    en: 'Implementation of the Shipment Status Tracking system brought significant transformation to the organization\'s procurement and logistics operations:',
    id: 'Implementasi sistem Shipment Status Tracking memberikan transformasi signifikan pada operasional procurement dan logistics organisasi:'
  },
  'project.shipment-status-tracking-system.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Shipment Cycle Time</strong>: Reduced shipment status tracing from thousands of spreadsheets to real-time visibility, decreasing inter-department coordination time by up to 70%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Full Transparency</strong>: Every department has visibility into shipment status according to their access rights, from PR creation to goods receipt, with a complete audit trail.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Compliance & Auditability</strong>: Produced audit-ready documentation with full traceability for every data change, meeting company compliance requirements.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Centralized Document Management</strong>: All documents (PO, BOL, customs docs, invoice, GRN) are stored in a hierarchical folder system with a single source of truth.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Communication Efficiency</strong>: Inter-department communication integrated into a commenting system with attachments, replacing fragmented email threads.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Reduced Data Entry Errors</strong>: Eliminated manual data entry with automatic sequence generation for PR/PO numbers and structured input validation.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Waktu Siklus Pengiriman</strong>: Mengurangi waktu tracing status shipment dari ribuan spreadsheet menjadi real-time visibility, mengurangi waktu koordinasi antar departemen hingga 70%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Transparansi Penuh</strong>: Setiap departemen memiliki visibilitas terhadap status shipment sesuai hak aksesnya, dari PR creation hingga goods receipt, dengan audit trail lengkap.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kepatuhan & Auditability</strong>: Menghasilkan dokumentasi audit-ready dengan traceability penuh untuk setiap perubahan data, memenuhi syarat compliance perusahaan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Manajemen Dokumen Terpusat</strong>: Semua dokumen (PO, BOL, customs docs, invoice, GRN) tersimpan dalam hierarchical folder system dengan single source of truth.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Efisiensi Communication</strong>: Komunikasi antar departemen terintegrasi dalam commenting system dengan attachments, menggantikan email threads yang terfragmentasi.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Reduced Data Entry Errors</strong>: Eliminasi manual data entry dengan sequence generation otomatis untuk PR/PO numbers dan validasi input terstruktur.</span></li></ul>'
  },
  'project.shipment-status-tracking-system.techStack.0': { en: 'Backend Framework', id: 'Backend Framework' },
  'project.shipment-status-tracking-system.techStack.1': { en: 'Frontend Framework', id: 'Frontend Framework' },
  'project.shipment-status-tracking-system.techStack.2': { en: 'UI Components', id: 'UI Components' },
  'project.shipment-status-tracking-system.techStack.3': { en: 'Database', id: 'Database' },
  'project.shipment-status-tracking-system.techStack.4': { en: 'Authentication', id: 'Authentication' },
  'project.shipment-status-tracking-system.techStack.5': { en: 'Excel Processing', id: 'Excel Processing' },
  'project.shipment-status-tracking-system.techStack.6': { en: 'Build Tools', id: 'Build Tools' },
  'project.shipment-status-tracking-system.techStack.7': { en: 'Deployment', id: 'Deployment' },

  // Cash Advance Management
  'project.bma-cash-advance-management.shortDesc': {
    en: 'A Laravel-based web application for managing cash advance requests with a standardized multi-level approval workflow.',
    id: 'Aplikasi web berbasis Laravel untuk mengelola proses permohonan uang muka (cash advance) dengan multi-level approval workflow yang terstandarisasi.'
  },
  'project.bma-cash-advance-management.challengeDesc': {
    en: 'Before digitalization, the finance department faced a manual and inefficient cash advance process:',
    id: 'Sebelum digitalisasi, departemen keuangan menghadapi proses cash advance yang manual dan tidak efisien:'
  },
  'project.bma-cash-advance-management.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Error-Prone Manual Process</strong>: Paper-based cash advance submissions led to document loss and calculation errors.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">No Real-Time Visibility</strong>: Employees and managers could not see request status in real time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Difficult History Tracking</strong>: No clear digital trail for auditing and compliance.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Unstandardized Process</strong>: Approval workflows varied depending on roles without a clear matrix.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Unintegrated Settlement</strong>: The settlement and reporting process was not connected to the initial request.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Proses Manual yang Rentan Error</strong>: Pengajuan uang muka berbasis kertas menyebabkan kehilangan dokumen dan kesalahan perhitungan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tidak Ada Visibilitas Real-Time</strong>: Karyawan dan manager tidak dapat melihat status permohonan secara langsung.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Sulit Melacak Riwayat</strong>: Tidak adanya jejak digital yang jelas untuk auditt dan compliance.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tidak Terstandarisasi</strong>: Alur approval berbeda-beda tergantung peran tanpa matrix yang jelas.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Settlement Tidak Terintegrasi</strong>: Proses settlement dan pelaporan tidak terhubung dengan permohonan awal.</span></li></ul>'
  },
  'project.bma-cash-advance-management.solution': {
    en: 'I developed BMA (Cash Advance Management System) as an end-to-end solution for managing the entire cash advance request cycle. This system implements a multi-level approval workflow configured based on an approval matrix and organizational hierarchy. With One-Time Password (OTP) authentication via email, real-time analytics dashboards based on ApexCharts, and an integrated settlement system, BMA provides full transparency, a complete audit trail, and digitalization of the process from request creation to final settlement.',
    id: 'Saya mengembangkan BMA (Cash Advance Management System) sebagai solusi end-to-end untuk mengelola seluruh siklus permohonan uang muka. Sistem ini mengimplementasikan multi-level approval workflow yang dikonfigurasi berdasarkan matrix approval dan hierarki organisasi. Dengan One-Time Password (OTP) authentication via email, dashboard analytics real-time berbasis ApexCharts, dan sistem settlement terintegrasi, BMA memberikan transparansi penuh, audit trail lengkap, serta digitalisasi proses dari pembuatan permohonan hingga settlement akhir.'
  },
  'project.bma-cash-advance-management.features.0.title': { en: 'One-Time Password (OTP) Authentication', id: 'One-Time Password (OTP) Authentication' },
  'project.bma-cash-advance-management.features.0.desc': {
    en: 'Email authentication with a 4-digit code to ensure access security. User sessions are managed with configurable duration.',
    id: 'Autentikasi via email dengan kode 4-digit untuk memastikan keamanan akses. Sesi pengguna dikelola dengan durasi yang dapat dikonfigurasi.'
  },
  'project.bma-cash-advance-management.features.1.title': { en: 'Real-Time Dashboard & Analytics', id: 'Real-time Dashboard & Analytics' },
  'project.bma-cash-advance-management.features.1.desc': {
    en: 'Interactive dashboard with ApexCharts visualizations: total requests, status progression, and usage categories (Purchase, Travel, Project).',
    id: 'Dashboard interaktif dengan visualisasi grafik ApexCharts: total permohonan, status progression, dan kategori penggunaan (Purchase, Travel, Project).'
  },
  'project.bma-cash-advance-management.features.2.title': { en: 'Application Management', id: 'Application Management' },
  'project.bma-cash-advance-management.features.2.desc': {
    en: 'Applicant features for creating, editing, and monitoring requests. Multiple item support with auto-calculate total amount. PDF document export.',
    id: 'Fitur applicant untuk membuat, mengedit, dan monitor permohonan. Multiple item support dengan auto-calculate total amount. Export PDF dokumen permohonan.'
  },
  'project.bma-cash-advance-management.features.3.title': { en: 'Admin Check & Verification', id: 'Admin Check & Verification' },
  'project.bma-cash-advance-management.features.3.desc': {
    en: 'Checker performs initial verification: data completeness, needs validation, and approver routing based on approval matrix. Actions: approve, reverse, reject with notes.',
    id: 'Checker melakukan verifikasi awal: kelengkapan data, validasi kebutuhan, dan routing approver berdasarkan matrix approval. Actions: approve, reverse, reject dengan notes.'
  },
  'project.bma-cash-advance-management.features.4.title': { en: 'Multi-Level Endorsement Workflow', id: 'Multi-Level Endorsement Workflow' },
  'project.bma-cash-advance-management.features.4.desc': {
    en: 'Tiered approval workflow based on approval matrix (Applicant → Checker → Approver L1/L2/L3 → Director → Finance). Each level can approve/reject with reasons.',
    id: 'Alur persetujuan bertingkat berdasarkan matrix approval (Applicant → Checker → Approver L1/L2/L3 → Director → Finance). Setiap level dapat approve/reject dengan alasan.'
  },
  'project.bma-cash-advance-management.features.5.title': { en: 'Settlement Processing', id: 'Settlement Processing' },
  'project.bma-cash-advance-management.features.5.desc': {
    en: 'Finance processes fund transfer and settlement. Input realized amount, upload supporting documents, and finalize. Settlement can be reversed if needed.',
    id: 'Finance memproses transfer dana dan settlement. Input realisasi amount, upload supporting documents, dan finalisasi. Settlement dapat direverse jika diperlukan.'
  },
  'project.bma-cash-advance-management.features.6.title': { en: 'Matrix Approval Configuration', id: 'Matrix Approval Configuration' },
  'project.bma-cash-advance-management.features.6.desc': {
    en: 'Admin can configure the approval matrix: approver mapping based on request value and organizational hierarchy. Flexibility for different nominal ranges.',
    id: 'Admin dapat mengkonfigurasi matrix approval: pemetaan approver berdasarkan nilai permohonan dan hierarki organisasi. Fleksibilitas untuk range nominal berbeda.'
  },
  'project.bma-cash-advance-management.features.7.title': { en: 'Excel Reporting & Export', id: 'Excel Reporting & Export' },
  'project.bma-cash-advance-management.features.7.desc': {
    en: 'Export request data reports to Excel based on date range. Includes full transaction details with current status for analysis and audit.',
    id: 'Export laporan data permohonan ke Excel berdasarkan rentang tanggal. Includes full transaction details dengan current status untuk analisis dan audit.'
  },
  'project.bma-cash-advance-management.resultDesc': {
    en: 'BMA implementation provided digital transformation for the cash advance process, improving efficiency, accuracy, and regulatory compliance:',
    id: 'Implementasi BMA memberikan transformasi digital bagi proses cash advance, meningkatkan efisiensi, akurasi, dan kepatuhan compliance perusahaan:'
  },
  'project.bma-cash-advance-management.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Efficiency</strong>: Cash advance process time from request to settlement reduced by more than 50% through digitalization and workflow automation.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Accuracy & Reduced Errors</strong>: Eliminated human error in manual calculations and recording through automatic validation and integrated calculator.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Transparency & Visibility</strong>: Employees can track request status in real-time, while managers gain visibility into the entire cash advance pipeline.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Trail & Compliance</strong>: Every action is logged with timestamp, user, and status changes, providing audit-ready documentation for both internal and external compliance.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Centralized Document Management</strong>: All documents (application form, settlement papers, receipts) are stored in one system with automatic backup and full traceability.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Scalable Approval Workflow</strong>: Flexible approval matrix allows adjustment of approval flows based on value, department, or organizational criteria without changing code.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Efisiensi Operasional</strong>: Waktu proses cash advance dari pengajuan hingga settlement berkurang lebih dari 50% melalui digitalisasi dan otomatisasi workflow.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Akurasi Data & Reduced Errors</strong>: Eliminasi human error dalam perhitungan dan pencatatan Manual melalui validasi otomatis dan calculator terintegrasi.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Transparansi & Visibility</strong>: Karyawan dapat tracking status permohonan secara real-time, sementara manager mendapatkan visibilitas terhadap seluruh pipeline cash advance.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Trail & Compliance</strong>: Setiap aksi ter-log dengan timestamp, user, dan perubahan status, memberikan dokumentasi audit-ready untuk compliance internal maupun eksternal.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Centralized Document Management</strong>: Semua dokumen (application form, settlement papers, receipts) tersimpan dalam satu sistem dengan backup otomatis dan traceability penuh.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Scalable Approval Workflow</strong>: Matrix approval yang fleksibel memungkinkan penyesuaian alur persetujuan berdasarkan nilai, department, atau kriteria organisasi tanpa mengubah kode.</span></li></ul>'
  },
  'project.bma-cash-advance-management.techStack.0': { en: 'Backend Framework', id: 'Backend Framework' },
  'project.bma-cash-advance-management.techStack.1': { en: 'Frontend Framework', id: 'Frontend Framework' },
  'project.bma-cash-advance-management.techStack.2': { en: 'UI Components', id: 'UI Components' },
  'project.bma-cash-advance-management.techStack.3': { en: 'Build Tool', id: 'Build Tool' },
  'project.bma-cash-advance-management.techStack.4': { en: 'Web Server', id: 'Web Server' },
  'project.bma-cash-advance-management.techStack.5': { en: 'Database', id: 'Database' },
  'project.bma-cash-advance-management.techStack.6': { en: 'Charts', id: 'Charts' },
  'project.bma-cash-advance-management.techStack.7': { en: 'PDF Generator', id: 'PDF Generator' },
  'project.bma-cash-advance-management.techStack.8': { en: 'Excel Export', id: 'Excel Export' },
  'project.bma-cash-advance-management.techStack.9': { en: 'Authentication', id: 'Authentication' },

  // ONCR
  'project.oncr-online-customer-registration.shortDesc': {
    en: 'Online customer registration system with email OTP verification, centralized management dashboard, and real-time tracking for the customer onboarding process.',
    id: 'Sistem registrasi pelanggan online dengan verifikasi OTP email, dashboard manajemen terpusat, dan tracking real-time untuk proses onboarding pelanggan.'
  },
  'project.oncr-online-customer-registration.challengeDesc': {
    en: 'Before digitalization, the sales department and CRC admin faced an inefficient manual registration process:',
    id: 'Sebelum digitalisasi, departemen sales dan admin CRC menghadapi proses registrasi manual yang tidak efisien:'
  },
  'project.oncr-online-customer-registration.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Ongoing Manual Process</strong>: Customer registration previously required manual data entry by admin, taking 15-20 minutes per customer.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Weak Identity Verification</strong>: No verification mechanism to ensure the registering customer was an authorized party.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tracking Difficulty</strong>: Difficulty tracking customer registration status in real-time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Fragmented Data</strong>: Customer data was stored in various places without clear integration.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Requirements</strong>: Management needed a clear audit trail for every registration.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Proses Manual Berlanjut</strong>: Registrasi pelanggan sebelumnya memerlukan input data manual oleh admin, memakan waktu 15-20 menit per pelanggan.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Verifikasi Identitas Lemah</strong>: Tidak ada mekanisme verifikasi bahwa customer yang mendaftar adalah pihak yang berhak.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Tracking Difficulty</strong>: Kesulitan melacak status registrasi pelanggan secara real-time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data Terfragmentasi</strong>: Data pelanggan tersimpan di berbagai tempat tanpa integrasi yang jelas.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Kebutuhan Audit</strong>: Manajemen memerlukan jejak audit yang jelas untuk setiap registrasi.</span></li></ul>'
  },
  'project.oncr-online-customer-registration.solution': {
    en: 'I developed ONCR as an end-to-end customer registration solution with automatic email OTP verification and centralized dashboard. This system integrates Laravel Livewire for real-time interaction, multi-step forms with validation, document upload, and comprehensive reporting. With Role-Based Access Control (RBAC) using Laravel Sanctum, ONCR provides high security, a complete audit trail, and full visibility of registration status from draft to approved.',
    id: 'Saya mengembangkan ONCR sebagai solusi registrasi pelanggan end-to-end dengan verifikasi OTP email otomatis dan dashboard terpusat. Sistem ini mengintegrasikan Laravel Livewire untuk real-time interaction, multi-step form dengan validation, document upload, dan comprehensive reporting. Dengan Role-Based Access Control (RBAC) menggunakan Laravel Sanctum, ONCR memberikan keamanan tinggi, audittrail lengkap, dan visibilitas penuh terhadap status registrasi dari draft hingga approved.'
  },
  'project.oncr-online-customer-registration.features.0.title': { en: 'OTP Email Authentication', id: 'OTP Email Authentication' },
  'project.oncr-online-customer-registration.features.0.desc': {
    en: 'Login system with 4-digit One-Time Password sent via email for identity verification. Session management with Laravel Sanctum for maximum security.',
    id: 'Sistem login dengan One-Time Password 4-digit dikirim via email untuk verifikasi identitas. Session management dengan Laravel Sanctun untuk keamanan maksimal.'
  },
  'project.oncr-online-customer-registration.features.1.title': { en: 'Multi-Step Registration Form', id: 'Multi-step Registration Form' },
  'project.oncr-online-customer-registration.features.1.desc': {
    en: 'Different registration forms for field salesmen and online registration. Step-by-step data collection with real-time validation using Livewire.',
    id: 'Formulir registrasi berbeda untuk salesman lapangan dan online registration. Step-by-step data collection dengan real-time validation menggunakan Livewire.'
  },
  'project.oncr-online-customer-registration.features.2.title': { en: 'Document Upload & Management', id: 'Document Upload & Management' },
  'project.oncr-online-customer-registration.features.2.desc': {
    en: 'Upload supporting documents (Company Registration, ID Card) with file type and size validation. Documents stored with unique naming conventions and traceable.',
    id: 'Upload dokumen pendukung (SK, Kartu Identitas) dengan validasi file type dan size. Dokumen disimpan dengan naming convention unik dan traceable.'
  },
  'project.oncr-online-customer-registration.features.3.title': { en: 'Plant & Branch Management', id: 'Plant & Branch Management' },
  'project.oncr-online-customer-registration.features.3.desc': {
    en: 'Searchable plant selection feature for determining destination location. Master data management for plants and branches with easy maintenance.',
    id: 'Fitur searchable plant selection untuk menentukan lokasi tujuan. Manajemen data master plant dan branch dengan easy maintenance.'
  },
  'project.oncr-online-customer-registration.features.4.title': { en: 'Real-Time Dashboards', id: 'Real-time Dashboards' },
  'project.oncr-online-customer-registration.features.4.desc': {
    en: 'Salesman dashboard (personal stats) and CRC admin dashboard (overview all registrations) with filters by status, date range, and plant. Live updates using Livewire.',
    id: 'Dashboard salesman (personal stats) dan admin CRC (overview all registrations) dengan filter by status, date range, dan plant. Live updates menggunakan Livewire.'
  },
  'project.oncr-online-customer-registration.features.5.title': { en: 'Status Tracking & Workflow', id: 'Status Tracking & Workflow' },
  'project.oncr-online-customer-registration.features.5.desc': {
    en: '6-level status workflow: Draft → Submitted → Verified → Approved → Rejected → Cancelled. Every transition is logged with user, timestamp, and remarks.',
    id: '6-level status workflow: Draft → Submitted → Verified → Approved → Rejected → Cancelled. Setiap transisi ter-log dengan user, timestamp, dan remarks.'
  },
  'project.oncr-online-customer-registration.features.6.title': { en: 'Comprehensive Reporting', id: 'Comprehensive Reporting' },
  'project.oncr-online-customer-registration.features.6.desc': {
    en: 'Customer report with multi-criteria filter (status, date, range, plant, salesman). Export to Excel using Maatwebsite Excel and chart visualization with Larapex Charts.',
    id: 'Customer report dengan multi-criteria filter (status, date, range, plant, salesman). Export to Excel menggunakan Maatwebsite Excel dan chart visualization dengan Larapex Charts.'
  },
  'project.oncr-online-customer-registration.features.7.title': { en: 'Master Data Management', id: 'Master Data Management' },
  'project.oncr-online-customer-registration.features.7.desc': {
    en: 'Management of master data: Plant, Branch, Employee (salesman), and User roles. Admin can add, edit, or deactivate master data as needed.',
    id: 'Pengelolaan data master: Plant, Branch, Employee (salesman), dan User roles. Admin dapat menambahkan, mengedit, atau menonaktifkan data master sesuai kebutuhan.'
  },
  'project.oncr-online-customer-registration.resultDesc': {
    en: 'ONCR implementation successfully transformed the customer registration process into a fully digital system, improving efficiency, security, and auditability:',
    id: 'Implementasi ONCR berhasil mentransformasi proses registrasi pelanggan menjadi fully digital, meningkatkan efisiensi, keamanan, dan auditability:'
  },
  'project.oncr-online-customer-registration.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Processing Time Reduced</strong>: Registration time per customer reduced from 15-20 minutes to less than 5 minutes (75% improvement) through digitalization.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Automated Identity Verification</strong>: Email OTP ensures only authorized parties can complete registration, reducing fraud risk.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Real-Time Visibility</strong>: Management can track all registrations in real-time with interactive dashboards, accelerating decision-making.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Complete Audit Trail</strong>: Every action (create, update, status change) is recorded with user, timestamp, and IP address for compliance and forensics.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Centralized Data</strong>: All customer, plant, branch, and salesman data is integrated into one database with relational integrity.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Scalable Reporting</strong>: Reports can be generated in seconds with multiple filters, replacing manual Excel compilation that previously took hours.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Waktu Processing Reduced</strong>: Waktu registrasi per pelanggan berkurang dari 15-20 menit menjadi kurang dari 5 menit (75% improvement) melalui digitalisasi.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Verifikasi Identitas Terotomatisasi</strong>: OTP email memastikan hanya pihak berhak yang dapat menyelesaikan registrasi, mengurangi fraud risk.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Real-time Visibility</strong>: Manajemen dapat tracking semua registrasi secara real-time dengan dashboard interaktif, mempercepat decision-making.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Trail Lengkap</strong>: Setiap aksi (create, update, status change) tercatat dengan user, timestamp, dan IP address untuk compliance dan forensics.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Centralized Data</strong>: Semua data pelanggan, plant, branch, dan salesman terintegrasi dalam satu database dengan relational integrity.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Scalable Reporting</strong>: Laporan can be generated in seconds with multiple filters, replacing manual Excel compilation yang sebelumnya memakan waktu berjam-jam.</span></li></ul>'
  },
  'project.oncr-online-customer-registration.techStack.0': { en: 'Backend Framework', id: 'Backend Framework' },
  'project.oncr-online-customer-registration.techStack.1': { en: 'Frontend Framework', id: 'Frontend Framework' },
  'project.oncr-online-customer-registration.techStack.2': { en: 'JavaScript', id: 'JavaScript' },
  'project.oncr-online-customer-registration.techStack.3': { en: 'CSS Framework', id: 'CSS Framework' },
  'project.oncr-online-customer-registration.techStack.4': { en: 'UI Components', id: 'UI Components' },
  'project.oncr-online-customer-registration.techStack.5': { en: 'Database', id: 'Database' },
  'project.oncr-online-customer-registration.techStack.6': { en: 'Cache', id: 'Cache' },
  'project.oncr-online-customer-registration.techStack.7': { en: 'Charts', id: 'Charts' },
  'project.oncr-online-customer-registration.techStack.8': { en: 'Excel Export', id: 'Excel Export' },
  'project.oncr-online-customer-registration.techStack.9': { en: 'Authentication', id: 'Authentication' },
  'project.oncr-online-customer-registration.techStack.10': { en: 'Icons', id: 'Icons' },
  'project.oncr-online-customer-registration.techStack.11': { en: 'Container', id: 'Container' },
  'project.oncr-online-customer-registration.techStack.12': { en: 'Build Tool', id: 'Build Tool' },

  // Sample Management
  'project.sample-management-system.shortDesc': {
    en: 'Product sample management system for PT Behn Meyer Chemicals with real-time tracking, OTP email authentication, and comprehensive analytics dashboard for Sample In/Out activities.',
    id: 'Sistem manajemen sampel produk untuk PT Behn Meyer Chemicals dengan real-time tracking, OTP email authentication, dan dashboard analitik komprehensif untuk aktivitas Sample In/Out.'
  },
  'project.sample-management-system.challengeDesc': {
    en: 'Before the integrated system was implemented, PT Behn Meyer Chemicals faced obstacles in managing product sample activities efficiently:',
    id: 'Sebelum implementasi sistem terpadu, PT Behn Meyer Chemicals menghadapi hambatan dalam mengelola aktivitas sampel produk secara efisien:'
  },
  'project.sample-management-system.challenge': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Real-Time Stock Management</strong>: Difficulty tracking product sample availability across various plants accurately and in real-time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Security Verification</strong>: No strong authentication mechanism to restrict access by unauthorized users.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Limited Data Analytics</strong>: No informative data visualization for monitoring and decision-making.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Unstructured Transaction Documentation</strong>: Sample In and Sample Out activities were not recorded completely and neatly.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Multi-Location Complexity</strong>: Handling sample operations across various regions and plants required an integrated system.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Manajemen Stok Real-time</strong>: Kesulitan melacak ketersediaan sampel produk di berbagai plant secara akurat dan real-time.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Verifikasi Keamanan</strong>: Tidak ada mekanisme autentikasi yang kuat untuk membatasi akses user yang tidak berwenang.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Analitik Data Terbatas</strong>: Tidak memiliki visualisasi data yang informatif untuk monitoring dan decision-making.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Dokumentasi Transaksi Tidak Terstruktur</strong>: Aktivitas Sample In dan Sample Out tidak tercatat dengan lengkap dan rapi.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Multi-Lokasi Complexity</strong>: Menangani operasi sampel di berbagai regional dan plant memerlifikasi sistem terintegrasi.</span></li></ul>'
  },
  'project.sample-management-system.solution': {
    en: 'I developed a Sample Management System based on CodeIgniter 3.x that provides an end-to-end solution for product sample management. This system implements OTP (One-Time Password) authentication via email for access security, real-time analytics dashboards with ApexCharts, and Sample In/Out transactions integrated with auto-stock updates. With multi-location support (regional, plant, vendor), centralized master data management, and PDF reporting, this system provides full transparency, stock accuracy, and traceability for every transaction.',
    id: 'Saya mengembangkan Sample Management System berbasis CodeIgniter 3.x yang menyediakan solusi end-to-end untuk pengelolaan sampel produk. Sistem ini mengimplementasikan OTP (One-Time Password) authentication via email untuk keamanan akses, dashboard analitik real-time dengan ApexCharts, dan transaksi Sample In/Out yang terintegrasi dengan auto-update stok. Dengan dukungan multi-lokasi (regional, plant, vendor), master data management terpusat, dan reporting dalam format PDF, sistem ini memberikan transparansi penuh, akurasi stok, dan traceability untuk setiap transaksi.'
  },
  'project.sample-management-system.features.0.title': { en: 'OTP Email Authentication', id: 'OTP Email Authentication' },
  'project.sample-management-system.features.0.desc': {
    en: 'Login system with 4-digit One-Time Password sent via email, valid for 10 minutes. Encryption of sensitive data with CodeIgniter encryption library.',
    id: 'Sistem login dengan One-Time Password 4-digit dikirim via email, berlaku 10 menit. Enkripsi data sensitif dengan CodeIgniter encryption library.'
  },
  'project.sample-management-system.features.1.title': { en: 'Comprehensive Dashboard Analytics', id: 'Comprehensive Dashboard Analytics' },
  'project.sample-management-system.features.1.desc': {
    en: 'Interactive dashboard displaying total regionals, vendors, product samples, stock availability, Sample In/Out counts, monthly trend graphs, top 10 vendors, and recent transactions table.',
    id: 'Dashboard interaktif menampilkan total regional, vendor, product sample, stock availability, Sample In/Out counts, monthly trend graphs, top 10 vendors, dan recent transactions table.'
  },
  'project.sample-management-system.features.2.title': { en: 'Sample In Transaction', id: 'Sample In Transaction' },
  'project.sample-management-system.features.2.desc': {
    en: 'Record sample receipts from vendors with details: Serial Number, AWB, PO Number, Courier, Plant, Receipt Date, Memo. Auto-update stock after transaction.',
    id: 'Pencatatan penerimaan sampel dari vendor dengan detail: Serial Number, AWB, PO Number, Courier, Plant, Tanggal Penerimaan, Memo. Auto-update stok setelah transaksi.'
  },
  'project.sample-management-system.features.3.title': { en: 'Sample Out Transaction', id: 'Sample Out Transaction' },
  'project.sample-management-system.features.3.desc': {
    en: 'Record sample shipments to customers or internal departments. System automatically reduces stock and records the complete transaction for audit trail.',
    id: 'Pencatatan pengiriman sampel ke pelanggan atau departemen internal. Sistem otomatis mengurangi stok dan mencatat transaksi lengkap untuk audit trail.'
  },
  'project.sample-management-system.features.4.title': { en: 'Master Data Management', id: 'Master Data Management' },
  'project.sample-management-system.features.4.desc': {
    en: 'Management of master data: msbranch (Regional/Branch), msvendor (Vendor/Courier), msplant (Plant/Location), msprodsample (Product Sample), msuom (Unit of Measure).',
    id: 'Pengelolaan data master: msbranch (Regional/Branch), msvendor (Vendor/Courier), msplant (Plant/Lokasi), msprodsample (Produk Sampel), msuom (Unit of Measure).'
  },
  'project.sample-management-system.features.5.title': { en: 'Real-Time Stock Tracking', id: 'Real-time Stock Tracking' },
  'project.sample-management-system.features.5.desc': {
    en: 'Track sample stock in real-time across various plants. Every Sample In/Out transaction automatically updates stock availability.',
    id: 'Pelacakan stok sampel secara real-time di berbagai plant. Setiap transaksi Sample In/Out secara otomatis mengupdate ketersediaan stok.'
  },
  'project.sample-management-system.features.6.title': { en: 'PDF Reporting & Export', id: 'PDF Reporting & Export' },
  'project.sample-management-system.features.6.desc': {
    en: 'Generate PDF reports for Sample In and Sample Out transactions based on date filters and other criteria. Reports ready for audit and documentation.',
    id: 'Generasi laporan PDF untuk transaksi Sample In dan Sample Out berdasarkan filter tanggal dan kriteria lainnya. Laporan siap untuk audit dan dokumentasi.'
  },
  'project.sample-management-system.features.7.title': { en: 'Multi-Location Support', id: 'Multi-Location Support' },
  'project.sample-management-system.features.7.desc': {
    en: 'System supports multi-regional and multi-plant operations. Users can filter and view data based on the locations they have access to.',
    id: 'Sistem mendukung operasi multi-regional dan multi-plant. User dapat filter dan view data berdasarkan lokasi mereka memiliki akses.'
  },
  'project.sample-management-system.resultDesc': {
    en: 'The Sample Management System provides a comprehensive solution for managing product sample activities with high security, real-time accuracy, and informative analytics:',
    id: 'Sample Management System memberikan solusi komprehensif untuk mengelola aktivitas sampel produk dengan keamanan tinggi, akurasi real-time, dan analitik yang informatif:'
  },
  'project.sample-management-system.result': {
    en: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Real-Time Stock Accuracy</strong>: Sample stock accuracy significantly improved with real-time tracking across all plants, reducing discrepancies by up to 90%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Enhanced Security</strong>: OTP authentication ensures only authorized personnel can access the system, reducing the risk of unauthorized access.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Efficiency</strong>: Transaction recording time reduced by 60% with the integrated system, replacing manual ledgers and spreadsheets.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data-Driven Decisions</strong>: Dashboard analytics provide instant insight for management, accelerating decision-making with clear visual data.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Compliance</strong>: Every transaction is fully recorded with timestamp, user, and details, meeting internal and external audit requirements.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Multi-Location Visibility</strong>: Management can monitor sample activities across all regions and plants from a single centralized dashboard.</span></li></ul>',
    id: '<ul class="list-none pl-0 mb-4"><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Real-time Stock Accuracy</strong>: Akurasi stok sampel meningkat significantly dengan tracking real-time di semua plant, mengurangi discrepancy hingga 90%.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Enhanced Security</strong>: OTP authentication memastikan hanya authorized personnel yang dapat mengakses sistem, mengurangi risiko akses tidak sah.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Operational Efficiency</strong>: Waktu pencatatan transaksi berkurang 60% dengan sistem terintegrasi, menggantikan manual ledger dan spreadsheet.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Data-driven Decisions</strong>: Dashboard analytics memberikan insight instant untuk management, mempercepat decision-making dengan visual data yang jelas.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Audit Compliance</strong>: Setiap transaksi tercatat lengkap dengan timestamp, user, dan details, memenuhi requirements auditinternal dan eksternal.</span></li><li class="flex items-start mb-4"><span class="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0">•</span><span class="text-slate-600 dark:text-slate-300"><strong class="text-slate-900 dark:text-white font-semibold">Multi-location Visibility</strong>: Management dapat monitor aktivitas sampel di seluruh regional dan plant dari satu dashboard terpusat.</span></li></ul>'
  },
  'project.sample-management-system.techStack.0': { en: 'Backend Framework', id: 'Backend Framework' },
  'project.sample-management-system.techStack.1': { en: 'PHP Version', id: 'PHP Version' },
  'project.sample-management-system.techStack.2': { en: 'Database', id: 'Database' },
  'project.sample-management-system.techStack.3': { en: 'Frontend Template', id: 'Frontend Template' },
  'project.sample-management-system.techStack.4': { en: 'Charts Library', id: 'Charts Library' },
  'project.sample-management-system.techStack.5': { en: 'Authentication', id: 'Authentication' },
  'project.sample-management-system.techStack.6': { en: 'Containerization', id: 'Containerization' },
  'project.sample-management-system.techStack.7': { en: 'Build Tools', id: 'Build Tools' },

  // ======= SHOWCASE PAGE =======
  'showcase.badge': { en: 'Portfolio', id: 'Portfolio' },
  'showcase.heading': {
    en: 'Showcase <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Projects</span>',
    id: 'Showcase <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Projects</span>'
  },
  'showcase.desc': {
    en: 'Explore ideas and creativity through my collection of hobby projects. This page showcases various technical experiments and creative solutions I built in my spare time.',
    id: 'Eksplorasi ide dan kreativitas melalui koleksi proyek hobi saya. Halaman ini menampilkan berbagai eksperimen teknis dan solusi kreatif yang saya bangun di waktu luang.'
  },
  'showcase.empty': { en: 'No projects found. Deploy your first project to Vercel!', id: 'No projects found. Deploy your first project to Vercel!' },
  'showcase.updated': { en: 'Updated', id: 'Diperbarui' },
  'showcase.ago': { en: 'ago', id: 'lalu' },

  // ======= PROJECT CARD =======
  'projectcard.loading': { en: 'Loading...', id: 'Memuat...' },
  'projectcard.open_website': { en: 'Open Website', id: 'Buka Website' },
  'projectcard.visit_live': { en: 'Visit Live', id: 'Kunjungi' },
  'projectcard.details': { en: 'Details', id: 'Detail' },
};

export function getTranslation(key: string, lang: Lang): string | undefined {
  return translations[key]?.[lang];
}
