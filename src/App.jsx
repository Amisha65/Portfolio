import "./App.css";
import Headerr from "./Componants/Headerr";
import Hello from "./Componants/Hello";
import About from "./Componants/About";
import MySkills from "./Componants/MySkills";
import Footer from "./Componants/Footer";
import Contact from "./Componants/Contact";
import Education from "./Componants/Education";
import { useEffect } from "react";

function App() {
  return (
    <>
      <Headerr />
      <section id="home">
        <Hello />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
