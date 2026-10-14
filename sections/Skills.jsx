import PlaceholderText from "@/components/PlaceholderText";
import SectionHeading from "@/components/SectionHeading";
import Tape from "@/components/Tape";
import PaperClip from "@/components/PaperClip";
import { Ruler } from "@/components/Doodles";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  const tilts = [-2, 1.5, -1];
  const tapes = ["pink", "yellow", "blue"];

  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="sheet sheet--holes sheet--lined" style={{ "--tilt": "-0.4deg" }} data-reveal>
        <PaperClip variant="binder" color="pink" className="sheet__binder sheet__binder--center" />

        <SectionHeading
          id="skills-title"
          number="03"
          kicker="Skills & tools"
          title="WHAT I BRING"
          highlight="BRING"
          note="checklist-ku"
        />

        <p className="skills__notice" role="note">
          <span className="stamp">DRAFT</span>
          Daftar di bawah masih placeholder dan akan diisi setelah dikonfirmasi oleh Fitri.
          Tidak ada persentase atau klaim tingkat keahlian.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <article
              key={group.id}
              className={`skill-note skill-note--${group.color}`}
              style={{ "--tilt": `${tilts[i % 3]}deg` }}
              aria-labelledby={`skill-${group.id}`}
            >
              <Tape color={tapes[i % 3]} className="skill-note__tape" />
              <h3 id={`skill-${group.id}`} className="skill-note__title">
                {group.title}
              </h3>
              <p className="skill-note__subtitle hand">{group.subtitle}</p>
              <ul className="checklist">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="checklist__box" aria-hidden="true" />
                    <PlaceholderText value={item} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <Ruler className="skills__ruler" />
      </div>
    </section>
  );
}
