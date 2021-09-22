import { Card } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./ProjectCards.css";
import Mortal from "../Images/projects/MortalKombat.JPG";
import DigitalRec from "../Images/projects/HandwrittenDigitRecognition.png";
import EvAlgo from "../Images/projects/Evolutionary.JPG";
import Telnet from "../Images/projects/TelnetProtocol.JPG";
import CacheSim from "../Images/projects/Cache_Simulator.jpg";

const ProjectCards = () => {

    const projects = [
{
    name:"Mortal Kombat Q Edition (comming soon)",
    img: Mortal,
    link:"#",
    id: 0
},
{
    name:"Handwritten Digit Recognition",
    img: DigitalRec,
    link:"https://github.com/MrezaDorudian/Handwritten-Digit-Recognition",
    id: 1
},
{
    name:"Evolutionary Algorithm Game",
    img: EvAlgo,
    link:"https://github.com/MrezaDorudian/Evolutionary-Algorithm",
    id: 2
},
{
    name:"Telnet Protocol",
    img: Telnet,
    link:"https://github.com/MrezaDorudian/Telnet-Protocol",
    id: 3
},
{
    name:"Cache Simulator",
    img: CacheSim,
    link:"https://github.com/MrezaDorudian/Cache-simulator",
    id: 4
}
    ];
    console.log(projects)

    const renderProjects = (item) => {
        return(
            <a className="project-btn col-6 col-md-4" href={item.link} rel="noreferrer" target="_blank">
            <Card className="project-card" key={item.id}>
            <Card.Body className="project-card-body">
                <Card.Title className="project-card-title">{item.name}</Card.Title>
                <Card.Img className="home-card-img" src={item.img} />
            </Card.Body>
          </Card>
          </a>
        )};
    return ( 
<>
{projects.map(renderProjects)}
</>
     );}
 
export default ProjectCards;