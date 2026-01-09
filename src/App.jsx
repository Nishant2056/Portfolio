import "./App.css";
import Navbar from "./components/Nav/Navbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeChangeContext } from "./store/themeChangeStore.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";
import Hero from "./components/hero/Hero.jsx";
import About from "./components/about/About.jsx";
import Technology from "./components/technology/Technology.jsx";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration (ms)
      easing: "ease-in-out",
      once: true, // animate only once
      offset: 100, // trigger distance
    });
  }, []);

  const { theme } = useContext(ThemeChangeContext);

  const style = {
    background: theme === "light" ? "#ffffff" : "#030712",
    color: theme === "light" ? "#000000" : "#ffffff",
    transition: "all 0.5s ease",
    minHeight: "100vh",
  };
  return (
    <div style={style}>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Technology></Technology>
    </div>
  );
}

export default App;
