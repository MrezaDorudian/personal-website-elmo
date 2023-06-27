// import { useEffect } from "react";
// import { useState } from "react";
import "./Footer.css";
const Footer = () => {

  const socialLinks = [
    "https://linkedin.com/in/fatemeh-doroodian-7376a683",
    "http://facebook.com",
    "http://twitter.com",
    "https://github.com/Elhamdorudian"
  ];

  return (
    <footer>
        <div className="footer row">
          <div className="footer-brand col-md-6 order-md-1">
            <div className="copy-right">
              <h3>Learning is fun</h3>
              <p>
                Copyright &copy; <span id="year"></span>
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center order-md-3">
            <div className="social px-5">
              <div className=" footer-social d-flex justify-content-center">
                <div className="p-3">
                  <a
                    href={socialLinks[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    href={socialLinks[1]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    href={socialLinks[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter fa-2x"></i>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    href={socialLinks[3]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
