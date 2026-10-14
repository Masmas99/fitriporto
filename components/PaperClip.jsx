/**
 * PaperClip — dekorasi klip kertas.
 *  variant="binder" : binder clip hitam/berwarna (penjepit kertas besar)
 *  variant="clip"   : paper clip kawat
 * Selalu dekoratif (aria-hidden).
 */
export default function PaperClip({
  variant = "binder",
  color = "dark",
  className = "",
  style,
}) {
  if (variant === "clip") {
    return (
      <span className={`paperclip paperclip--wire paperclip--${color} ${className}`} style={style} aria-hidden="true">
        <svg viewBox="0 0 28 72" width="28" height="72">
          <path
            d="M9 20 V56 a5 5 0 0 0 10 0 V14 a8 8 0 0 0 -16 0 V58 a11 11 0 0 0 22 0 V22"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </span>
    );
  }

  return (
    <span className={`paperclip paperclip--binder paperclip--${color} ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 64 70" width="64" height="70">
        {/* handles (kawat) */}
        <path
          d="M18 36 L12 6 a5 5 0 0 1 10 -1 L27 30"
          fill="none"
          stroke="#B9C3CF"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M46 36 L52 6 a5 5 0 0 0 -10 -1 L37 30"
          fill="none"
          stroke="#DCE3EA"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* body */}
        <path d="M6 32 H58 L54 62 H10 Z" fill="currentColor" />
        <path d="M6 32 H58 L57 38 H7 Z" fill="rgba(255,255,255,.22)" />
        <path d="M10 62 H54 L53 66 H11 Z" fill="rgba(0,0,0,.25)" />
      </svg>
    </span>
  );
}
