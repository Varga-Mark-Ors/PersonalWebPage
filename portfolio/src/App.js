import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
