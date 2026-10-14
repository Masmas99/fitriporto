import Icon from "./Icon";
import PlaceholderText from "./PlaceholderText";

/**
 * ContactCard — satu kanal kontak.
 * - Dengan `href`: link aktif.
 * - Tanpa `href`: kartu placeholder statis (bukan link, tidak bisa diklik).
 */
export default function ContactCard({ label, value, href, icon, tilt = 0, external = true }) {
  const content = (
    <>
      <span className="contact-card__icon">
        <Icon name={icon} size={22} />
      </span>
      <span className="contact-card__text">
        <span className="contact-card__label">{label}</span>
        <PlaceholderText value={value} className="contact-card__value" />
      </span>
    </>
  );

  if (href) {
    return (
      <a
        className="contact-card contact-card--active"
        href={href}
        style={{ "--tilt": `${tilt}deg` }}
        {...(external && !href.startsWith("mailto:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
        <Icon name="arrowRight" size={18} className="contact-card__arrow" />
      </a>
    );
  }

  return (
    <div className="contact-card contact-card--placeholder" style={{ "--tilt": `${tilt}deg` }}>
      {content}
      <span className="contact-card__badge">Belum tersedia</span>
    </div>
  );
}
