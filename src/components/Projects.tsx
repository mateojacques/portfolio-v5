import { PROJECTS } from "../utils/mock";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      {PROJECTS.map((project) => (
        <Project key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
