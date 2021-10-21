import ProjectCards from "./ProjectCards";
import "./Projects.css";
const Projects = () => {
    return ( 
        <div className="project-wrapper">
            <div className="about-inside">
                <h3 className="projects-title">My projects</h3>
                <div className="container">
                    <div className=" cards-wrapper row"> 
                        <ProjectCards/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;