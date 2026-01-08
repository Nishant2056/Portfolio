import css from "./Hero.module.css";
import Socials from "./Social";

const Hero = () => {
  return (
    <>
      <center>
        <div
          className={`${css.heroHeading} container-fluid`}
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          <h1>Nishant Bhurtel</h1>
          <h2>Software Developer</h2>
          <p style={{ marginTop: "16px" }}>
            Building meaningful digital experiences with clean code and a strong
            design mindset.
          </p>
        </div>
        <Socials />
      </center>
    </>
  );
};

export default Hero;
