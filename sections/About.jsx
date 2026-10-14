import PaperClip from "@/components/PaperClip";
import PlaceholderText from "@/components/PlaceholderText";
import Polaroid from "@/components/Polaroid";
import SectionHeading from "@/components/SectionHeading";
import StickyNote from "@/components/StickyNote";
import Tape from "@/components/Tape";
import { Sparkle, Star } from "@/components/Doodles";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="sheet sheet--torn" style={{ "--tilt": "0.5deg" }} data-reveal>
        <Tape color="yellow" className="sheet__top-tape" />

        <SectionHeading
          id="about-title"
          number="01"
          kicker="Tentang aku"
          title="ABOUT ME"
          highlight="ME"
          note="nice to meet you!"
        />

        <div className="about__grid">
          <div className="about__photo-col">
            <Polaroid
              src={profile.photoAbout}
              alt={`Foto ${profile.fullName}`}
              caption="hello there~"
              tilt={-3}
              tape="yellow"
              size="md"
            />
            <StickyNote color="pink" tilt={5} className="about__quote" as="figure">
              <blockquote className="hand">&ldquo;{profile.quote}&rdquo;</blockquote>
            </StickyNote>
          </div>

          <div className="about__text">
            {profile.aboutParagraphs.map((p, i) => (
              <p key={i} className={i === 0 ? "about__lead" : undefined}>
                {p}
              </p>
            ))}

            <div className="about__interests">
              <h3 className="mini-title">
                <Star className="mini-title__icon" filled />
                Minat &amp; fokus
                <span className="confirm-tag">perlu dikonfirmasi</span>
              </h3>
              <ul className="label-list">
                {profile.interests.map((item, i) => (
                  <li key={i} className="label-chip" style={{ "--tilt": `${[-2, 1.5, -1][i % 3]}deg` }}>
                    <PlaceholderText value={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="index-card" aria-labelledby="biodata-title" style={{ "--tilt": "2deg" }}>
            <PaperClip variant="clip" color="pink" className="index-card__clip" />
            <h3 id="biodata-title" className="index-card__title">
              Biodata
              <Sparkle className="index-card__spark" />
            </h3>
            <dl className="index-card__list">
              {profile.biodata.map((row) => (
                <div key={row.label} className="index-card__row">
                  <dt>{row.label}</dt>
                  <dd>
                    <PlaceholderText value={row.value} />
                  </dd>
                </div>
              ))}
            </dl>
            <p className="index-card__hint">
              Data bertanda kurung siku akan diperbarui setelah dikonfirmasi.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
