import "./NavBar.css"
import React from "react"
import {  animateScroll as scroll } from "react-scroll";

export default function NavBar () {

   
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    const scrollToBottom = () => {
        scroll.scrollToBottom()
    };
    const scrollToSkills = () => {
        scroll.scrollTo(480, 0)
    }

    const scrollToProyects = () => {
        scroll.scrollTo(1180, 0)
    }

    return (
        
        <nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ul  className="nav-items">
            <li onClick={scrollToTop} className="nav-item">Home</li>
            <li onClick={scrollToSkills} className="nav-item">Skills</li>
            <li onClick={scrollToProyects} className="nav-item">Proyects</li>
            <li onClick={scrollToBottom} className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
    )
}