import "../assets/styles/Projects.css";
import ProjectsDetail from "./ProjectsDetail";
const Projects = ({links, projects}) => {

  return (
    <div className="main-content-section" id="projects">
      <h3 className="section-h-gen section-h-proj">
        <span className="section-no">03. </span>Some Code Blocks I've Built
      </h3>
      <ProjectsDetail projects={projects} links={links} />
    </div>
  );
};

export default Projects;
