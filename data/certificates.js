/**
 * SERTIFIKAT & LISENSI — Fitri Muliawati
 * Berisi sertifikat resmi yang telah diverifikasi.
 */

export const certificateStatus = {
  verified: { label: "Verified", icon: "check" },
  certified: { label: "Certified", icon: "award" },
  completed: { label: "Completed", icon: "check" },
};

export const certificates = [
  {
    id: "lks-smk-2023",
    number: "01",
    title: "Peserta Mata Lomba IT Software Solution for Business",
    issuer: "LKS SMK Tingkat Kota Tangerang / Seleknas",
    date: "24 Februari 2023",
    category: "IT & Software Solution",
    status: "verified",
    accent: "yellow",
    image: "/certificates/sertifikat-lks-preview.webp",
    link: "/certificates/sertifikat-lks-fitri.pdf",
    description:
      "Sertifikat kepesertaan Lomba Kompetensi Siswa Sekolah Menengah Kejuruan (LKS SMK) Tingkat Kota Tangerang Tahun 2023 pada mata lomba IT Software Solution for Business, mewakili SMK Pancakarya Tangerang.",
  },
  {
    id: "seminar-ml-2026",
    number: "02",
    title: "Peserta Seminar Online “Memahami Machine Learning Dari Nol”",
    issuer: "HIMA Informatika Universitas Bhakti Asih Tangerang",
    date: "1 Agustus 2026",
    category: "Artificial Intelligence",
    status: "verified",
    accent: "pink",
    image: "/certificates/sertifikat-seminar-ml-preview.webp",
    link: "/certificates/sertifikat-seminar-ml.pdf",
    description:
      "Sertifikat kepesertaan Seminar Online 'Memahami Machine Learning Dari Nol' yang diselenggarakan oleh HIMA Informatika Universitas Bhakti Asih Tangerang.",
  },
];
