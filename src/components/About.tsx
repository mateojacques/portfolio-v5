import { GITHUB_URL } from "../utils/constants";

const About = () => {
  return (
    <div id="about">
      <p>Creative developer eager to learn.</p>
      <br />
      <p>
        I believe there is still much to explore in the realm of what can be
        achieved on the web. My goal is to contribute to projects that push
        those boundaries, offering innovative solutions to modern problems.
      </p>
      <br />
      <p>
        Currently working at{" "}
        <a href="https://www.avenidamas.com" target="_blank">
          avenida+
        </a>
        . Contributing to{" "}
        <a href={GITHUB_URL} target="_blank">
          open source projects
        </a>
        .
      </p>
    </div>
  );
};

export default About;
