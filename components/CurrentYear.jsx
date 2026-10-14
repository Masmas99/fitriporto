"use client";

/** Tahun berjalan, dihitung di browser agar selalu mutakhir. */
export default function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
