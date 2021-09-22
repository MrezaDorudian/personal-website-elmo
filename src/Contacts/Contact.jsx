import "./Contact.css";
import MyPic from "../Images/myPic.jpg";
import { ReactComponent as Linkedin } from "../Images/Icons/linkedin.svg";
import { ReactComponent as GitHub } from "../Images/Icons/github.svg";
const Contact = () => {
    const socials = [
        {
            link:"https://www.linkedin.com/in/mohammad-reza-dorudian-63a715212",
            component: <Linkedin className="sIcon" />,
            id:0
        },
        {
            link:"https://github.com/MrezaDorudian",
            component: <GitHub className="sIcon" />,
            id:1
        }
      ];

      const renderSocial = (item) => {
          return(
                    <a className="social-icons" key={item.id} href={item.link} rel="noreferrer" target="_blank">
                        {item.component}
                    </a>
          )};

    return ( 
        <div className="contact-all-wrapper">
            <div className="img-wrapper">
                <img src={MyPic} alt="MyImg" />
            </div>
            <div className="contact-wrapper">
                  <div className="contact-items">
                  {socials.map(renderSocial)}
                  </div>
                  <p className="email">Email: mr.dorudian@gmail.com</p>
              </div>
        </div>
     );
}
 
export default Contact;