"use client";

import { useEffect } from "react";

/**
 * Animasi masuk ringan untuk elemen ber-atribut `data-reveal`.
 * Konten tetap terlihat bila JS mati (kelas `reveal-ready` hanya
 * ditambahkan oleh komponen ini) dan dilewati saat prefers-reduced-motion.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    // Elemen yang sudah terlihat di viewport langsung ditandai visible
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("is-visible");
    });
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    els.forEach((el) => !el.classList.contains("is-visible") && observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);

  return null;
}
