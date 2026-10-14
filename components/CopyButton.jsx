"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";

/** Menyalin teks ke clipboard. Hanya dipakai bila email sudah asli. */
export default function CopyButton({ text, label = "Salin email" }) {
  const [state, setState] = useState("idle"); // idle | copied | error

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
    } catch {
      setState("error");
    }
  };

  return (
    <button type="button" className="btn btn--ghost" onClick={copy}>
      <Icon name={state === "copied" ? "check" : "copy"} size={18} />
      {state === "copied" ? "Tersalin!" : state === "error" ? "Gagal menyalin" : label}
      <span className="sr-only" aria-live="polite">
        {state === "copied" ? "Email berhasil disalin" : ""}
      </span>
    </button>
  );
}
