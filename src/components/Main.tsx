import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";

const Main = () => {
  return (
    <main className="main">
      <div className="content">
        <About/>
        <Experience />
        <Projects/>
      </div>
    </main>
  );
};

export default Main;
