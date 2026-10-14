import { Caveat, DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--nf-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--nf-body",
  display: "swap",
});

const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--nf-hand",
  display: "swap",
});

export const metadata = {
  title: "Fitri Muliawati — Multidisciplinary Creative",
  description:
    "Portofolio scrapbook Fitri Muliawati, seorang multidisciplinary creative yang selalu belajar dan bertumbuh. Kenali Fitri, ide proyek, dan cara menghubunginya.",
  openGraph: {
    title: "Fitri Muliawati — Multidisciplinary Creative",
    description: "Always learning, always growing! Portofolio scrapbook Fitri Muliawati.",
    type: "website",
    locale: "id_ID",
  },
};

export const viewport = {
  themeColor: "#2466BC",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} ${hand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
