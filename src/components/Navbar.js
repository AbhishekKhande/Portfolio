// import { useRef } from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-items" id="About">
        <p id="About">About</p>
      </div>
      <div className="navbar-items" id="Work">
        <p id="Work">Work</p>
      </div>
      <div className="navbar-items" id="Expertise">
        <p id="Expertise">Expertise</p>
      </div>
      <div className="navbar-items" id="Contact">
        <p id="Contact">Contact</p>
      </div>
    </div>
  );
}

export default Navbar;
