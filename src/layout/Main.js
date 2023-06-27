import Introduction from "../components/Introduction";
import AboutMe from "../components/AboutMe";
import "../assets/styles/Main.css";
import "../assets/styles/Navbar.css";
import LeftSBar from "./LeftSBar";
import RightSBar from "./RightSBar";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Main = ({ socials, links, projects, openMenu, experiences, setExperiences}) => {
  return (
    <div className={`main-wrapper ${openMenu ? "blur" : ""}`}>
      <div className="side-nav">
        <ul className="side-nav-list">
          {socials.map((social) => {
            return <LeftSBar key={social.id} social={social} />;
          })}
          <li>
            <div className="nav-line"></div>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Introduction />
        <AboutMe />
        <Experiences experiences={experiences} setExperiences={setExperiences} />
        <Projects links={links} projects={projects} />
        <Contact />
      </div>
      <div className="side-nav right-nav">
        <ul className="side-nav-list right-nav-list">
          <RightSBar />
        </ul>
      </div>
    </div>
  );
};

export default Main;
