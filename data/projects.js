/**
 * PROYEK — belum ada proyek nyata. Semua kartu di bawah adalah ide /
 * rencana dengan status yang jujur. Saat proyek asli tersedia, ubah
 * `status`, isi `image` (path lokal di /public), dan tambahkan `links`.
 *
 * status: "idea" | "planning" | "soon" | "done"
 * links : [{ label: "Lihat Demo", href: "https://..." }] — hanya untuk proyek nyata.
 */
export const projectStatus = {
  idea: { label: "Ide Proyek", icon: "bulb" },
  planning: { label: "Dalam Perencanaan", icon: "pencil" },
  soon: { label: "Coming Soon", icon: "clock" },
  done: { label: "Selesai", icon: "check" },
};

export const projects = [
  {
    id: "graphic-design",
    number: "01",
    title: "Eksplorasi Desain Grafis",
    category: "Graphic Design",
    description:
      "Rencana eksplorasi poster, tipografi, dan komposisi warna sebagai latihan visual.",
    status: "idea",
    accent: "yellow",
    image: null,
    links: [],
  },
  {
    id: "ui-ux",
    number: "02",
    title: "Eksplorasi UI/UX",
    category: "UI/UX Design",
    description:
      "Ide studi kasus kecil: memahami kebutuhan pengguna lalu merancang alur dan tampilan aplikasi.",
    status: "idea",
    accent: "pink",
    image: null,
    links: [],
  },
  {
    id: "portfolio-website",
    number: "03",
    title: "Website Portofolio",
    category: "Web",
    description:
      "Website scrapbook ini sendiri — masih terus disempurnakan dan akan diisi karya asli.",
    status: "planning",
    accent: "blue",
    image: null,
    links: [],
  },
  {
    id: "coming-soon",
    number: "04",
    title: "Karya Berikutnya",
    category: "Segera hadir",
    description:
      "Slot ini disiapkan untuk proyek nyata pertama. Nantikan, ya!",
    status: "soon",
    accent: "paper",
    image: null,
    links: [],
  },
];
