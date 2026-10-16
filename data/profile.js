/**
 * PROFIL — Fitri Muliawati
 */
export const profile = {
  firstName: "Fitri",
  fullName: "Fitri Muliawati",
  role: "Multidisciplinary Creative",
  tagline: "Always learning, always growing!",
  heroDescription:
    "Aku suka mengeksplorasi ide, mencoba hal baru, dan belajar menciptakan sesuatu yang bermakna.",
  aboutParagraphs: [
    "Halo, aku Fitri Muliawati. Aku senang belajar, bereksplorasi, dan mencoba berbagai hal baru.",
    "Aku tertarik pada dunia kreatif dan digital, serta ingin terus mengembangkan kemampuan melalui pengalaman nyata. Portofolio ini adalah ruang untuk menyimpan ide, proses belajar, dan karya yang akan datang.",
  ],
  quote: "Small steps, big dreams.",

  /**
   * Foto profil di folder /public.
   */
  photo: "/FOTO.webp",
  photoAbout: "/FOTO.webp",

  /** Biodata singkat resmi */
  biodata: [
    { label: "Nama", value: "Fitri Muliawati" },
    { label: "Domisili", value: "Kota Tangerang" },
    { label: "Pendidikan", value: "Double Degree" },
    { label: "Status", value: "Mahasiswa" },
  ],

  /** Minat & fokus keahlian */
  interests: [
    "Quality Assurance",
    "IT Business Intelligence",
    "Software Quality Assurance",
  ],
};

/** Helper: true bila sebuah nilai masih berupa placeholder "[...]". */
export function isPlaceholder(value) {
  return typeof value !== "string" || /^\[.*\]$/.test(value.trim());
}
