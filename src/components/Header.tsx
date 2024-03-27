import {
  GITHUB_URL,
  GITLAB_URL,
  LINKEDIN_URL,
  MAIL_URL,
} from "../utils/constants";

const Header = () => (
  <header className="header">
    <div className="content">
      <h1 className="f-s-44 m-b-10">Mateo Jacques</h1>
      <h2 className="f-s-24 m-b-60 f-w-400">Fullstack Developer</h2>
      <nav id="navigation" className="navigation">
        <a
          href="#about"
          className="section-link f-s-14"
          data-to-scrollspy-id="about"
        >
          About
        </a>
        <a
          href="#experience"
          className="section-link f-s-14"
          data-to-scrollspy-id="experience"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="section-link f-s-14"
          data-to-scrollspy-id="projects"
        >
          Projects
        </a>
      </nav>
      <a
        className="btn download-cv-btn"
        href="src/assets/cv_english.pdf"
        download="Mateo Jacques CV"
        target="_blank"
      >
        <p>
          Download CV <i className="fas fa-download" />
        </p>
      </a>
      <div className="links">
        <a
          href={LINKEDIN_URL}
          className="f-s-30"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href={GITHUB_URL}
          className="f-s-30"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href={GITLAB_URL}
          className="f-s-30"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-gitlab" />
        </a>
        <a href={MAIL_URL} className="f-s-30" target="_blank" rel="noreferrer">
          <i className="fas fa-at" />
        </a>
      </div>
    </div>
  </header>
);

export default Header;
