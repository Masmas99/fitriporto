import Tape from "./Tape";

/**
 * SectionHeading — label kecil bernomor (seperti label printer) + judul
 * display tebal dengan highlight kuning + catatan tulisan tangan opsional.
 */
export default function SectionHeading({
  id,
  number,
  kicker,
  title,
  highlight,
  note,
  align = "left",
  onDark = false,
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`section-heading section-heading--${align} ${onDark ? "section-heading--dark" : ""}`}>
      <p className="section-heading__kicker">
        {number && <span className="section-heading__number">{number}</span>}
        <span>{kicker}</span>
      </p>
      <h2 id={id} className="section-heading__title">
        {highlight ? (
          <>
            {parts[0]}
            <span className="marker">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {note && (
        <p className="section-heading__note hand">
          <Tape color="pink" className="section-heading__note-tape" />
          {note}
        </p>
      )}
    </div>
  );
}
