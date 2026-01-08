import { Navbar, Container } from "react-bootstrap";
import moon from "../../assets/moon.png";
import sun from "../../assets/sun.png";
import css from "./Navbar.module.css";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import { ImGift } from "react-icons/im";

const AppNavbar = () => {
  const { theme, toggleThemeHandler } = useContext(ThemeChangeContext);
  return (
    <Navbar className={`container p-3 ${css.customNavbar}`}>
      <Container className="d-flex justify-content-center">
        <ul className="nav nav-pills gap-4">
          <li className="nav-item">
            <a
              href="#overview"
              className="nav-link"
              data-aos="fade-down"
              data-aos-delay="0"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Overview
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#technology"
              className="nav-link"
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Technology
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#experience"
              className="nav-link"
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Experience
            </a>
          </li>

          <li className="nav-item">
            <a
              href="#contact"
              className="nav-link"
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              Contact
            </a>
          </li>
        </ul>
      </Container>
      <button
        type="button"
        onClick={toggleThemeHandler}
        className={`${css.customBtn}`}
        data-aos="fade-down"
        data-aos-delay="800"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
      >
        {theme === "light" ? (
          <img src={moon} alt="switch to light-mode" />
        ) : (
          <img src={sun} alt="switch to dark-mode" />
        )}
      </button>
    </Navbar>
  );
};

export default AppNavbar;
