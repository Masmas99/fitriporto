/** Doodle & stationery SVG dekoratif (semuanya aria-hidden). */

const base = (className, style) => ({
  className: `doodle ${className}`,
  style,
  "aria-hidden": true,
  focusable: "false",
});

export function Star({ className = "", style, filled = false }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 48 48" width="48" height="48">
      <path
        d="M24 4l5.6 12.6L43 18l-10 9.4L35.8 42 24 35l-11.8 7L15 27.4 5 18l13.4-1.4z"
        fill={filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Sparkle({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 40 40" width="40" height="40">
      <path
        d="M20 2c1.5 9 4 12 18 18-14 6-16.5 9-18 18-1.5-9-4-12-18-18 14-6 16.5-9 18-18z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Squiggle({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 160 24" width="160" height="24">
      <path
        d="M2 14c10-12 20 10 30 0s20-12 30 0 20 12 30 0 20-12 30 0 20 10 36-2"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Arrow({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 120 80" width="120" height="80">
      <path
        d="M6 70c18-40 50-58 98-52"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="1 0"
      />
      <path
        d="M90 6l16 12-16 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Heart({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 40 36" width="40" height="36">
      <path
        d="M20 33S3 22.5 3 11.5A8.5 8.5 0 0 1 20 8a8.5 8.5 0 0 1 17 3.5C37 22.5 20 33 20 33z"
        fill="currentColor"
        stroke="#20344D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Swirl({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 80 80" width="80" height="80">
      <path
        d="M40 40c0-4 6-4 6 0 0 8-12 8-12 0 0-12 18-12 18 0 0 16-24 16-24 0 0-20 30-20 30 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Pencil({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 240 36" width="240" height="36">
      <rect x="40" y="6" width="160" height="24" fill="#F5D34E" stroke="#20344D" strokeWidth="2" />
      <rect x="40" y="6" width="160" height="8" fill="#FBE68E" />
      <rect x="200" y="6" width="22" height="24" rx="2" fill="#D88DBA" stroke="#20344D" strokeWidth="2" />
      <rect x="194" y="6" width="8" height="24" fill="#C4CBD4" stroke="#20344D" strokeWidth="2" />
      <path d="M40 6 L8 18 L40 30 Z" fill="#E9C9A0" stroke="#20344D" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 18 L18 14.3 L18 21.7 Z" fill="#20344D" />
    </svg>
  );
}

export function Ruler({ className = "", style }) {
  const ticks = Array.from({ length: 21 }, (_, i) => i);
  return (
    <svg {...base(className, style)} viewBox="0 0 260 44" width="260" height="44">
      <rect x="1" y="1" width="258" height="42" rx="4" fill="#C9A47C" stroke="#815B3B" strokeWidth="2" />
      <rect x="3" y="30" width="254" height="11" rx="2" fill="#B48B62" />
      {ticks.map((i) => (
        <line
          key={i}
          x1={10 + i * 12}
          x2={10 + i * 12}
          y1="1"
          y2={i % 5 === 0 ? 20 : 12}
          stroke="#5A3D25"
          strokeWidth="1.6"
        />
      ))}
    </svg>
  );
}

export function Envelope({ className = "", style }) {
  return (
    <svg {...base(className, style)} viewBox="0 0 120 84" width="120" height="84">
      <rect x="3" y="3" width="114" height="78" rx="4" fill="#F7F3E9" stroke="#20344D" strokeWidth="2.5" />
      <path d="M3 8l57 40 57-40" fill="none" stroke="#20344D" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M60 52c-6-6-14-1-10 6l10 9 10-9c4-7-4-12-10-6z" fill="#D88DBA" stroke="#20344D" strokeWidth="2" />
    </svg>
  );
}
