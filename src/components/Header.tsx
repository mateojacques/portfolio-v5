const Header = () => {
  return (
    <header className="header">
      <div className="content">
        <h1 className="f-s-48 m-b-10">Mateo Jacques</h1>
        <h2 className="f-s-24 m-b-20 f-w-400">Fullstack Developer</h2>
        <p className="f-s-16 m-b-60">
          Dreaming experiences then building them.
        </p>
        <nav className="navigation m-b-60">
          <a href="#about" className="active">
            About
          </a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
        <div className="links">
          <a href="#" className="f-s-30">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="f-s-30">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="f-s-30">
            <i className="fab fa-gitlab"></i>
          </a>
          <a href="#" className="f-s-30">
            <i className="fas fa-at"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
