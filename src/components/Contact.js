import "../assets/styles/Contact.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {

  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);
  
  return (
    <div className="main-content-section" id="contact" data-aos="fade-up">
      <h3 className="section-h-exp section-h-gen" id="contact-h">
        <span className="section-no">04. </span>Get in Touch
      </h3>
      <div className=" main-content-desc contact-desc">
      Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </div>
      <a className="btn contact-btn" href="mailto:mr.dorudian@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a>
    </div>
  );
};
export default Contact;