import "./Form.css";
import React from "react";


export default function Form() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "Hola Baltasar ...",
  // });

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert(" ¡Mensaje enviado !");
  //   setFormData({
  //     name: "",
  //     email: "",
  //     message: "Hola Baltasar ...",
  //   });
  // };

  return (
    // <form className="contact-form" onSubmit={handleSubmit}>
    //   <h1>Contact</h1>
    //   <div className="form-group">
    //     <label htmlFor="name">Nombre:</label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="message">Mensaje:</label>
    //     <textarea
    //       id="message"
    //       name="message"
    //       value={formData.message}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <button type="submit">Enviar</button>
    // </form>
    <div className="center-container">
      <div className="card-container">
        <div className="card-header">
         
          <h2>Baltasar Klix Jones</h2>
          <h3>Desarrollador Full Stack</h3>
        </div>
        <div className="card-body">
          <p> Para contactarse conmigo, lo pueden hacer a través de mi email <b> baltakj@icloud.com </b> 
           ;o también a través de mi número de<b>  teléfono  </b>.
          </p>
        </div>
      </div>
    </div>
  );
}
