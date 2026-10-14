/** Sticky note. color: yellow | pink | blue | paper */
export default function StickyNote({ color = "yellow", tilt = -4, className = "", children, as: Tag = "div" }) {
  return (
    <Tag className={`sticky sticky--${color} ${className}`} style={{ "--tilt": `${tilt}deg` }}>
      {children}
    </Tag>
  );
}
