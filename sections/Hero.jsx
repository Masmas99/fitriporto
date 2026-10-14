import Icon from "@/components/Icon";
import PaperClip from "@/components/PaperClip";
import Polaroid from "@/components/Polaroid";
import StickyNote from "@/components/StickyNote";
import Tape from "@/components/Tape";
import { Arrow, Heart, Pencil, Sparkle, Squiggle, Star, Swirl } from "@/components/Doodles";
import { profile } from "@/data/profile";

export default function Hero() {
  const [first, ...rest] = profile.fullName.toUpperCase().split(" ");
  const [taglineA, taglineB] = profile.tagline.split(", ");

  return (
    <section id="home" className="section hero" aria-labelledby="hero-title">
      <div className="sheet sheet--hero sheet--holes" style={{ "--tilt": "-0.6deg" }}>
        <PaperClip variant="binder" color="dark" className="sheet__binder sheet__binder--left" />
        <PaperClip variant="binder" color="yellow" className="sheet__binder sheet__binder--right" />
        <Tape color="grid" className="sheet__corner-tape sheet__corner-tape--bl" />

        <div className="hero__grid">
          <div className="hero__text">
            <p className="label-maker">
              <span>HELLO, I&apos;M</span>
            </p>

            <h1 id="hero-title" className="hero__name">
              <span className="hero__name-line">{first}</span>
              <span className="hero__name-line hero__name-line--outline">{rest.join(" ")}</span>
            </h1>

            <Squiggle className="hero__squiggle" />

            <p className="hero__role">
              <span className="marker">{profile.role}</span>
            </p>
            <p className="hero__tagline hand">
              — {taglineA}, <span className="hero__tagline-em">{taglineB}</span>
            </p>

            <p className="hero__desc">{profile.heroDescription}</p>

            <div className="hero__cta">
              <a href="#projects" className="btn btn--yellow">
                Jelajahi Karya
                <Icon name="arrowRight" size={18} />
              </a>
              <a href="#about" className="btn btn--ghost">
                Kenali Aku
                <Icon name="arrowDown" size={18} />
              </a>
            </div>
          </div>

          <div className="hero__collage">
            <Polaroid
              src={profile.photo}
              alt={`Foto ${profile.fullName}`}
              caption="it's me! ✿"
              tilt={4}
              tape="pink"
              priority
              className="hero__polaroid"
            />

            <StickyNote color="yellow" tilt={-7} className="hero__sticky">
              <p className="hand">
                Always learning,
                <br />
                always growing!
              </p>
              <Heart className="hero__sticky-heart" />
            </StickyNote>

            <div className="sticker sticker--round float" aria-hidden="true">
              <span>hi!</span>
            </div>
            <div className="sticker sticker--tag float float--slow" aria-hidden="true">
              creative
              <br />
              mode: ON
            </div>

            <Arrow className="hero__arrow" />
            <Star className="hero__star hero__star--a float" filled />
            <Sparkle className="hero__star hero__star--b float float--slow" />
            <Swirl className="hero__swirl" />
          </div>
        </div>

        <Pencil className="hero__pencil" />
      </div>
    </section>
  );
}
