<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter as Router} from "react-router-dom"
import Navbar from "./layout/Navbar";
import Main from "./layout/Main";
import Loading from "./layout/Loading";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";


//--------socials imports--------//
import Github from "../src/assets/icons/github.svg";
import Linkedin from "../src/assets/icons/linkedin.svg";
// import Instagram from "../src/assets/icons/instagram.svg";
import Link from "../src/assets/icons/link.svg";

//--------Projects imports--------//
import MyBlog from "../src/assets/images/HB.JPG";
import Dashboard from "../src/assets/images/MKQ.JPG";
import WeatherApp from "../src/assets/images/RNN.JPG";
import RepoList from "../src/assets/images/EA.JPG";
import Footer from "./layout/Footer";


//--------AOS library for animation on scroll--------//
import AOS from "aos";
import "aos/dist/aos.css";

const navbarMenu = [
  { path: "#about", id: 0, name: "about", number: "01", title: "About" },
  {
    path: "#experiences",
    id: 1,
    name: "experiences",
    number: "02",
    title: "Experiences",
  },
  {
    path: "#projects",
    id: 2,
    name: "projects",
    number: "03",
    title: "Projects",
  },
  { path: "#contact", id: 3, name: "contact", number: "04", title: "Contact" },
];

const socials = [
  {
    id: 0,
    name: "github",
    link: "https://github.com/Mrezadorudian",
    icon: Github,
    path: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
  },
  {
    id: 1,
    name: "linkedin",
    link: "https://www.linkedin.com/in/mohammadreza-doroodian/",
    icon: Linkedin,
    path: "M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z",
  },
];

const links =[
  {
    id: 0,
    icon: Github,
    path: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z",
  },
  {
    id: 1,
    icon: Link,
    path: "M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z"
  }
];

const projects = [
  {
    id:0,
    title:"Mortal Kombat Q-Edition",
    img: Dashboard,
    content: "Created a Mortal Kombat game using the GODOT game engine and GDScript, mastering game development concepts such as physics, input handling, and animation.",
    github:"https://github.com/MrezaDorudian/Mortal-Kombat"
  }
  ,
  {
    id:1,
    title:"HunterBee",
    img: MyBlog,
    content: "Designed a threat-hunting system that detects and mitigates potential threats with a 90% success rate through effective log management.",
    github:"https://github.com/MrezaDorudian/HunterBee"
  },
  {
    id:2,
    title:"Price Prediction",
    img: WeatherApp,
    content: "Classified EUR/USD currency in one-minute timeframes into five classes using linear regression, logistic regression, and RNNs.",
    github:"https://github.com/MrezaDorudian/EURUSD-Price-Prediction"
  },
  {
    id:3,
    title:"Evolutionary Algorithm",
    img: RepoList,
    content: "Automated a game similar to Flappy Bird using an evolutionary algorithm and neural networks to optimize the neural network and achieve a score of 1000, surpassing the average human player’s score.",
    github:"https://github.com/MrezaDorudian/Evolutionary-Algorithm"
  },
  
    ];

function App() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isLoading,setIsLoading] = useState(true);


  //---------------- Experiences -----------------//
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      title: "AI Developer",
      isSelected: true,
      company: "Roshan AI",
      location: "Tehran, Iran",
      date: "Jun. 2021 - Dec. 2021",
      content: "Collaborated effectively with team members on three deep learning projects involving face recognition, OCR, and RNN models.",
    },
    {
      id: 3,
      title: "BSc.",
      isSelected: false,
      company: "Amirkabir University of Technology",
      location: "Tehran, Iran",
      date: "Sep 2018 - Feb 2023",
      content: "BSc. in computer engineering",
    }
]);

  useEffect(() => {

   setTimeout(() => {
      setIsLoading(false)
      }, 800);
      AOS.init({duration:500,
        delay:0,
        easing: "ease-in-out",
      });
  },[]);

  return (
      <Router>

        {isLoading && <Loading/>}
        {!isLoading && <Navbar navbarMenu={navbarMenu} openMenu={openMenu} setOpenMenu={setOpenMenu} />}
        {!isLoading && <Main socials={socials} links={links} projects={projects} openMenu={openMenu} experiences={experiences} setExperiences={setExperiences} />}
        {!isLoading && <Footer/>}

      </Router>  
=======
=======
>>>>>>> a8ed75d99ea705db763e51d98a5ce348a7138951
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header.jsx";
import HomeTemplate from "./HomeTemplate/HomeTemplate";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HomeTemplate />
      </div>
    </Router>
<<<<<<< HEAD
>>>>>>> a8ed75d99ea705db763e51d98a5ce348a7138951
=======
>>>>>>> a8ed75d99ea705db763e51d98a5ce348a7138951
  );
}

export default App;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> a8ed75d99ea705db763e51d98a5ce348a7138951
=======
>>>>>>> a8ed75d99ea705db763e51d98a5ce348a7138951
