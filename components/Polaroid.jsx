import Image from "next/image";
import Icon from "./Icon";
import Tape from "./Tape";

/**
 * Foto bergaya polaroid. Bila `src` null → placeholder yang jelas
 * (tidak memakai foto orang lain sebagai pengganti).
 */
export default function Polaroid({
  src = null,
  alt = "",
  caption,
  placeholderLabel = "Foto Fitri menyusul",
  tilt = 3,
  tape = "yellow",
  size = "lg",
  className = "",
  priority = false,
}) {
  return (
    <figure className={`polaroid polaroid--${size} ${className}`} style={{ "--tilt": `${tilt}deg` }}>
      <Tape color={tape} className="polaroid__tape" />
      <div className="polaroid__photo">
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 80vw, 360px"
            priority={priority}
            loading={priority ? undefined : "eager"}
          />
        ) : (
          <div className="polaroid__placeholder" role="img" aria-label={`Placeholder foto: ${placeholderLabel}`}>
            <Icon name="camera" size={40} strokeWidth={1.8} />
            <span className="polaroid__placeholder-title">FOTO</span>
            <span className="polaroid__placeholder-note">{placeholderLabel}</span>
          </div>
        )}
      </div>
      {caption && <figcaption className="polaroid__caption hand">{caption}</figcaption>}
    </figure>
  );
}
