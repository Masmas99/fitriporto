/**
 * KONTAK & SOSIAL MEDIA
 * Selama `href` bernilai null, item ditampilkan sebagai placeholder
 * (bukan link aktif). Isi `value` dan `href` setelah data asli tersedia.
 *
 * Contoh setelah dikonfirmasi:
 *   email: { value: "fitri@domain.com", href: "mailto:fitri@domain.com" }
 */
export const contact = {
  email: {
    label: "Email",
    value: "[email-kamu@example.com]",
    href: null,
  },
};

export const socialLinks = [
  {
    id: "instagram",
    label: "Instagram",
    value: "[@username-instagram]",
    href: null,
    icon: "instagram",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "[nama-profil-linkedin]",
    href: null,
    icon: "linkedin",
  },
  {
    id: "github",
    label: "GitHub",
    value: "[username-github]",
    href: null,
    icon: "github",
  },
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
