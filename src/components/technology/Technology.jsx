import css from "./Technology.module.css";
import Platform from "./Platform.jsx";
import CSSimg from "../../assets/css-3.png";
import JS from "../../assets/js.png";
import HTML from "../../assets/html.png";
import React from "../../assets/react.png";
import Node from "../../assets/nodejs.png";
import Git from "../../assets/git.png";
import Express from "../../assets/expressjs.svg";
import Bootstrap from "../../assets/bootstrap.png";
import Wordpress from "../../assets/wordpress.png";
import MySQL from "../../assets/mysql-logo.svg";

const Technology = () => {
  const technologies = [
    { name: "HTML", image: HTML },
    { name: "CSS", image: CSSimg },
    { name: "JavaScript", image: JS },
    { name: "React", image: React },
    { name: "Node", image: Node },
    { name: "Express", image: Express },
    { name: "Bootstrap", image: Bootstrap },
    { name: "Wordpress", image: Wordpress },
    { name: "MySQL", image: MySQL },
    { name: "Git", image: Git },
  ];

  return (
    <section
      className={` ${css.technologySection} container text-center d-flex justify-content-center align-items-center flex-column gap-4`}
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
    >
      <div className="row">
        <h2 className="fw-bold text-center">Technlogy Stack</h2>
      </div>
      <p>Tools and technologies that power my development work.</p>

      <div className="row w-100 d-flex flex-wrap justify-content-center gap-4 p-4 mt-4">
        {technologies.map((tech, index) => (
          <Platform key={index} name={tech.name} image={tech.image} />
        ))}
      </div>
    </section>
  );
};

export default Technology;
