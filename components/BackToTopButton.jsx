"use client";

import Icon from "./Icon";

/** Scroll kembali ke atas lalu memindahkan fokus ke awal halaman. */
export default function BackToTopButton() {
  const handleClick = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    const home = document.getElementById("home");
    if (home) {
      home.setAttribute("tabindex", "-1");
      home.focus({ preventScroll: true });
    }
  };

  return (
    <button type="button" className="btn btn--yellow back-to-top" onClick={handleClick}>
      <Icon name="arrowUp" size={18} />
      Back to Top
    </button>
  );
}
