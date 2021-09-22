import ProjectCards from "./ProjectCards";
import "./Projects.css";
const Projects = () => {
    return ( 
        <div className="project-wrapper">
            <div className="about-inside">
                <h3 className="projects-title">My projects</h3>
                <div className="row"> 
                    <ProjectCards/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;