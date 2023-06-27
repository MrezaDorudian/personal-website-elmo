import { Link } from "react-router-dom";
// import { useState } from "react";
import "../assets/styles/DropDown.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DropDown = ({ navbarMenu, openMenu, setOpenMenu }) => {

  const menuToggler = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };

  useEffect(() => {
    AOS.init({duration:500,
      delay:0,
      easing: "ease-in-out",
    });
  },[]);

  return (
    <div className={`burger-wrapper ${openMenu ? "long" : "short"}`}>
      <li className="navbar-icon" data-aos="flip-up">
        <Link to="#" onClick={menuToggler} className="navbar-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className={`burger-menu ${openMenu ? "close" : "open"}`}
          >
            <path d="M 3 8 A 2.0002 2.0002 0 1 0 3 12 L 47 12 A 2.0002 2.0002 0 1 0 47 8 L 3 8 z M 3 23 A 2.0002 2.0002 0 1 0 3 27 L 47 27 A 2.0002 2.0002 0 1 0 47 23 L 3 23 z M 3 38 A 2.0002 2.0002 0 1 0 3 42 L 47 42 A 2.0002 2.0002 0 1 0 47 38 L 3 38 z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
            className={`burger-menu ${!openMenu ? "close" : "open"}`}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
        </Link>
      </li>

      <div className={`dropdown ${openMenu ? "open" : "close"}`}>
        {navbarMenu.map((item) => {
          return (
            <li className="navbar-item s-navbar-item" key={item.id}>
              <a href={item.path} onClick={menuToggler}>
                <span>{item.number}.</span>
                <br></br>
                {item.title}
              </a>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;
