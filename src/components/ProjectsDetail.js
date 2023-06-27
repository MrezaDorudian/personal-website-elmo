
import OverlayL from "../assets/images/OverlayL.PNG";
import OverlayS from "../assets/images/OverlayS.PNG";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsDetail = ({projects, links}) => {

  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);
  return (
    <>
            {projects.map((project) => (
          

      <div className="project-content" key={project.id} data-aos="slide-up">
          <div className="proj-imgs" >
              <a href={project.link} target="_blank" rel="noreferrer">
              <img className="overlay-l" src={OverlayL} alt="My Projects"/>
              <img className="overlay-s" src={OverlayS} alt="My Projects"/>
              <img className="project-img" src={project.img} alt="My Projects"/>
              </a>
          </div>
          <div className="proj-exp" >
            <h2 data-aos="fade-up">
              <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
            </h2>
            <div className="content-wrapper">
                <p className="project-exp-content">
                {project.content}
                </p>
            </div>
            <div className="proj-links">
            <a href={project.github} target="_blank" rel="noreferrer" className="social-links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                {" "}
                <path d={links[0].path}></path>
              </svg>
            </a>{project.link ?             <a href={project.link} target="_blank" rel="noreferrer" className="social-links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                {" "}
                <path d={links[1].path}></path>
              </svg>
            </a> : <></>}

            </div>

          </div>
      </div>

))}
      </>
  );
};

export default ProjectsDetail;
