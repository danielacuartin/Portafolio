
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Logos } from "./components/Logos";
import { Certificados } from "./components/Certificados";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";







function App() {
  return (
    <div className="App">

      
      <NavBar />
      <div className='fondo'>
      <Banner />
 
      </div>
      <Projects />
      <Logos />
      <Certificados />
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
