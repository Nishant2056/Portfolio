import css from "./About.module.css";
const About = () => {
  return (
    <section
      className={`${css.aboutSection} container text-center d-flex justify-content-center align-items-center`}
    >
      <h2
        className="text-center"
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
      >
        About Me
      </h2>
    </section>
  );
};

export default About;
