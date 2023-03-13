import "./Skills.css";
import Titulo from "../Titulo/Title";
import Css from "../../Imagenes/CssLogo.png"
import Js from "../../Imagenes/JsLogo.png"
import Html from "../../Imagenes/HTMLLogo.png"
import Git from "../../Imagenes/GitLogo.png"
import Jquery from "../../Imagenes/JqueryLogo.svg"
import Node from "../../Imagenes/NodeLogo.png"
import React from "../../Imagenes/ReactLogo.png"
import Redux from "../../Imagenes/ReduxLogo.png"
import Postgre from "../../Imagenes/Postgrelogo.svg"
import Express from "../../Imagenes/ExpressLogo.svg"


export default function Skills() {
  return (
    <div className="skills-container">
      <div className="titulo-skills1">
        <Titulo/>
        <hr />
        <h1 style={{color: "black", textAlign: "left" , marginLeft: "40px" }}>Skills</h1>
        <h3 style={{color: "black", textAlign: "left" , marginLeft: "40px" }}>A lo largo de mis estudios he aprendido distintas habilidades /  Throughout my studies I learned different skills.</h3>
        
      </div>

      <img
        className="skills"
        src={Html}
        alt=""
      />

      <img
        className="skills"
        src={Css}
        alt=""
      />

      <img
        className="skills-js"
        src={Js}
        alt=""
      />

      <img
        
        className="skills-react"
        src={React}
        alt=""
      />

      <img
        
        className="skills-redux"
        src={Redux}
        alt=""
      />

      <img
        className="skills"
        src={Node}
        alt=""
      />

      <img
        className="skills-jquery"
        src={Express}
        alt=""
      />

      <img
       
        className="skills-git"
        src={Git}
        alt=""
      />

      <img
        // style={{height:"300px", width:"300px",  marginBottom:"-0%", marginRight: "0px",}}
        className="skills-jquery"
        src={Jquery}
        alt=""
      />

      <img
        className="skills"
        src={Postgre}
        alt=""
      />
    </div>
  );
}
