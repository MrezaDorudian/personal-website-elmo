import Contact from "../Contacts/Contact";
import "./About.css";
const About = () => {
    return ( 
        <div className="about-wrapper">
            <div className="about-inside">
                <h3 className="about-title">About ME</h3>
                <p className="about-exp">
                Computer engineering student @ <span><a href="https://aut.ac.ir/" target="_blank" rel="noreferrer">Amirkabir University</a></span>
                <br/>
                Working @ <span><a href="https://www.roshan-ai.ir/" target="_blank" rel="noreferrer">Roshan-ai</a></span>
                </p>
                <div>
                    <Contact/>
                </div>
            </div>
        </div>
     );
}
 
export default About;