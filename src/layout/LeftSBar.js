import "../assets/styles/Main.css";
import "../assets/styles/LeftSBar.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const LeftSBar = ({ social }) => {

  useEffect(() => {
    AOS.init({duration:1500,
    delay:50
    });
  },[]);

  return (
    <li data-aos="fade-down">
      <a
        href={social.link}
        rel="noreferrer"
        target="_blank"
        className="social-links"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 30 30"
        >
          {" "}
          <path d={social.path}></path>
        </svg>
      </a>
    </li>
  );
};
export default LeftSBar;
