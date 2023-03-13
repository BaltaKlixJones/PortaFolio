import "./Contact.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="container-contact">
      <div className="contact">
        {/* <Link to = "https://www.instagram.com/baltaklixj_/" target="_blank">
        
        <img
          style={{
            width: " 50px",
            height: "50px",
            justifyContent: "space-between",
            margin: "1%",
            marginTop: "30px",
            marginLeft: "40px",
            marginRight: " 40px",
            opacity: "0.5",
          }}
          src="https://eltallerdehector.com/wp-content/uploads/2022/06/cd939-logo-instagram-png.png"
          alt=""
        />
        </Link> */}
        <Link to ="https://www.linkedin.com/in/baltasar-klix-jones-180b38256/" target="_blank">
        <img
        style={{
            width: " 50px",
            height: "50px",
            justifyContent: "space-between",
            margin: "1%",
            marginTop: "30px",
            marginLeft: "40px",
            marginRight: " 40px",
            opacity: "0.5",
          }}
          
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt=""
        />
        </Link>
        <Link to ="https://github.com/BaltaKlixJones" target="_blank">
        <img
        style={{
            width: " 50px",
            height: "50px",
            justifyContent: "space-between",
            margin: "1%",
            marginTop: "30px",
            marginLeft: "40px",
            marginRight: " 40px",
            opacity: "0.5",
          }}
         
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
          alt=""
        />
        </Link>
        <Link to ="https://wa.me/543874188653?text=Hola!%20Me%20llamo%20...%20y%20me%20gustaría%20saber%20...%20" target="_blank">
        <img
        style={{
            width: " 50px",
            height: "50px",
            justifyContent: "space-between",
            margin: "1%",
            marginTop: "30px",
            marginLeft: "40px",
            marginRight: " 40px",
            opacity: "0.5",
          }}
          
          src="https://es.logodownload.org/wp-content/uploads/2018/10/whatsapp-logo-11.png"
          alt=""
        />
        </Link>
      </div>
    </div>
  );
}
