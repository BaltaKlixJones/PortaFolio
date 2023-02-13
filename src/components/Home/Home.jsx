import "./Home.css";


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
          src="https://josecarlosalmansa.com/img/monitor-web.png"
          alt=""
          />
          <h5 style={{marginLeft: "5px",  fontFamily:"Impact", letterSpacing:"3px"}}> Full Stack Developer</h5>
      
      </div>
    </div>
  );
}
