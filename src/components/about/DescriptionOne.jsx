import hello from "../../assets/hello.png";
import css from "./DescriptionOne.module.css";
import code from "../../assets/code.jpg";

const DescriptionOne = () => {
  return (
    <div
      className={`${css.descOne} container-fluid $`}
      style={{ background: { code } }}
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="700"
    >
      <h3 className="d-flex gap-2 align-items-center">
        <img src={hello} alt="hello-img" /> Hello, I'm Nishant Bhurtel
      </h3>
      <p className="text-start mt-4">
        I am a software developer focused on building high-quality,
        user-centered applications using modern technologies. I take pride in
        writing clean, efficient, and maintainable code while solving real-world
        problems through thoughtful engineering and design.
      </p>
      <p className="text-start">
        I continuously challenge myself to learn, improve, and deliver impactful
        digital solutions. With a strong attention to detail and a growth-driven
        mindset, I aim to create software that is reliable, scalable, and
        meaningful.
      </p>
      <p className="text-start">
        I approach development with a clear focus on quality, performance, and
        long-term maintainability. I value structured thinking, collaboration,
        and continuous improvement, and I enjoy working on projects that
        challenge my skills and push me to grow. Whether refining an existing
        system or building something from the ground up, I bring consistency,
        responsibility, and attention to detail to everything I create.
      </p>
    </div>
  );
};

export default DescriptionOne;
