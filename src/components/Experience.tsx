import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <section id="experience">
      <ExperienceCard
        sinceDate="Apr 2022"
        untilDate="Present"
        position="Fullstack Developer"
        company="avenida+"
        companyUrl="https://avenidamas.com/"
      >
        <ul className="f-s-14">
          <li>
            <p>Development of reusable, generic components in React.</p>
          </li>
          <li>
            <p>
              Development of microservices with Node, Express, MySQL and
              MongoDB.
            </p>
          </li>
          <li>
            <p>Unit testing and E2E with Jest and Cypress.</p>
          </li>
          <li>
            <p>Version control with Git and GitLab.</p>
          </li>
          <li>
            <p>Agile methodologies (Scrum) with Jira and Clickup.</p>
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        sinceDate="Dec 2021"
        untilDate="Mar 2022"
        position="Frontend Developer"
        company="GKA"
        companyUrl="https://www.trendygm.com/guorking-agency/"
      >
        <ul className="f-s-14">
          <li>
            <p>Frontend development with active participation in design.</p>
          </li>
          <li>
            <p>
              E-commerce platforms management and customization (Woocomerce,
              Shopify, Tiendanube).
            </p>
          </li>
          <li>
            <p>Content Management Systems (CMS).</p>
          </li>
          <li>
            <p>Wordpress theme customization.</p>
          </li>
        </ul>
      </ExperienceCard>
      <ExperienceCard
        sinceDate="Sep 2021"
        untilDate="Nov 2022"
        position="Frontend Developer (Internship)"
        company="Alkemy"
        companyUrl="https://www.alkemy.org/"
      >
        <p className="f-s-14">
          I completed Alkemy's React Acceleration Program, which consisted in
          the development of a website and CMS for the ONG "Somos Más". The
          project was done with a team of eight members and we used agile
          methodologies (SCRUM) and Jira + Bitbucket for the code management.
          The project was built with React, Redux, Bootstrap and tested with
          Jest and React Testing Library.
        </p>
      </ExperienceCard>
    </section>
  );
};

export default Experience;
