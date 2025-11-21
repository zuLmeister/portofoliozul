import React from "react";
// Impor semua ikon yang dibutuhkan di sini
import {
  FaLaravel,
  FaReact,
  FaPython,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaDatabase,
  FaPhp,
} from "react-icons/fa";
import {
  SiCodeigniter,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSap,
  SiNodedotjs,
} from "react-icons/si";

const resumeInggris = {
  name: "ZULFIKAR AHMAD KOMARI",
  title: "Full Stack Developer",
  cv_link:
    "https://drive.google.com/file/d/1GoI50T4B_6j7cVcAg_8FRN8aVRIDQX8G/view?usp=drive_link",
  cv_button_text: "View CV",
  contact: {
    phone: "+6282236601771",
    email: "zulfikarac2@gmail.com",
    linkedin: "https://id.linkedin.com/in/zulwasright",
    github: "https://github.com/your-github-username",
  },
  summary: `I started out teaching computers how to read human emotions , my thesis turned them into overthinking psychologists using CNN and Haar Cascade.

But life said: “Cool AI stuff, now go get a job.” So I jumped into Full Stack Web Development.
.

Always learning, always adapting, even when one button just won’t center or the API Fetch won't working.`,
  skills: [
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJsSquare size={40} />, color: "#F7DF1E" },
    { name: "PHP", icon: <FaPhp size={40} />, color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel size={40} />, color: "#FF2D20" },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter size={40} />,
      color: "#EF4223",
    },
    { name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },
    { name: "Python", icon: <FaPython size={40} />, color: "#3776AB" },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "#4169E1" },
    { name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
    { name: "Sybase (SAP)", icon: <SiSap size={40} />, color: "#008FD3" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#68A063" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      color: "#06B6D4",
    },
  ],
  experience: [
    {
      company: "PT Bahana Cipta Internusa",
      period: "Aug 2025 - Present",
      title: "Full Stack Developer",
    },
    {
      company: "Pertamina Hospital Balikpapan",
      period: "Mar 2024 - Jul 2025",
      title: "Full Stack Developer",
      projects: [
        {
          title: "Electronic Medical Record (EMR) Application",
          description:
            "Developed a web-based EMR application for inpatient services to streamline the recording process and enhance patient data accuracy. This application has successfully passed the Ministry of Health's assessment and is currently in use across multiple Pertamedika units.",
          images: ["/rme.png"],
          tags: [
            "Laravel",
            "React + Vite",
            "Sybase",
            "Tailwind-CSS",
            "Flowbite",
          ],
        },
        {
          title: "Hospital Management Dashboard",
          description:
            "Designed and developed a dashboard application to provide real-time data access and operational insights for hospital management, enabling data-driven decision-making.",
          images: ["/dashboard.png"],
          tags: ["CodeIgniter3", "Chart.js", "AdminLTE"],
        },
        {
          title: "Internal Meeting Minutes Application",
          description:
            "Developed a web-based application to digitize and standardize internal meeting documentation, improving the consistency and accessibility of recorded discussions.",
          images: ["/notulensi.png"],
          tags: ["CodeIgniter3", "Bootstrap", "Sybase"],
        },
        {
          title: "General Affairs Application - User POV",
          description:
            "Designed and developed a General Affairs management system to help administrative staff coordinate room, driver, and vehicle bookings, while allowing users to make requests independently and efficiently.",
          images: [
            "/general-affair.png",
            "/ga-user-1.png",
            "/ga-user-2.png",
            "/ga-user-3.png",
            "/ga-user-4.png",
            "/ga-user-5.png",
          ],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
        {
          title: "General Affairs Application - Admin POV",
          description:
            "Designed and developed a General Affairs management system to help administrative staff coordinate room, driver, and vehicle bookings, while allowing users to make requests independently and efficiently.",
          images: [
            "/general-affair.png",
            "/ga-admin-1.png",
            "/ga-admin-2.png",
            "/ga-admin-3.png",
            "/ga-admin-4.png",
            "/ga-admin-5.png",
            "/ga-admin-6.png",
            "/ga-admin-7.png",
            "/ga-admin-8.png",
            "/ga-admin-9.png",
          ],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
        {
          title: "BPJS Pharmacy Bridging System",
          description:
            "Implemented a bridging system between the main Pharmacy application of Pertamina Hospital Balikpapan and BPJS to streamline prescription registration, medication input, and BPJS claim monitoring, with the goal of improving data consistency.",
          images: ["/apotekrspb.png"],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
      ],
    },
    {
      company: "Meranti Etam Balikpapan",
      period: "Jun 2022 - Aug 2022",
      title: "Full Stack Developer",
      projects: [
        {
          title: "Company Profile & Information System",
          description:
            "Developed a web-based information management system to handle dynamic content including photo galleries, news updates, and interactive location mapping using Leaflet.js.",
          images: ["/merantikita.png"],
          tags: ["Laravel", "Bootstrap", "Leaflet.js", "MySQL", "Blade"],
        },
        {
          title: "Food Stall Web Application",
          description:
            "A simple web application for Browse menu and placing orders online, developed as both a freelance project and academic assignment.",
          images: ["/kedai.png"],
          tags: [
            "Blade",
            "Native CSS",
            "Laravel",
            "JavaScript (DOM Manipulation)",
          ],
        },
        {
          title: "Company Profile – PeTaL",
          description:
            "A company profile web application for a simulated software house named PeTaL, developed as a final course project to showcase company information, services, and portfolio.",
          images: ["/petal.png"],
          tags: [
            "Blade",
            "Native CSS",
            "Laravel",
            "JavaScript (DOM Manipulation)",
          ],
        },
      ],
    },
  ],
  education: {
    institution: "Institut Teknologi Kalimantan",
    degree: "Bachelor of Informatics",
    gpa: "3.48/4.00",
    period: "Aug 2019 – Oct 2023",
    thesis: `Development of an Emotion Classification System Based on Facial Expressions for Engagement Learning
Using Convolutional Neural Network and Haar Cascade Classifier
Focus: Computer Vision, Data Science, Machine Learning, Deep Learning`,
  },
  training: {
    institution: "Digital Talent Scholarship Kominfo & Huawei",
    field: "Artificial Intelligence",
    period: "Jul 2023 - Sep 2023",
    thesis: `Attended Digital Talent training by Kominfo & Huawei on AI concepts and practices, including Machine Learning and Deep Learning.`,
  },
  organizations: [
    {
      role: "Expert Staff of HR Development, Informatics Student Association",
      period: "2022 - 2023",
    },
    {
      role: "Staff of HR Development, Informatics Student Association",
      period: "2021 - 2022",
    },
    {
      role: "Expert Staff of Events, ITK Funtastic Competition",
      period: "2021",
    },
  ],
  volunteering: [
    { event: "Green Campaign 3.0 Zero Waste" },
    { event: "HMIF Mengabdi (Community Service)" },
    { event: "Louversal Disability Day" },
  ],
  certifications: [
    { type: "copyright", name: "Copyright - SRS", image: "/srs.png" },
    { type: "copyright", name: "Copyright - SDD", image: "/sdd.png" },
    { type: "copyright", name: "Copyright - SDP", image: "/sdp.png" },
    { type: "dicoding", name: "Python", image: "/python.png" },
    { type: "dicoding", name: "Data Science", image: "/datascience.png" },
    { type: "dicoding", name: "SQL", image: "/sql.png" },
    {
      type: "dicoding",
      name: "Data Visualization",
      image: "/visualisasidata.png",
    },
    { type: "dicoding", name: "Machine Learning", image: "/ML.png" },
    { type: "dicoding", name: "Web Programming", image: "/web.png" },
    {
      type: "huawei",
      text: "Huawei Certified ICT Associate - Artificial Intelligence",
      image: "/fga.png",
    },
    {
      type: "publication",
      title:
        "PROMOTION OF REGIONAL EXCELLENCE THROUGH THE POTENTIAL OF NATURE TOURISM AT TANJUNG JUMLAI BEACH, PENAJAM PASER UTARA REGENCY, THE FUTURE NATIONAL CAPITAL, POST-COVID-19 PANDEMIC",
      year: 2022,
      image: "/unisuka.jpg", // Make sure this image path is correct
      link: "https://ojs.uniska-bjm.ac.id/index.php/AIJP/article/view/7586/5112",
    },
    {
      type: "publication",
      title:
        "PROMOTION OF REGIONAL EXCELLENCE THROUGH THE POTENTIAL OF NATURE TOURISM AT TANJUNG JUMLAI BEACH, PENAJAM PASER UTARA REGENCY, THE FUTURE NATIONAL CAPITAL",
      year: 2023,
      image: "/abadi.png", // Path to the other publication's image
      link: "https://ejournal.ahmaddahlan.ac.id/index.php/abadi/article/view/73/79",
    },
  ],
};

const resumeIndonesia = {
  name: "ZULFIKAR AHMAD KOMARI",
  title: "Full Stack Developer",
  cv_link:
    "https://drive.google.com/file/d/18FHOZcx48pJmNXUPVAIyUT7OvMwmbIRL/view?usp=drive_link",
  cv_button_text: "Lihat CV",
  contact: {
    phone: "+6282236601771",
    email: "zulfikarac2@gmail.com",
    linkedin: "https://id.linkedin.com/in/zulwasright",
    github: "https://github.com/your-github-username",
  },
  summary: `Awalnya, saya ngajarin komputer cara baca emosi manusia, skripsi saya bikin mereka jadi psikolog canggih pake CNN dan Haar Cascade.

Tapi takdir berkata lain: “AI-nya keren, tapi sekarang cari kerja.” Akhirnya, saya banting setir jadi Full Stack Web Developer.

Saya orang yang selalu penasaran, terus belajar, dan pantang nyerah, bahkan saat ada tombol yang gak mau ke tengah atau fetch API yang error melulu.`,
  skills: [
    { name: "HTML5", icon: <FaHtml5 size={40} />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt size={40} />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJsSquare size={40} />, color: "#F7DF1E" },
    { name: "PHP", icon: <FaPhp size={40} />, color: "#777BB4" },
    { name: "Laravel", icon: <FaLaravel size={40} />, color: "#FF2D20" },
    {
      name: "CodeIgniter",
      icon: <SiCodeigniter size={40} />,
      color: "#EF4223",
    },
    { name: "React", icon: <FaReact size={40} />, color: "#61DAFB" },
    { name: "Python", icon: <FaPython size={40} />, color: "#3776AB" },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "#4169E1" },
    { name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
    { name: "Sybase (SAP)", icon: <SiSap size={40} />, color: "#008FD3" },
    { name: "Node.js", icon: <SiNodedotjs size={40} />, color: "#68A063" },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss size={40} />,
      color: "#06B6D4",
    },
  ],
  experience: [
    {
      company: "PT Bahana Cipta Internusa",
      period: "Aug 2025 - Now",
      title: "Full Stack Developer",
    },
    {
      company: "Rumah Sakit Pertamina Balikpapan",
      period: "Mar 2024 - Jul 2025",
      title: "Full Stack Developer",
      projects: [
        {
          title: "Aplikasi Rekam Medis Elektronik (RME)",
          description:
            "Membuat aplikasi Rekam Medis Elektronik ( RME ) berbasis web untuk layanan rawat inap menggunakan Laravel dan React untuk membantu mempercepat proses pencatatan dan meningkatkan akurasi data pasien. Sudah lolos assessmen Kemenkes dan digunakan di beberapa Pertamedika unit lain",
          images: ["/rme.png"],
          tags: [
            "Laravel",
            "React + Vite",
            "Sybase",
            "Tailwind-CSS",
            "Flowbite",
          ],
        },
        {
          title: "Dashboard Manajemen RS",
          description:
            "Merancang dan mengembangkan aplikasi Dashboard Rumah Sakit menggunakan CodeIgniter3 untuk akses data secara real-time dan memberikan wawasan operasional bagi manajemen",
          images: ["/dashboard.png"],
          tags: ["CodeIgniter3", "Chart.js", "AdminLTE"],
        },
        {
          title: "Aplikasi Notulensi Internal",
          description:
            "Mengembangkan aplikasi Pencatatan internal ( Notulensi ) berbasis web menggunakan CodeIgniter3 untuk mempermudah dokumentasi rapat secara digital dan konsisten.",
          images: ["/notulensi.png"],
          tags: ["CodeIgniter3", "Bootstrap", "Sybase"],
        },

        {
          title: "General Affairs Application - User POV",
          description:
            "Merancang dan mengembangkan aplikasi General Affairs berbasis web untuk membantu admin dalam mengelola ruangan, supir, dan kendaraan, serta memudahkan user untuk melakukan pemesanan secara mandiri.",
          images: [
            "/general-affair.png",
            "/ga-user-1.png",
            "/ga-user-2.png",
            "/ga-user-3.png",
            "/ga-user-4.png",
            "/ga-user-5.png",
          ],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
        {
          title: "General Affairs Application - Admim POV",
          description:
            "Merancang dan mengembangkan aplikasi General Affairs berbasis web untuk membantu admin dalam mengelola ruangan, supir, dan kendaraan, serta memudahkan user untuk melakukan pemesanan secara mandiri.",
          images: [
            "/general-affair.png",
            "/ga-admin-1.png",
            "/ga-admin-2.png",
            "/ga-admin-3.png",
            "/ga-admin-4.png",
            "/ga-admin-5.png",
            "/ga-admin-6.png",
            "/ga-admin-7.png",
            "/ga-admin-8.png",
            "/ga-admin-9.png",
          ],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
        {
          title: "Bridging Apotek BPJS",
          description:
            "Melakukan bridging aplikasi utama Apotik Rumah Sakit Pertamina Balikpapan dengan BPJS untuk memudahkan pendaftaran resep, input obat dan monitoring klaim BPJS dengan tujuan meningkatkan konsistensi data",
          images: ["/apotekrspb.png"],
          tags: ["Laravel", "React + Vite", "Sybase", "Ant Design"],
        },
      ],
    },
    {
      company: "Meranti Etam Balikpapan",
      period: "Jun 2022 - Agu 2022",
      title: "Full Stack Developer",
      projects: [
        {
          title: "Company Profile - Wisata Meranti Etam Balikpapan",
          description:
            "Mengembangkan sistem informasi berbasis web untuk mengelola konten seperti galeri, berita, serta penanda lokasi interaktif menggunakan Leaflet.",
          images: ["/merantikita.png"],
          tags: ["Laravel", "Bootstrap", "Leaflet.js", "MySQL", "Blade"],
        },
        {
          title: "Aplikasi Kedai Makanan",
          description:
            "Aplikasi web sederhana untuk menampilkan menu dan memungkinkan pemesanan secara online, dikembangkan sebagai bagian dari proyek freelance dan tugas akademik.",
          images: ["/kedai.png"],
          tags: [
            "Blade",
            "Native CSS",
            "Laravel",
            "JavaScript (DOM Manipulation)",
          ],
        },
        {
          title: "Company Profile – PeTaL",
          description:
            "Aplikasi company profile untuk software house simulasi bernama PeTaL, dibuat sebagai proyek tugas akhir mata kuliah untuk menampilkan informasi perusahaan, layanan, dan portofolio.",
          images: ["/petal.png"],
          tags: [
            "Blade",
            "Native CSS",
            "Laravel",
            "JavaScript (DOM Manipulation)",
          ],
        },
      ],
    },
  ],
  education: {
    institution: "Institut Teknologi Kalimantan",
    degree: "S1 Informatika",
    gpa: "3.48/4.00",
    period: "Agu 2019 - Okt 2023",
    thesis: `Pengembangan Sistem Klasifikasi Emosi Berdasarkan Ekspresi Wajah untuk Engagement Learning
Menggunakan Convolutional Neural Network dan Haar Cascade Classifier
Fokus: Computer Vision, Data Science, Machine Learning, Deep Learning`,
  },
  training: {
    institution: "Digital Talent Kominfo & Huawei",
    field: "Kecerdasan Buatan (AI)",
    period: "Jul 2023 - Sep 2023",
    thesis: `Mengikuti pelatihan Digital Talent Kominfo & Huawei tentang konsep dan praktik Kecerdasan Buatan, termasuk Machine Learning dan Deep Learning.`,
  },
  organizations: [
    {
      role: "Staff Ahli PSDM, Himpunan Mahasiswa Informatika",
      period: "2022 - 2023",
    },
    {
      role: "Staff PSDM, Himpunan Mahasiswa Informatika",
      period: "2021 - 2022",
    },
    { role: "Staff Ahli Acara, ITK Funtastic Competition", period: "2021" },
  ],
  volunteering: [
    { event: "Green Campaign 3.0 Zero Waste" },
    { event: "HMIF Mengabdi" },
    { event: "Louversal Disability Day" },
  ],
  certifications: [
    { type: "copyright", name: "Copyright - SRS", image: "/srs.png" },
    { type: "copyright", name: "Copyright - SDD", image: "/sdd.png" },
    { type: "copyright", name: "Copyright - SDP", image: "/sdp.png" },
    { type: "dicoding", name: "Python", image: "/python.png" },
    { type: "dicoding", name: "Data Science", image: "/datascience.png" },
    { type: "dicoding", name: "SQL", image: "/sql.png" },
    {
      type: "dicoding",
      name: "Visualisasi Data",
      image: "/visualisasidata.png",
    },
    { type: "dicoding", name: "Machine Learning", image: "/ML.png" },
    { type: "dicoding", name: "Web Programming", image: "/web.png" },
    {
      type: "huawei",
      text: "Sertifikasi AI dari Huawei",
      image: "/fga.png",
    },
    {
      type: "publication",
      title:
        "PROMOSI KEUNGGULAN DAERAH MELALUI POTENSI WISATA ALAM DI PANTAI TANJUNG JUMLAI, KABUPATEN PENAJAM PASER UTARA CALON IBU KOTA NEGARA PASCA PANDEMI COVID-19",
      year: 2022,
      image: "/unisuka.jpg", // Pastikan path gambar ini benar
      link: "https://ojs.uniska-bjm.ac.id/index.php/AIJP/article/view/7586/5112",
    },
    {
      type: "publication",
      title:
        "PROMOSI KEUNGGULAN DAERAH MELALUI POTENSI WISATA ALAM DI PANTAI TANJUNG JUMLAI, KABUPATEN PENAJAM PASER UTARA CALON IBU KOTA NEGARA",
      year: 2023,
      image: "/abadi.png", // Path ke gambar publikasi lain
      link: "https://ejournal.ahmaddahlan.ac.id/index.php/abadi/article/view/73/79",
    },
  ],
};

export const resumeGabungan = {
  en: {
    resume: resumeInggris,
    navigation: {
      home: "Home",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
    },
    experience_section: {
      sectionTitle: "Experience & Featured Projects",
      jobHistory: "Work History",
      projectExamples: "Recent Projects",
    },
    education_section: {
      mainTitle: "Education & Activities",
      educationCardTitle: "Education & Training",
      gpaLabel: "GPA",
      thesisLabel: "Thesis",
      orgCardTitle: "Organizations & Volunteering",
      volunteerDivider: "Volunteer",
      certsCardTitle: "Certifications & Publications",
      copyrightTitle: "Copyright",
      dicodingTitle: "Dicoding Certifications",
      huaweiTitle: "Huawei Certification",
      publicationTitle: "Publication",
      filterAll: "All",
      filterCertification: "Certifications",
      filterCopyright: "Copyright",
      filterPublication: "Publication",
    },
  },
  id: {
    resume: resumeIndonesia,
    navigation: {
      home: "Home",
      skills: "Keahlian",
      experience: "Pengalaman",
      education: "Pendidikan",
      contact: "Kontak",
    },
    experience_section: {
      sectionTitle: "Pengalaman & Project",
      jobHistory: "Riwayat Pekerjaan",
      projectExamples: "Projects",
    },
    education_section: {
      mainTitle: "Pendidikan, Pelatihan & Kegiatan Organisasi",
      educationCardTitle: "Pendidikan & Pelatihan",
      gpaLabel: "IPK",
      thesisLabel: "Skripsi",
      orgCardTitle: "Pengalaman Organisasi & Volunteer",
      volunteerDivider: "Volunteer",
      certsCardTitle: "Sertifikasi & Publikasi",
      copyrightTitle: "Hak Cipta",
      dicodingTitle: "Sertifikasi Dicoding",
      huaweiTitle: "Sertifikasi Huawei",
      publicationTitle: "Publikasi",
      filterAll: "Semua",
      filterCertification: "Sertifikasi",
      filterCopyright: "Hak Cipta",
      filterPublication: "Publikasi",
    },
  },
};
