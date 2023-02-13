import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Proyects2 from "./components/Poryects2/Proyects2";
import TituloLabs from "./components/Labs/TituloLabs";

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <Home />
        <Body />
        <Skills />
        <TituloLabs/>
        <Proyects2 />
        
        <Contact />
      </div>
    </div>
  );
}

export default App;
