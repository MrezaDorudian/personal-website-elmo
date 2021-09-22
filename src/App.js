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
  );
}

export default App;
