import "./App.css";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Body from "./components/Body/Body";
import Skills from "./components/Skills/Skills";
import Proyects from "./components/Proyects/Proyects";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Home />
        <NavBar />
        <Body />
        <Skills />
        <Proyects />
        <Form />
        <Contact />
      </div>
    </div>
  );
}

export default App;
