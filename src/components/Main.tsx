import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import ScrollSpy from "react-ui-scrollspy";

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <ScrollSpy offsetTop={300} offsetBottom={300}>
          <About />
          <Experience />
          <Projects />
        </ScrollSpy>
      </div>
    </main>
  );
};

export default Main;
