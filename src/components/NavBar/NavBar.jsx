import "./NavBar.css"
import React from "react"
import {  animateScroll as scroll } from "react-scroll";

export default function NavBar () {

   
    // const scrollToTop = () => {
    //     scroll.scrollToTop();
    // };

    // const scrollToBottom = () => {
    //     scroll.scrollToBottom()
    // };
    // const scrollToSkills = () => {
    //     scroll.scrollTo(480, 0)
    // }

    // const scrollToProyects = () => {
    //     scroll.scrollTo(1180, 0)
    // }

    return (
        
        <nav className="nav" id="navbar">
        <div className="nav-content">
          
          <ul  className="nav-items">
            <li className="nav-item">Home</li>
            <li  className="nav-item">Skills</li>
            <li  className="nav-item">Proyects</li>
            <li  className="nav-item">Contact</li>
          </ul>
        </div>
      </nav>
    )
}