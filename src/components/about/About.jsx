import css from "./About.module.css";
import DescriptionConnect from "./DescriptionConnect";
import DescriptionOne from "./DescriptionOne";
import Achievement from "./Achievement";
import SmartSolutions from "./SmartSolutions";
import SmartSolutionsLogo from "../../assets/Smart-solutions-logo.png";

const About = () => {
  const smartSolutionsData = [
    {
      role: "Web Developer",
      company: "Smart Solutions Technology",
      date: "Dec 2024 - Present",
      description:
        "As a developer, collaborating with clients and teams to build high-performance systems that solve complex challenges across industries.",
      logo: SmartSolutionsLogo,
      bgColor: "rgb(0,84,163,0.3) ",
    },
    {
      role: "Front-End Developer",
      company: "Zurich Climate Resilience Alliance",
      date: "May 2025 - Present",
      description:
        "Developing modern, scalable front-end solutions with a focus on performance, usability, and seamless collaboration across teams.",
      logo: SmartSolutionsLogo,
      bgColor: "rgb(23,153,148,0.3) ",
    },
  ];

  return (
    <section
      className={`${css.aboutSection} container text-center d-flex justify-content-center align-items-center flex-column gap-4`}
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-center">About Me</h2>

      <p>
        Blending logic and creativity to build purposeful web experiences
        through clean code, structured design, and modern technologies.
      </p>

      <div className="container">
        <div className="row">
          <div className="col-md-6 p-4 ">
            <DescriptionOne />
          </div>
          <div className="col-md-6 d-flex flex-column gap-2 p-4">
            <div className={`${css.connection}`}>
              <DescriptionConnect />
            </div>
            <div className={`${css.connection}`}>
              <Achievement />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {smartSolutionsData.map((data, index) => (
            <SmartSolutions key={index} data={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
