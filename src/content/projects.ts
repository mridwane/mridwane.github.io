export default [
  {
    slug: "customer-complaint-management",
    title: "Customer Complaint Management System",
    shortDesc: "Transformasi Digital Penanganan Keluhan Pelanggan Berstandar ISO Melalui Kolaborasi Lintas Departemen.",
    thumbnail: "/images/projects/CC/thumbnail-CC.webp",
    screenshots: [
      "/images/projects/CC/CC 1.webp",
      "/images/projects/CC/CC 2.webp",
      "/images/projects/CC/CC 3.webp",
      "/images/projects/CC/CC 4.webp",
      "/images/projects/CC/CC 5.webp"
    ],
    tags: ["Laravel", "React", "MySQL", "ISO"],
    challenge: "- **Data Terfragmentasi**: Pengaduan dicatat secara manual dan tersebar di berbagai media, sehingga sulit untuk melacak status dan progres penyelesaian secara akurat.\n\n- **Kolaborasi Lintas Departemen yang Lemah**: Tidak adanya mekanisme formal untuk menugaskan investigasi antar departemen menyebabkan penanganan keluhan menjadi lambat dan tidak terkoordinasi.\n\n- **Risiko Kepatuhan (Compliance)**: Ketiadaan standar dokumentasi menghambat perusahaan dalam memenuhi persyaratan audit ISO, ditambah dengan proses pelaporan manual yang memakan waktu dan rentan kesalahan.",
    challengeDesc: "Sebelum sistem ini diimplementasikan, perusahaan menghadapi kendala operasional yang menghambat kualitas layanan pelanggan:",
    solution: "Saya mengembangkan aplikasi manajemen pengaduan berbasis web yang mengintegrasikan alur kerja (workflow) terstruktur dari tahap laporan masuk hingga penyelesaian akhir. Sistem ini dirancang untuk menciptakan transparansi penuh, di mana setiap departemen dapat berkolaborasi dalam satu platform terpusat. Dengan otomatisasi dokumen dan sistem pelacakan audit, solusi ini memastikan setiap keluhan pelanggan ditangani sesuai dengan standar mutu internasional.",
    features: [
      {
        title: "Workflow Terintegrasi",
        desc: "Mengelola siklus hidup pengaduan secara transparan, mulai dari draf, investigasi, hingga pemberian solusi dan penutupan kasus."
      },
      {
        title: "Kolaborasi Multi-Departemen",
        desc: "Fitur penugasan investigasi yang memungkinkan tim terkait untuk menginput akar masalah (root cause) serta tindakan korektif secara langsung."
      },
      {
        title: "Dashboard Analitik Real-Time",
        desc: "Visualisasi statistik keluhan, tren bulanan, dan distribusi beban kerja departemen untuk mendukung pengambilan keputusan manajemen."
      },
      {
        title: "Pelaporan Otomatis Standar ISO",
        desc: "Generator laporan instan ke format PDF dan Excel yang sudah disesuaikan dengan standar formulir audit ISO."
      },
      {
        title: "Audit Trail & Keamanan",
        desc: "Pencatatan otomatis setiap perubahan status dan aksi pengguna guna menjamin integritas data dan kemudahan penelusuran saat audit."
      },
      {
        title: "Sistem Manajemen Dokumen",
        desc: "Kemudahan mengunggah dokumen pendukung dan menghubungkan pengaduan dengan data faktur (invoice) secara otomatis melalui fitur impor."
      }
    ],
    techStack: {
      Backend: "Laravel 10 (PHP 8.1)",
      Frontend: "React 19 & Inertia.js (Modern UI/UX)",
      Database: "MySQL 8.0",
      Styling: "Tailwind CSS",
      Tools: "Docker, DomPDF, Maatwebsite Excel"
    },
    result: "- **Efisiensi Operasional**: Memangkas waktu pembuatan laporan dan koordinasi antar departemen hingga lebih dari 60% melalui otomasi sistem.\n\n- **Akurasi & Transparansi**: Menghilangkan risiko hilangnya data pengaduan dan memberikan visibilitas penuh kepada manajemen terhadap kinerja layanan pelanggan.\n\n- **Kesiapan Audit ISO**: Memastikan perusahaan selalu siap menghadapi audit dengan dokumentasi yang terstandarisasi, rapi, dan mudah diakses kapan saja.\n\n- **Peningkatan SLA**: Mempercepat waktu penyelesaian keluhan pelanggan berkat alur penugasan yang jelas dan sistem pengingat yang terintegrasi.",
    resultDesc: "Implementasi sistem ini memberikan dampak signifikan terhadap operasional perusahaan."
  },
  {
    slug: "soa-management-system",
    title: "SOA Management System",
    shortDesc: "Digitalisasi Pengelolaan Piutang untuk Akselerasi Arus Kas dan Efisiensi Tim Finance.",
    thumbnail: "/images/projects/SOA/thumbnail-SOA.webp",
    screenshots: [
      "/images/projects/SOA/SOA 1.webp",
      "/images/projects/SOA/SOA 2.webp",
      "/images/projects/SOA/SOA 3.webp",
      "/images/projects/SOA/SOA 4.webp",
      "/images/projects/SOA/SOA 5.webp",
      "/images/projects/SOA/thumbnail-SOA.webp"
    ],
    tags: ["Laravel", "React", "MySQL", "Finance"],
    challenge: "- **Proses Manual yang Tidak Efisien**: Pengolahan data piutang bulanan memakan banyak waktu karena dilakukan secara manual, mulai dari input data hingga distribusi ke pelanggan.\n\n- **Visibilitas Data Rendah**: Manajemen kesulitan memantau posisi piutang secara real-time, analisis penuaan piutang (aging analysis), maupun peringkat pelanggan dengan piutang terbesar.\n\n- **Data Terfragmentasi**: Informasi kontak pelanggan dan catatan khusus (memo) tersebar di berbagai file Excel yang terpisah, sehingga menyulitkan koordinasi dan penelusuran data.",
    challengeDesc: "Sebelum sistem ini diimplementasikan, tim Finance & Accounting pada perusahaan manufaktur menghadapi hambatan operasional yang berdampak pada produktivitas:",
    solution: "Saya membangun aplikasi web terpusat yang berfungsi sebagai Single Source of Truth untuk seluruh data piutang. Solusi ini mengintegrasikan otomasi impor data dengan dasbor analitik interaktif. Dengan pendekatan Modern Monolith (Laravel + React), sistem ini menawarkan performa yang cepat, keamanan tingkat tinggi, dan kemudahan penggunaan bagi tim operasional dalam mengelola siklus Accounts Receivable (AR) dari awal hingga akhir.",
    features: [
      {
        title: "Otomasi Impor Excel",
        desc: "Fitur drag-and-drop yang mampu memproses dan memvalidasi puluhan kolom data secara otomatis, memangkas waktu kerja dari hitungan jam menjadi hitungan detik."
      },
      {
        title: "Dasbor Analitik Real-Time",
        desc: "Visualisasi data yang mencakup total piutang, tren bulanan, hingga peringkat 10 pelanggan teratas untuk mendukung pengambilan keputusan strategis."
      },
      {
        title: "Analisis Penuaan Piutang (Aging)",
        desc: "Pemantauan otomatis kategori umur piutang (0 hingga >270 hari) guna mengidentifikasi risiko keterlambatan pembayaran lebih dini."
      },
      {
        title: "Manajemen Data Terpusat",
        desc: "Basis data pelanggan yang komprehensif, mencakup informasi kontak hingga riwayat memo khusus untuk setiap transaksi."
      },
      {
        title: "Keamanan OTP & Akses Berjenjang",
        desc: "Autentikasi aman melalui kode OTP email dan pembatasan hak akses (Role-Based Access) guna melindungi kerahasiaan data finansial perusahaan."
      }
    ],
    techStack: {
      Backend: "Laravel 10 (PHP 8.1)",
      Frontend: "React 19 & Inertia.js (Modern Monolith)",
      Database: "MySQL 8.0",
      Styling: "Tailwind CSS",
      Visualization: "Recharts",
      Tools: "Laravel Excel, Docker"
    },
    result: "- **Efisiensi Operasional**: Otomasi proses bulanan berhasil memangkas waktu administratif tim Finance secara signifikan.\n\n- **Akurasi Data**: Menghilangkan risiko human error dalam input data melalui sistem validasi otomatis saat proses impor.\n\n- **Transparansi Keuangan**: Manajemen memiliki akses instan terhadap kesehatan piutang perusahaan, mempercepat tindak lanjut penagihan, dan mengoptimalkan arus kas (cash flow).\n\n- **Kesiapan Audit**: Semua data tersimpan secara terstruktur dan terdokumentasi dengan baik, memudahkan proses audit internal maupun eksternal.",
    resultDesc: "Sistem ini membawa transformasi nyata bagi departemen Finance dalam mengelola piutang."
  },
  {
    slug: "stock-opname-enterprise",
    title: "Stock Opname Enterprise System",
    shortDesc: "Digitalisasi Inventaris Terpadu untuk Akurasi Stok Real-Time dan Kepatuhan Audit.",
    thumbnail: "/images/projects/SO/thumbnail-SO.webp",
    screenshots: [
      "/images/projects/SO/SO 1.webp",
      "/images/projects/SO/SO 2.webp",
      "/images/projects/SO/SO 3.webp",
      "/images/projects/SO/SO 4.webp",
      "/images/projects/SO/SO 5.webp"
    ],
    tags: ["Laravel", "React", "MySQL", "Enterprise"],
    challenge: "- **Fragmentasi Data & Proses Manual**: Data stok tersebar di berbagai sistem tanpa sumber tunggal (single source of truth), menyebabkan proses pencocokan stok (stocktaking) memakan waktu lama (5-7 hari) dan melibatkan koordinasi lintas departemen yang rumit.\n\n- **Risiko Human Error & Visibilitas Rendah**: Pencatatan manual memicu tingginya tingkat kesalahan input (mencapai 5%), sementara manajemen tidak memiliki akses real-time untuk memantau progres lapangan.\n\n- **Kendala Audit**: Pencatatan perubahan data tidak terstruktur, sehingga menyulitkan proses audit internal dan pembuatan laporan yang memakan waktu hingga 3 hari kerja.",
    challengeDesc: "Sebagai perusahaan distribusi bahan kimia industrial, Behn Meyer Chemicals menghadapi hambatan kritis dalam manajemen inventaris manual yang berdampak pada efisiensi operasional:",
    solution: "Saya mengembangkan sistem inventaris tingkat enterprise yang mengotomatiskan seluruh alur kerja stock opname. Solusi ini mengintegrasikan data dari berbagai sumber (WMS dan Non-WMS) ke dalam satu platform terpusat. Dengan pendekatan User-Centric, sistem ini dirancang untuk mempermudah koordinasi antara manajer, supervisor, dan staf lapangan melalui alur kerja yang terstandarisasi, transparan, dan aman.",
    features: [
      {
        title: "Intelligent Data Import",
        desc: "Mengeliminasi input manual dengan sistem unggah dokumen (Excel/CSV) yang dilengkapi validasi otomatis untuk menjaga kualitas data."
      },
      {
        title: "Automated Workflow & Task Assignment",
        desc: "Sistem penugasan terstruktur yang memungkinkan supervisor membagi tugas berdasarkan area atau grup barang secara spesifik."
      },
      {
        title: "Real-time Monitoring Dashboard",
        desc: "Dasbor interaktif yang memberikan visibilitas instan bagi manajemen untuk memantau progres fisik dan status pengerjaan di lapangan."
      },
      {
        title: "Verification Module (Mobile Friendly)",
        desc: "Antarmuka khusus untuk pelaksana di lapangan yang mendukung validasi perhitungan stok secara langsung guna meminimalkan selisih (discrepancy)."
      },
      {
        title: "Enterprise Standard Reporting",
        desc: "Fitur ekspor laporan otomatis (Form A & B) yang sesuai dengan format standar perusahaan dan siap digunakan untuk kebutuhan audit eksternal."
      },
      {
        title: "Role-Based Access Control (RBAC)",
        desc: "Sistem keamanan berlapis yang memastikan setiap pengguna hanya memiliki akses sesuai fungsi jabatannya, menjaga integritas data perusahaan."
      }
    ],
    techStack: {
      Backend: "Laravel 10 (PHP 8.1)",
      Frontend: "React 19 & Inertia.js",
      Styling: "Tailwind CSS v4 & Radix UI",
      Database: "MySQL 8.0",
      Infrastructure: "Docker"
    },
    result: "- **Akselerasi Operasional**: Waktu proses stock opname berkurang 60% (dari 7 hari menjadi hanya 2-3 hari).\n\n- **Efisiensi Pelaporan**: Pembuatan laporan yang sebelumnya memakan waktu 3 hari kini tersedia secara Real-Time.\n\n- **Akurasi Data Maksimal**: Meningkatkan akurasi data stok hingga 99.5% dan menekan angka kesalahan (error rate) hingga 90%.\n\n- **Kesiapan Audit**: Memenuhi standar kepatuhan audit internal melalui catatan aktivitas (audit trail) yang komprehensif dan terstruktur.",
    resultDesc: "Implementasi sistem ini memberikan dampak signifikan terhadap performa bisnis perusahaan:"
  },
  {
    slug: "shipment-status-tracking-system",
    title: "Shipment Status Tracking System",
    shortDesc: "Sistem pelacakan status pengiriman dengan audit trail lengkap, manajemen dokumen digital, dan workflow approval terstruktur untuk procurement-to-shipment process.",
    thumbnail: "/images/projects/SS/thumbnail-SS.webp",
    screenshots: [
      "/images/projects/SS/SS 1.webp",
      "/images/projects/SS/SS 2.webp",
      "/images/projects/SS/SS 3.webp",
      "/images/projects/SS/SS 4.webp",
      "/images/projects/SS/SS 5.webp"
    ],
    tags: ["Laravel", "React", "MySQL", "Inertia.js", "Radix UI"],
    challenge: "- **Tracking Manual yang Tidak Terstandarkan**: Status pengiriman tercatat di spreadsheet terpisah dan email, menyebabkan inkonsistensi data dan tanpa audit trail yang jelas.\n\n- **Dokumen Tersebar**: File-file purchase order, Bill of Lading, dan dokumen customs tersebar di email dan folder lokal, sulit untuk retrievals dan version control.\n\n- **Tidak Ada Visibilitas Lintas Departemen**: Procurement, logistics, warehouse, dan finance tidak memiliki visibility yang terpadu terhadap status shipment dari PR hingga penerimaan barang.\n\n- **Manual Sequence Generation**: Nomor PR dan PO dibuat manual, rentan terhadap duplikasi dan kesalahan input.\n\n- **Tidak Ada Role-Based Access Control**: Data procurement sensitif bisa diakses oleh pihak yang tidak berwenang.\n\n- **Reporting Manual untuk Management**: Proses pembuatan laporan untuk manajemen memakan waktu dan tidak real-time.",
    challengeDesc: "Sebelum implementasi sistem pelacakan terpadu, departemen procurement dan logistics menghadapi kompleksitas operasional yang menghambat efisiensi dan visibilitas proses pengiriman:",
    solution: "Saya mengembangkan sistem pelacakan status pengiriman terpadu yang mengelola seluruh lifecycle procurement-to-shipment dalam satu platform terpusat. Sistem ini menyediakan workflow approval terstruktur dengan 8 status lifecycle (Draft → PO Issued → PIB Filed → In Transit → Arrived → In Warehouse → Invoice Received → Completed), lengkap dengan audit trail untuk setiap perubahan data. Fitur manajemen dokumen dengan hierarchical folders memastikan semua attachment (PR, PO, BOL, customs docs, invoice, GRN) tersimpan secara terorganisir dengan naming convention unik dan traceability. Real-time commenting system memfasilitasi komunikasi antar departemen dengan full logging, sementara dynamic item management mendukung purchase orders dengan Bea Masuk dan handling costs calculation.",
    features: [
      {
        title: "Shipment Lifecycle Management",
        desc: "Tracking status pengiriman melalui 8 tahapan dengan metadata lengkap (PR Number, PO, PIB, ETD/ETA, BOL, GRN, invoice) dan approval timestamps untuk setiap transisi."
      },
      {
        title: "Hierarchical File Management",
        desc: "Manajemen attachment terstruktur dengan custom folders, support multiple upload, rename, delete dengan transaction rollback, dan naming convention unik untuk traceability."
      },
      {
        title: "Real-time Commenting System",
        desc: "Threaded comments dengan attachment support untuk setiap shipment record. Setiap comment ter-log dengan user info, timestamp, dan attachments untuk audit purposes."
      },
      {
        title: "Material & Item Management",
        desc: "Dynamic item line creation untuk purchase orders dengan support material master data. Setiap item bisa di-edit untuk quantity, price, Bea Masuk, handling costs."
      },
      {
        title: "Bulk Import & Data Migration",
        desc: "Import purchase data dalam bulk dari Excel template dengan validasi dan error reporting. Import process mencatat file source dan timestamp untuk audit trail."
      },
      {
        title: "Role-Based Access Control",
        desc: "Sistem permission terstruktur untuk 6 role (Procurement, Logistics, Warehouse, Finance, Management, Admin) dengan Laravel Sanctum authentication."
      },
      {
        title: "Comprehensive Audit Trail",
        desc: "Pencatatan lengkap setiap perubahan data: created_by, updated_by, timestamps, dan perubahan field-by-field untuk kepatuhan compliance dan audit purposes."
      },
      {
        title: "Dashboard & Reporting",
        desc: "Dashboard real-time dengan analytics untuk shipment status distribution, throughput metrics, dan laporan ekspor ke PDF/Excel untuk management decision-making."
      }
    ],
    techStack: {
      "Backend Framework": "Laravel 10.10 (PHP 8.1+)",
      "Frontend Framework": "React 19.1 + Inertia.js 2.0",
      "UI Components": "Radix UI + Tailwind CSS 4.1",
      Database: "MySQL 8.0 / MariaDB 10.4+",
      Authentication: "Laravel Sanctum 3.3",
      "Excel Processing": "Maatwebsite Excel 3.1",
      "Build Tools": "Vite 5.0",
      Deployment: "Docker Compose (nginx, php-fpm, mysql, redis)"
    },
    result: "- **Waktu Siklus Pengiriman**: Mengurangi waktu tracing status shipment dari ribuan spreadsheet menjadi real-time visibility, mengurangi waktu koordinasi antar departemen hingga 70%.\n\n- **Transparansi Penuh**: Setiap departemen memiliki visibilitas terhadap status shipment sesuai hak aksesnya, dari PR creation hingga goods receipt, dengan audit trail lengkap.\n\n- **Kepatuhan & Auditability**: Menghasilkan dokumentasi audit-ready dengan traceability penuh untuk setiap perubahan data, memenuhi syarat compliance perusahaan.\n\n- **Manajemen Dokumen Terpusat**: Semua dokumen (PO, BOL, customs docs, invoice, GRN) tersimpan dalam hierarchical folder system dengan single source of truth.\n\n- **Efisiensi Communication**: Komunikasi antar departemen terintegrasi dalam commenting system dengan attachments, menggantikan email threads yang terfragmentasi.\n\n- **Reduced Data Entry Errors**: Eliminasi manual data entry dengan sequence generation otomatis untuk PR/PO numbers dan validasi input terstruktur.",
    resultDesc: "Implementasi sistem Shipment Status Tracking memberikan transformasi signifikan pada operasional procurement dan logistics organisasi:"
  },
  {
    slug: "bma-cash-advance-management",
    title: "Cash Advance Management System",
    shortDesc: "Aplikasi web berbasis Laravel untuk mengelola proses permohonan uang muka (cash advance) dengan multi-level approval workflow yang terstandarisasi.",
    thumbnail: "/images/projects/CA/thumbnail-CA.webp",
    screenshots: [
      "/images/projects/CA/CA 1.webp",
      "/images/projects/CA/CA 2.webp",
      "/images/projects/CA/CA 3.webp",
      "/images/projects/CA/CA 4.webp",
      "/images/projects/CA/CA 5.webp"
    ],
    tags: ["Laravel", "Vue.js", "Inertia.js", "Tailwind CSS", "Flowbite", "MySQL", "Sanctum"],
    challenge: "- **Proses Manual yang Rentan Error**: Pengajuan uang muka berbasis kertas menyebabkan kehilangan dokumen dan kesalahan perhitungan.\n\n- **Tidak Ada Visibilitas Real-Time**: Karyawan dan manager tidak dapat melihat status permohonan secara langsung.\n\n- **Sulit Melacak Riwayat**: Tidak adanya jejak digital yang jelas untuk auditt dan compliance.\n\n- **Tidak Terstandarisasi**: Alur approval berbeda-beda tergantung peran tanpa matrix yang jelas.\n\n- **Settlement Tidak Terintegrasi**: Proses settlement dan pelaporan tidak terhubung dengan permohonan awal.",
    challengeDesc: "Sebelum digitalisasi, departemen keuangan menghadapi proses cash advance yang manual dan tidak efisien:",
    solution: "Saya mengembangkan BMA (Cash Advance Management System) sebagai solusi end-to-end untuk mengelola seluruh siklus permohonan uang muka. Sistem ini mengimplementasikan multi-level approval workflow yang dikonfigurasi berdasarkan matrix approval dan hierarki organisasi. Dengan One-Time Password (OTP) authentication via email, dashboard analytics real-time berbasis ApexCharts, dan sistem settlement terintegrasi, BMA memberikan transparansi penuh, audit trail lengkap, serta digitalisasi proses dari pembuatan permohonan hingga settlement akhir.",
    features: [
      {
        title: "One-Time Password (OTP) Authentication",
        desc: "Autentikasi via email dengan kode 4-digit untuk memastikan keamanan akses. Sesi pengguna dikelola dengan durasi yang dapat dikonfigurasi."
      },
      {
        title: "Real-time Dashboard & Analytics",
        desc: "Dashboard interaktif dengan visualisasi grafik ApexCharts: total permohonan, status progression, dan kategori penggunaan (Purchase, Travel, Project)."
      },
      {
        title: "Application Management",
        desc: "Fitur applicant untuk membuat, mengedit, dan monitor permohonan. Multiple item support dengan auto-calculate total amount. Export PDF dokumen permohonan."
      },
      {
        title: "Admin Check & Verification",
        desc: "Checker melakukan verifikasi awal: kelengkapan data, validasi kebutuhan, dan routing approver berdasarkan matrix approval. Actions: approve, reverse, reject dengan notes."
      },
      {
        title: "Multi-Level Endorsement Workflow",
        desc: "Alur persetujuan bertingkat berdasarkan matrix approval (Applicant → Checker → Approver L1/L2/L3 → Director → Finance). Setiap level dapat approve/reject dengan alasan."
      },
      {
        title: "Settlement Processing",
        desc: "Finance memproses transfer dana dan settlement. Input realisasi amount, upload supporting documents, dan finalisasi. Settlement dapat direverse jika diperlukan."
      },
      {
        title: "Matrix Approval Configuration",
        desc: "Admin dapat mengkonfigurasi matrix approval: pemetaan approver berdasarkan nilai permohonan dan hierarki organisasi. Fleksibilitas untuk range nominal berbeda."
      },
      {
        title: "Excel Reporting & Export",
        desc: "Export laporan data permohonan ke Excel berdasarkan rentang tanggal. Includes full transaction details dengan current status untuk analisis dan audit."
      }
    ],
    techStack: {
      "Backend Framework": "Laravel 10.x (PHP 8.1)",
      "Frontend Framework": "Vue.js 3.x + Inertia.js 0.6.x",
      "UI Components": "Flowbite Vue 0.1.x + Tailwind CSS 3.4.x",
      "Build Tool": "Vite 5.x",
      "Web Server": "Nginx (Alpine)",
      Database: "MySQL 8.0",
      Charts: "Larapex Charts 8.1.x",
      "PDF Generator": "TCPDF 11.x",
      "Excel Export": "Maatwebsite Excel 3.1.x",
      Authentication: "Laravel Sanctum 3.3.x"
    },
    result: "- **Efisiensi Operasional**: Waktu proses cash advance dari pengajuan hingga settlement berkurang lebih dari 50% melalui digitalisasi dan otomatisasi workflow.\n\n- **Akurasi Data & Reduced Errors**: Eliminasi human error dalam perhitungan dan pencatatan Manual melalui validasi otomatis dan calculator terintegrasi.\n\n- **Transparansi & Visibility**: Karyawan dapat tracking status permohonan secara real-time, sementara manager mendapatkan visibilitas terhadap seluruh pipeline cash advance.\n\n- **Audit Trail & Compliance**: Setiap aksi ter-log dengan timestamp, user, dan perubahan status, memberikan dokumentasi audit-ready untuk compliance internal maupun eksternal.\n\n- **Centralized Document Management**: Semua dokumen (application form, settlement papers, receipts) tersimpan dalam satu sistem dengan backup otomatis dan traceability penuh.\n\n- **Scalable Approval Workflow**: Matrix approval yang fleksibel memungkinkan penyesuaian alur persetujuan berdasarkan nilai, department, atau kriteria organisasi tanpa mengubah kode.",
    resultDesc: "Implementasi BMA memberikan transformasi digital bagi proses cash advance, meningkatkan efisiensi, akurasi, dan kepatuhan compliance perusahaan:"
  },
  {
    slug: "oncr-online-customer-registration",
    title: "ONCR - Online Customer Registration",
    shortDesc: "Sistem registrasi pelanggan online dengan verifikasi OTP email, dashboard manajemen terpusat, dan tracking real-time untuk proses onboarding pelanggan.",
    thumbnail: "/images/projects/ONCR/thumbnail-ONCR.webp",
    screenshots: [
      "/images/projects/ONCR/ONCR 1.webp",
      "/images/projects/ONCR/ONCR 2.webp",
      "/images/projects/ONCR/ONCR 3.webp",
      "/images/projects/ONCR/ONCR 4.webp",
      "/images/projects/ONCR/ONCR 5.webp"
    ],
    tags: [
      "Laravel",
      "Livewire",
      "MySQL",
      "Sanctum",
      "Tailwind CSS",
      "Alpine.js",
      "Larapex Charts"
    ],
    challenge: "- **Proses Manual Berlanjut**: Registrasi pelanggan sebelumnya memerlukan input data manual oleh admin, memakan waktu 15-20 menit per pelanggan.\n\n- **Verifikasi Identitas Lemah**: Tidak ada mekanisme verifikasi bahwa customer yang mendaftar adalah pihak yang berhak.\n\n- **Tracking Difficulty**: Kesulitan melacak status registrasi pelanggan secara real-time.\n\n- **Data Terfragmentasi**: Data pelanggan tersimpan di berbagai tempat tanpa integrasi yang jelas.\n\n- **Kebutuhan Audit**: Manajemen memerlukan jejak audit yang jelas untuk setiap registrasi.",
    challengeDesc: "Sebelum digitalisasi, departemen sales dan admin CRC menghadapi proses registrasi manual yang tidak efisien:",
    solution: "Saya mengembangkan ONCR sebagai solusi registrasi pelanggan end-to-end dengan verifikasi OTP email otomatis dan dashboard terpusat. Sistem ini mengintegrasikan Laravel Livewire untuk real-time interaction, multi-step form dengan validation, document upload, dan comprehensive reporting. Dengan Role-Based Access Control (RBAC) menggunakan Laravel Sanctum, ONCR memberikan keamanan tinggi, audittrail lengkap, dan visibilitas penuh terhadap status registrasi dari draft hingga approved.",
    features: [
      {
        title: "OTP Email Authentication",
        desc: "Sistem login dengan One-Time Password 4-digit dikirim via email untuk verifikasi identitas. Session management dengan Laravel Sanctun untuk keamanan maksimal."
      },
      {
        title: "Multi-step Registration Form",
        desc: "Formulir registrasi berbeda untuk salesman lapangan dan online registration. Step-by-step data collection dengan real-time validation menggunakan Livewire."
      },
      {
        title: "Document Upload & Management",
        desc: "Upload dokumen pendukung (SK, Kartu Identitas) dengan validasi file type dan size. Dokumen disimpan dengan naming convention unik dan traceable."
      },
      {
        title: "Plant & Branch Management",
        desc: "Fitur searchable plant selection untuk menentukan lokasi tujuan. Manajemen data master plant dan branch dengan easy maintenance."
      },
      {
        title: "Real-time Dashboards",
        desc: "Dashboard salesman (personal stats) dan admin CRC (overview all registrations) dengan filter by status, date range, dan plant. Live updates menggunakan Livewire."
      },
      {
        title: "Status Tracking & Workflow",
        desc: "6-level status workflow: Draft → Submitted → Verified → Approved → Rejected → Cancelled. Setiap transisi ter-log dengan user, timestamp, dan remarks."
      },
      {
        title: "Comprehensive Reporting",
        desc: "Customer report dengan multi-criteria filter (status, date, range, plant, salesman). Export to Excel menggunakan Maatwebsite Excel dan chart visualization dengan Larapex Charts."
      },
      {
        title: "Master Data Management",
        desc: "Pengelolaan data master: Plant, Branch, Employee (salesman), dan User roles. Admin dapat menambahkan, mengedit, atau menonaktifkan data master sesuai kebutuhan."
      }
    ],
    techStack: {
      "Backend Framework": "Laravel 10.x (PHP 8.1)",
      "Frontend Framework": "Livewire 3.x (Server-side rendering)",
      JavaScript: "Alpine.js 3.13.x",
      "CSS Framework": "Tailwind CSS 3.3.x",
      "UI Components": "Flowbite",
      Database: "MySQL 8.0",
      Cache: "Redis 7.x",
      Charts: "Larapex Charts 6.0",
      "Excel Export": "Maatwebsite Excel 3.1.x",
      Authentication: "Laravel Sanctum 3.2.x",
      Icons: "Blade Icons / Heroicons 2.1.x",
      Container: "Docker 24.x (nginx Alpine)",
      "Build Tool": "Vite 5.x"
    },
    result: "- **Waktu Processing Reduced**: Waktu registrasi per pelanggan berkurang dari 15-20 menit menjadi kurang dari 5 menit (75% improvement) melalui digitalisasi.\n\n- **Verifikasi Identitas Terotomatisasi**: OTP email memastikan hanya pihak berhak yang dapat menyelesaikan registrasi, mengurangi fraud risk.\n\n- **Real-time Visibility**: Manajemen dapat tracking semua registrasi secara real-time dengan dashboard interaktif, mempercepat decision-making.\n\n- **Audit Trail Lengkap**: Setiap aksi (create, update, status change) tercatat dengan user, timestamp, dan IP address untuk compliance dan forensics.\n\n- **Centralized Data**: Semua data pelanggan, plant, branch, dan salesman terintegrasi dalam satu database dengan relational integrity.\n\n- **Scalable Reporting**: Laporan can be generated in seconds with multiple filters, replacing manual Excel compilation yang sebelumnya memakan waktu berjam-jam.",
    resultDesc: "Implementasi ONCR berhasil mentransformasi proses registrasi pelanggan menjadi fully digital, meningkatkan efisiensi, keamanan, dan auditability:"
  },
  {
    slug: "sample-management-system",
    title: "Sample Management System",
    shortDesc: "Sistem manajemen sampel produk untuk PT Behn Meyer Chemicals dengan real-time tracking, OTP email authentication, dan dashboard analitik komprehensif untuk aktivitas Sample In/Out.",
    thumbnail: "/images/projects/sample-management/thumbnail.webp",
    screenshots: [
      "/images/projects/sample-management/screenshot-1.webp",
      "/images/projects/sample-management/screenshot-2.webp",
      "/images/projects/sample-management/screenshot-3.webp",
      "/images/projects/sample-management/screenshot-4.webp"
    ],
    tags: [
      "CodeIgniter 3.x",
      "PHP 8.1",
      "MySQL 8.0",
      "ApexCharts",
      "Docker",
      "Blade Template",
      "OTP"
    ],
    challenge: "- **Manajemen Stok Real-time**: Kesulitan melacak ketersediaan sampel produk di berbagai plant secara akurat dan real-time.\n\n- **Verifikasi Keamanan**: Tidak ada mekanisme autentikasi yang kuat untuk membatasi akses user yang tidak berwenang.\n\n- **Analitik Data Terbatas**: Tidak memiliki visualisasi data yang informatif untuk monitoring dan decision-making.\n\n- **Dokumentasi Transaksi Tidak Terstruktur**: Aktivitas Sample In dan Sample Out tidak tercatat dengan lengkap dan rapi.\n\n- **Multi-Lokasi Complexity**: Menangani operasi sampel di berbagai regional dan plant memerlifikasi sistem terintegrasi.",
    challengeDesc: "Sebelum implementasi sistem terpadu, PT Behn Meyer Chemicals menghadapi hambatan dalam mengelola aktivitas sampel produk secara efisien:",
    solution: "Saya mengembangkan Sample Management System berbasis CodeIgniter 3.x yang menyediakan solusi end-to-end untuk pengelolaan sampel produk. Sistem ini mengimplementasikan OTP (One-Time Password) authentication via email untuk keamanan akses, dashboard analitik real-time dengan ApexCharts, dan transaksi Sample In/Out yang terintegrasi dengan auto-update stok. Dengan dukungan multi-lokasi (regional, plant, vendor), master data management terpusat, dan reporting dalam format PDF, sistem ini memberikan transparansi penuh, akurasi stok, dan traceability untuk setiap transaksi.",
    features: [
      {
        title: "OTP Email Authentication",
        desc: "Sistem login dengan One-Time Password 4-digit dikirim via email, berlaku 10 menit. Enkripsi data sensitif dengan CodeIgniter encryption library."
      },
      {
        title: "Comprehensive Dashboard Analytics",
        desc: "Dashboard interaktif menampilkan total regional, vendor, product sample, stock availability, Sample In/Out counts, monthly trend graphs, top 10 vendors, dan recent transactions table."
      },
      {
        title: "Sample In Transaction",
        desc: "Pencatatan penerimaan sampel dari vendor dengan detail: Serial Number, AWB, PO Number, Courier, Plant, Tanggal Penerimaan, Memo. Auto-update stok setelah transaksi."
      },
      {
        title: "Sample Out Transaction",
        desc: "Pencatatan pengiriman sampel ke pelanggan atau departemen internal. Sistem otomatis mengurangi stok dan mencatat transaksi lengkap untuk audit trail."
      },
      {
        title: "Master Data Management",
        desc: "Pengelolaan data master: msbranch (Regional/Branch), msvendor (Vendor/Courier), msplant (Plant/Lokasi), msprodsample (Produk Sampel), msuom (Unit of Measure)."
      },
      {
        title: "Real-time Stock Tracking",
        desc: "Pelacakan stok sampel secara real-time di berbagai plant. Setiap transaksi Sample In/Out secara otomatis mengupdate ketersediaan stok."
      },
      {
        title: "PDF Reporting & Export",
        desc: "Generasi laporan PDF untuk transaksi Sample In dan Sample Out berdasarkan filter tanggal dan kriteria lainnya. Laporan siap untuk audit dan dokumentasi."
      },
      {
        title: "Multi-Location Support",
        desc: "Sistem mendukung operasi multi-regional dan multi-plant. User dapat filter dan view data berdasarkan lokasi mereka memiliki akses."
      }
    ],
    techStack: {
      "Backend Framework": "CodeIgniter 3.x",
      "PHP Version": "PHP 8.1",
      Database: "MySQL 8.0",
      "Frontend Template": "Blade Template Engine",
      "Charts Library": "ApexCharts 3.45+",
      Authentication: "OTP via Email (SMTP/Mailpit)",
      Containerization: "Docker 24.x (nginx Alpine + PHP-FPM)",
      "Build Tools": "Composer (PHP), NPM (optional for assets)"
    },
    result: "- **Real-time Stock Accuracy**: Akurasi stok sampel meningkat significantly dengan tracking real-time di semua plant, mengurangi discrepancy hingga 90%.\n\n- **Enhanced Security**: OTP authentication memastikan hanya authorized personnel yang dapat mengakses sistem, mengurangi risiko akses tidak sah.\n\n- **Operational Efficiency**: Waktu pencatatan transaksi berkurang 60% dengan sistem terintegrasi, menggantikan manual ledger dan spreadsheet.\n\n- **Data-driven Decisions**: Dashboard analytics memberikan insight instant untuk management, mempercepat decision-making dengan visual data yang jelas.\n\n- **Audit Compliance**: Setiap transaksi tercatat lengkap dengan timestamp, user, dan details, memenuhi requirements auditinternal dan eksternal.\n\n- **Multi-location Visibility**: Management dapat monitor aktivitas sampel di seluruh regional dan plant dari satu dashboard terpusat.",
    resultDesc: "Sample Management System memberikan solusi komprehensif untuk mengelola aktivitas sampel produk dengan keamanan tinggi, akurasi real-time, dan analitik yang informatif:"
  }
];
