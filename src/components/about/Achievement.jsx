import css from "./Achievement.module.css";
import { FaFolderOpen, FaLaptopCode, FaAward } from "react-icons/fa";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import { GrAchievement } from "react-icons/gr";

const Achievement = () => {
  const { theme } = useContext(ThemeChangeContext);
  const achievements = [
    { name: "Involved in Multiple Projects", icon: <FaFolderOpen /> },
    { name: "Expert in modern web development", icon: <FaLaptopCode /> },
    { name: "Delivered multiple projects professionally", icon: <FaAward /> },
  ];

  return (
    <div
      className="container-fluid"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration="800"
    >
      <h4 className="text-start fw-bold d-flex align-items-center gap-2">
        <GrAchievement />
        Achievements
      </h4>
      <ul className="list-group list-group-flush">
        {achievements.map((item, index) => (
          <li
            key={index}
            className={`${css.achievementList} list-group-item text-start d-flex align-items-center gap-2`}
            style={{
              color: theme === "light" ? "#000000" : "#ffffff",
              backgroundColor: "transparent",
            }}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievement;
