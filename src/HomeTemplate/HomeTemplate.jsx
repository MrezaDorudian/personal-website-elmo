import About from "../About/About";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";

const HomeTemplate = () => {
    return ( 
        <div className="home-wrapper">
            <div className="about-project-items">
                <About/>
                <Projects/>
                <Footer/>
            </div>

        </div>
     );
}
 
export default HomeTemplate;