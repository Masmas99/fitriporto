import Image from "next/image";
import Icon from "./Icon";
import PaperClip from "./PaperClip";
import Tape from "./Tape";
import { projectStatus } from "@/data/projects";

/**
 * ProjectCard — kartu scrapbook untuk satu proyek.
 * Link hanya dirender bila `project.links` berisi URL asli.
 */
export default function ProjectCard({ project, index = 0 }) {
  const status = projectStatus[project.status] ?? projectStatus.idea;
  const tilts = [-2.2, 1.6, -1.2, 2.4];
  const tilt = tilts[index % tilts.length];
  const decor = index % 2 === 0 ? "clip" : "tape";
  const titleId = `project-${project.id}-title`;

  return (
    <article
      className={`project-card project-card--${project.accent}`}
      style={{ "--tilt": `${tilt}deg` }}
      aria-labelledby={titleId}
      data-reveal
    >
      {decor === "clip" ? (
        <PaperClip variant="clip" color="silver" className="project-card__clip" />
      ) : (
        <Tape color={index % 4 === 1 ? "pink" : "yellow"} className="project-card__tape" />
      )}

      <div className="project-card__thumb">
        {project.image ? (
          <Image src={project.image} alt={`Tampilan proyek ${project.title}`} fill sizes="(max-width: 768px) 90vw, 300px" />
        ) : (
          <div className="project-card__thumb-placeholder" role="img" aria-label={`Placeholder visual untuk ${project.title}`}>
            <Icon name={project.status === "soon" ? "lock" : "image"} size={34} strokeWidth={1.8} />
            <span>Visual menyusul</span>
          </div>
        )}
        <span className="project-card__number" aria-hidden="true">
          {project.number}
        </span>
      </div>

      <div className="project-card__body">
        <p className="project-card__category">{project.category}</p>
        <h3 id={titleId} className="project-card__title">
          {project.title}
        </h3>
        <p className="project-card__desc">{project.description}</p>

        <p className={`status-stamp status-stamp--${project.status}`}>
          <Icon name={status.icon} size={16} />
          <span>
            <span className="sr-only">Status: </span>
            {status.label}
          </span>
        </p>

        {project.links?.length > 0 && (
          <ul className="project-card__links">
            {project.links.map((link) => (
              <li key={link.href}>
                <a className="btn btn--small btn--ghost" href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                  <Icon name="arrowRight" size={16} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
