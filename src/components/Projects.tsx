import { GITLAB_URL } from "../utils/constants";
import { PROJECTS } from "../utils/mock";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <p>
        Much of the code I write on a daily basis is private, but a graph with
        my contributions can be seen on my{" "}
        <a href={GITLAB_URL} target="_blank" rel="noreferrer">
          Gitlab profile
        </a>
        .
      </p>
      <div className="own-projects">
        {PROJECTS.map((project) => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
