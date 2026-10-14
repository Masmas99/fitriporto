"use client";

import { useEffect, useState } from "react";

export default function TypewriterText({ paragraphs }) {
  const characters = paragraphs.map((paragraph) => Array.from(paragraph));
  const totalCharacters = characters.reduce((total, paragraph) => total + paragraph.length, 0);
  const [characterCount, setCharacterCount] = useState(totalCharacters);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    let typingTimer;
    const target = document.getElementById("about-description");
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();
        setCharacterCount(0);
        setIsTyping(true);

        let count = 0;
        typingTimer = window.setInterval(() => {
          count = Math.min(count + 1, totalCharacters);
          setCharacterCount(count);

          if (count === totalCharacters) {
            window.clearInterval(typingTimer);
            setIsTyping(false);
          }
        }, 8);
      },
      { threshold: 0.2 }
    );
    observer.observe(target);

    return () => {
      observer.disconnect();
      window.clearInterval(typingTimer);
    };
  }, [totalCharacters]);

  let offset = 0;

  return (
    <div id="about-description">
      <div className="sr-only">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div aria-hidden="true">
        {characters.map((paragraph, index) => {
          const visibleCount = Math.max(0, Math.min(characterCount - offset, paragraph.length));
          const text = paragraph.slice(0, visibleCount).join("");
          const showCursor = isTyping && characterCount >= offset && characterCount < offset + paragraph.length;
          offset += paragraph.length;

          return (
            <p key={index} className={index === 0 ? "about__lead" : undefined}>
              {text}
              {showCursor && <span className="about__typing-cursor">|</span>}
            </p>
          );
        })}
      </div>
    </div>
  );
}
