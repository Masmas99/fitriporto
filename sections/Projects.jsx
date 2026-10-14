import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Sparkle } from "@/components/Doodles";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="board">
        <SectionHeading
          id="projects-title"
          number="02"
          kicker="Selected works"
          title="MY PROJECTS"
          highlight="PROJECTS"
          note="karya asli segera menyusul!"
          onDark
        />

        <p className="board__intro">
          Belum ada proyek yang selesai untuk ditampilkan. Kartu di bawah adalah
          ide dan rencana yang sedang aku siapkan — statusnya ditulis apa adanya.
        </p>

        <div className="project-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <Sparkle className="board__spark board__spark--a float" />
        <Sparkle className="board__spark board__spark--b float float--slow" />
      </div>
    </section>
  );
}
