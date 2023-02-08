import "./Proyects.css";

export default function Proyects() {
  return (
    <div className="titulo-proyects">
      PROYECTS
      <div className="cards-container">
        <div className="card">
          <img
            src="https://cdn.dribbble.com/users/1081076/screenshots/2832850/pokemongo.gif"
            alt="yourtext1"
            className="card-image"
          />
          <h3 className="card-title">API Pokemones</h3>
          <p className="card-text">
            Este fue el Proyecto Individual de Soy Henry, donde se extrajo
            informacion de la API de Pokemones
          </p>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Video
          </button>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Codigo
          </button>
        </div>
        <div className="card">
          <img
            src="https://miro.medium.com/max/650/0*ibhadGeHuO10edW6.png"
            alt="yourtext2"
            className="card-image"
          />
          <h3 className="card-title">CHAT ONLINE</h3>
          <p className="card-text">
            Este fue un proyecto creado para hablar en linea con distintas
            personas{" "}
          </p>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Video
          </button>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Codigo
          </button>
        </div>
        <div className="card">
          <img
            src="https://i.pinimg.com/originals/0f/6e/a6/0f6ea6a66666af19f0739fa60055b9f4.png"
            alt="yourtext3"
            className="card-image"
          />
          <h3 className="card-title">Pagina de Vehiculos</h3>
          <p className="card-text">
            Esta pagina fue creada con Python para el Proyecto final de
            CoderHouse, donde se pueden ver distintos tipos de vehiculos y su
            hsitoria{" "}
          </p>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Video
          </button>
          <button className="video-button">
            <i className="fa fa-video-camera video-icon" aria-hidden="true"></i>
            Codigo
          </button>
        </div>
      </div>
    </div>
  );
}
