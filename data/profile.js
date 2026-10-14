/**
 * PROFIL — ganti nilai placeholder di bawah setelah dikonfirmasi oleh Fitri.
 * Nilai yang diawali "[" dan diakhiri "]" otomatis ditampilkan sebagai
 * placeholder (bergaris putus-putus) di website.
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
   * Foto profil. Isi dengan path lokal di folder /public, mis. "/images/fitri.jpg".
   * Selama bernilai null, website menampilkan placeholder polaroid.
   */
  photo: null,
  photoAbout: null,

  /** Biodata singkat — jangan diisi dengan tebakan. */
  biodata: [
    { label: "Nama", value: "Fitri Muliawati" },
    { label: "Domisili", value: "[Kota]" },
    { label: "Pendidikan", value: "[Pendidikan]" },
    { label: "Status", value: "[Status saat ini]" },
  ],

  /** Minat / fokus — masih perlu dikonfirmasi. */
  interests: [
    "[Minat yang dikonfirmasi #1]",
    "[Minat yang dikonfirmasi #2]",
    "[Minat yang dikonfirmasi #3]",
  ],
};

/** Helper: true bila sebuah nilai masih berupa placeholder "[...]". */
export function isPlaceholder(value) {
  return typeof value !== "string" || /^\[.*\]$/.test(value.trim());
}
