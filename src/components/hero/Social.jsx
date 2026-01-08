import css from "./Social.module.css";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Socials = () => {
  const { theme } = useContext(ThemeChangeContext);
  const linkStyle = {
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/Nishant2056",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nishant-bhurtel-860287243/",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:bhurtelnishant@gmail.com",
      icon: <MdEmail />,
    },
  ];

  return (
    <div
      className={`${css.socialIcons} links d-flex justify-content-between w-25`}
    >
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          style={linkStyle}
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <div className="d-flex flex-row gap-2 align-items-center">
            {social.icon}
            {social.name}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Socials;
