import "./Skills.css";
import Titulo from "../Titulo/Title";
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
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
        alt=""
      />

      <img
        className="skills"
        src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
        alt=""
      />

      <img
        className="skills-js"
        src="https://seeklogo.com/images/O/ottawa-js-logo-394DB38073-seeklogo.com.png"
        alt=""
      />

      <img
        
        className="skills-react"
        src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
        alt=""
      />

      <img
        
        className="skills-redux"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Redux_Logo.png/1200px-Redux_Logo.png"
        alt=""
      />

      <img
        className="skills"
        src="https://cdn-icons-png.flaticon.com/512/919/919825.png"
        alt=""
      />

      <img
        className="skills"
        src="https://skillshack.blob.core.windows.net/uploads/express.webp"
        alt=""
      />

      <img
       
        className="skills-git"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/2560px-Git-logo.svg.png"
        alt=""
      />

      <img
        // style={{height:"300px", width:"300px",  marginBottom:"-0%", marginRight: "0px",}}
        className="skills-jquery"
        src="https://www.logo.wine/a/logo/JQuery/JQuery-Logo.wine.svg"
        alt=""
      />

      <img
        className="skills"
        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
        alt=""
      />
    </div>
  );
}
