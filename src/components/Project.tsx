import { IProject } from "../interfaces/project";

const Project = ({
  name,
  long_description,
  stack,
  images,
  deploy_url,
}: IProject) => {
  return (
    <a href={deploy_url} target="_blank" rel="noreferrer">
      <article className="project">
        <div className="d-flex">
          <img
            src={images[0]}
            width={64}
            height={64}
            alt={name}
            style={{ marginRight: 15 }}
          />
          <div className="d-flex flex-column">
            <h3>{name}</h3>
            <p className="description">{long_description}</p>
            <div className="stack d-flex flex-wrap">
              {stack.map((name) => (
                <span className="stack-chip">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </a>
  );
};

export default Project;
