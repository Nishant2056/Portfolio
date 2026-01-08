import css from "./About.module.css";
import DescriptionConnect from "./DescriptionConnect";
import DescriptionOne from "./DescriptionOne";
import Achievement from "./Achievement";
import SmartSolutions from "./SmartSolutions";

const About = () => {
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
          <SmartSolutions />
          <SmartSolutions />
          <SmartSolutions />
        </div>
      </div>
    </section>
  );
};

export default About;
