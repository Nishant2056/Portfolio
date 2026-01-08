import { Navbar } from "react-bootstrap";
import { MdOutlineLightMode } from "react-icons/md";
import css from "./Navbar.module.css";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";

const AppNavbar = () => {
  const { theme, toggleThemeHandler } = useContext(ThemeChangeContext);
  return (
    <Navbar className={`container-fluid navbar-dark p-3 ${css.customNavbar}`}>
      <a
        href="#"
        data-aos="fade-down"
        data-aos-delay="0"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Home
      </a>
      <a
        href="#about"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        About
      </a>
      <a
        href="#projects"
        data-aos="fade-down"
        data-aos-delay="400"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Projects
      </a>
      <a
        href="#contact"
        data-aos="fade-down"
        data-aos-delay="600"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        Contact
      </a>
      <button
        type="button"
        className={` ${css.customBtn} d-flex align-items-center`}
        onClick={() => {
          toggleThemeHandler();
        }}
      >
        <MdOutlineLightMode />
      </button>
    </Navbar>
  );
};

export default AppNavbar;
