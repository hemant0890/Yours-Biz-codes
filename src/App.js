import "./App.css";
import Navbar from "./components/Navbar.js";
import Middle from "./components/Middle.js";
import Middle2 from "./components/Middle2.js";
import Footer from "./components/Footer.js";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="middle1">
          <Middle />
        </div>
        <div className="middle2">
          <Middle2 />
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
