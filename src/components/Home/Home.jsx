import "./Home.css";
import yo from "../../Imagenes/img-mia2.jpg"


export default function Home() {
  return (
    <div className="container-home">
      <div className="titulo-home">
        <h5 style={{color: "#1b406e", fontFamily:"Impact", letterSpacing:"3px"}}> 
          <b>

          Baltasar Klix Jones
          </b>
          </h5>
        <img
          className="img-mia"
          src={yo}
          alt=""
          />
          <h5 style={{marginLeft: "5px",  fontFamily:"Impact", letterSpacing:"3px", color: "black"}}> Full Stack Developer</h5>
      
      </div>
    </div>
  );
}
