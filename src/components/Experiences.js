import Experience from "./Experience";
import "../assets/styles/Experiences.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Experiences = ({experiences, setExperiences}) => {

  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);

  return (
    <div className="main-content-section" id="experiences">
      <h3 className="section-h-exp section-h-gen">
        <span className="section-no">02. </span>My Experiences
      </h3>
      <div className=" main-content-desc" data-aos="fade-up">
        <Experience experiences={experiences} setExperiences={setExperiences} />
      </div>
    </div>
  );
};
export default Experiences;
