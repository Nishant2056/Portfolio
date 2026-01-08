import css from "./About.module.css";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";

const About = () => {
  const { theme } = useContext(ThemeChangeContext);

  const style = {
    background: theme === "light" ? "#030712" : "#ffffff",
    transition: "all 0.5s ease",
  };
  return (
    <section className={`${css.aboutSection} container`}>
      <h2 style={style} className="text-center">
        About Me
      </h2>
    </section>
  );
};

export default About;
