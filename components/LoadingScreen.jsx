"use client";

import { useEffect, useState } from "react";

const MINIMUM_DISPLAY_MS = 650;
const EXIT_DURATION_MS = 350;

export default function LoadingScreen() {
  const [phase, setPhase] = useState("loading");
  const [message, setMessage] = useState("Menyiapkan portofolio...");

  useEffect(() => {
    const startedAt = performance.now();
    let loadHandler;
    let readyTimer;
    let exitTimer;
    let disposed = false;

    const pageLoaded =
      document.readyState === "complete"
        ? Promise.resolve()
        : new Promise((resolve) => {
            loadHandler = resolve;
            window.addEventListener("load", loadHandler, { once: true });
          });

    const dismiss = () => {
      const failedImages = Array.from(document.images).filter(
        (image) => image.loading !== "lazy" && image.complete && image.naturalWidth === 0
      );

      if (failedImages.length) {
        console.error(
          "Some portfolio images failed to load:",
          failedImages.map((image) => image.currentSrc || image.src)
        );
        setMessage("Sebagian gambar tidak berhasil dimuat.");
      }

      const remainingTime = Math.max(
        0,
        MINIMUM_DISPLAY_MS - (performance.now() - startedAt)
      );
      readyTimer = window.setTimeout(() => {
        if (disposed) return;
        setPhase("exiting");
        exitTimer = window.setTimeout(() => {
          if (!disposed) setPhase("hidden");
        }, EXIT_DURATION_MS);
      }, remainingTime);
    };

    Promise.all([pageLoaded, document.fonts.ready]).then(dismiss, (error) => {
      console.error("Failed while waiting for portfolio assets:", error);
      setMessage("Sebagian aset tidak berhasil dimuat.");
      dismiss();
    });

    return () => {
      disposed = true;
      if (loadHandler) window.removeEventListener("load", loadHandler);
      window.clearTimeout(readyTimer);
      window.clearTimeout(exitTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`loading-screen${phase === "exiting" ? " loading-screen--exiting" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={message}
    >
      <div className="loading-screen__card">
        <span className="loading-screen__tape" aria-hidden="true" />
        <span className="loading-screen__sparkle" aria-hidden="true">
          ✦
        </span>
        <p className="loading-screen__brand">Fitri</p>
        <span className="loading-screen__spinner" aria-hidden="true" />
        <p className="loading-screen__message">{message}</p>
        <span className="loading-screen__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </div>
    </div>
  );
}
