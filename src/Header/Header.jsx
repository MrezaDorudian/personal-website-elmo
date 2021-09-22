import logo from "../Images/projects/logo.png";
import "./Header.css";

const Header = () => {

  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <img src={logo} alt="logo" />
      <p>Mohammad Reza</p>
      </div>
    </nav>
  );
};

export default Header;
