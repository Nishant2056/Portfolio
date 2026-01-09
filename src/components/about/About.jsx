import css from "./About.module.css";
import DescriptionOne from "./DescriptionOne";
import InfoList from "./InfoList";
import SmartSolutions from "./SmartSolutions";
import SmartSolutionsLogo from "../../assets/Smart-solutions-logo.png";
import ZcraLogo from "../../assets/zcralogo.png";
import { IoIosMailUnread } from "react-icons/io";
import Hire from "./Hire";
import {
  FaGlobe,
  FaMapMarkerAlt,
  FaFolderOpen,
  FaLaptopCode,
  FaAward,
} from "react-icons/fa";
import { VscDebugDisconnect } from "react-icons/vsc";
import { GrAchievement } from "react-icons/gr";

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
      logo: ZcraLogo,
      bgColor: "rgb(23,153,148,0.3) ",
    },
  ];

  const infoListsData = [
    {
      title: "Let's Connect",
      icon: <VscDebugDisconnect />,
      items: [
        { name: "bhurtelnishant@gmail.com", icon: <IoIosMailUnread /> },
        { name: "nishantbhurtel.com.np", icon: <FaGlobe /> },
        { name: "Kathmandu, Nepal", icon: <FaMapMarkerAlt /> },
      ],
      duration: "600",
    },
    {
      title: "Achievements",
      icon: <GrAchievement />,
      items: [
        { name: "Involved in Multiple Projects", icon: <FaFolderOpen /> },
        { name: "Expert in modern web development", icon: <FaLaptopCode /> },
        {
          name: "Delivered multiple projects professionally",
          icon: <FaAward />,
        },
      ],
      duration: "800",
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
            {infoListsData.map((info, index) => (
              <div key={index} className={`${css.connection}`}>
                <InfoList data={info} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {smartSolutionsData.map((data, index) => (
            <SmartSolutions key={index} data={data} />
          ))}
          <Hire />
        </div>
      </div>
    </section>
  );
};

export default About;
