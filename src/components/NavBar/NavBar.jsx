import "./NavBar.css"
import React from "react"
// import { useRef } from "react"
// import Home from "../Home/Home"
// import Proyects from "../Proyects/Proyects"
// import Skills from "../Skills/Skills"

export default function NavBar () {

   

    return (
        <div className="container-navbar">
            <div className="btn-nav">  
           
            <button className="btn-navegacion">Home</button>
           
            <button className="btn-navegacion">Skills</button>
           
            <button className="btn-navegacion" >Proyects</button>
            <button className="btn-navegacion" >Contact</button>
            </div>

        </div>
    )
}