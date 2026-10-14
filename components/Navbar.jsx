"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Tape from "./Tape";
import { Sparkle } from "./Doodles";
import { navItems } from "@/data/site";

/**
 * Navbar — sticky, smooth-scroll (via CSS scroll-behavior), active section
 * indicator (IntersectionObserver), dan menu mobile yang dapat dibuka/tutup.
 */
export default function Navbar({ brand = "Fitri" }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const close = useCallback(() => setOpen(false), []);

  // Active section indicator
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Escape menutup menu; resize ke desktop menutup menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => e.matches && setOpen(false);
    const onClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !toggleRef.current?.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onClickOutside);
    mq.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onClickOutside);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  const handleNavClick = (id) => {
    setActive(id);
    close();
  };

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navigasi utama">
        <Tape color="yellow" className="navbar__tape navbar__tape--left" />
        <Tape color="pink" className="navbar__tape navbar__tape--right" />

        <a href="#home" className="navbar__brand" onClick={() => handleNavClick("home")}>
          <Sparkle className="navbar__brand-star" />
          <span>{brand}</span>
          <span className="sr-only"> — kembali ke awal halaman</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="primary-menu"
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
        </button>

        <ul
          id="primary-menu"
          ref={menuRef}
          className={`navbar__menu ${open ? "is-open" : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar__link ${active === item.id ? "is-active" : ""}`}
                aria-current={active === item.id ? "true" : undefined}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
