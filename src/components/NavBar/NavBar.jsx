import "./NavBar.css";
import React from "react";
import { animateScroll as scroll } from "react-scroll";


export default function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };
  const scrollToAbout = () => {
    scroll.scrollTo(850, 0);
  };

  const srollToSkils = () => {
    scroll.scrollTo(1170, 0);
  }

  const scrollToProyects = () => {
    scroll.scrollTo(2180, 0);
  };




  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <ul className="nav-items">
          <li onClick={scrollToTop} className="nav-item">
            Home
          </li>
          <li onClick={scrollToAbout} className="nav-item">
            About
          </li>
          <li onClick={srollToSkils} className="nav-item">
            Skills
          </li>
          <li onClick={scrollToProyects} className="nav-item">
            Labs
          </li>
          <li onClick={scrollToBottom} className="nav-item">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
