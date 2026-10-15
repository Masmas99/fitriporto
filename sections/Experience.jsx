import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import Tape from "@/components/Tape";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="sheet sheet--lined experience__sheet" data-reveal>
        <Tape color="pink" className="sheet__top-tape" />

        <SectionHeading
          id="experience-title"
          number="02"
          kicker="Pengalaman kerja & magang"
          title="MY EXPERIENCE"
          highlight="EXPERIENCE"
          note="belajar langsung di tempat kerja"
        />

        <div className="experience__grid">
          {experiences.map((experience, index) => (
            <article
              key={experience.id}
              className="experience-card"
              style={{ "--tilt": `${[-1, 1.2, -0.6][index % 3]}deg` }}
              aria-labelledby={`experience-${experience.id}`}
            >
              <Tape
                color={["yellow", "blue", "pink"][index % 3]}
                className="experience-card__tape"
              />
              <div className="experience-card__logo">
                <Image src={experience.logo} alt="" width={96} height={96} loading="eager" />
              </div>
              <div className="experience-card__details">
                <span className="experience-card__role">{experience.role}</span>
                <h3 id={`experience-${experience.id}`}>{experience.company}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
