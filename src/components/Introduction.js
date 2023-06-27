import "../assets/styles/Introduction.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Introduction = () => {

useEffect(() => {
  AOS.init({duration:500});
},[]);

  return (
    <div className="main-content-intro">
      <p className="main-content-p" data-aos="fade-up">Hi, my name is</p>
      <h1 data-aos="fade-down">Mohammadreza</h1>
      <h2 data-aos="fade-down">I'm a Graduated Computer Engineering Student</h2>
      <p className="main-content-desc intro-p" data-aos="fade-down">
        I have a great passion to code and learn new technologies and tools.
      </p>
    </div>
  );
};

export default Introduction;
