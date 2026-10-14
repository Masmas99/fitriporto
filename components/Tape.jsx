/** Masking tape dekoratif. color: yellow | pink | blue | paper | grid */
export default function Tape({ color = "yellow", className = "", style }) {
  return <span className={`tape tape--${color} ${className}`} style={style} aria-hidden="true" />;
}
