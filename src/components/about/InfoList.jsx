import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import css from "./DescriptionConnect.module.css";

const InfoList = ({ data }) => {
  const { theme } = useContext(ThemeChangeContext);
  const listStyle = {
    color: theme === "light" ? "#000000" : "#ffffff",
    backgroundColor: "transparent",
    border: "none",
    padding: "16px 0",
  };

  return (
    <div
      className="container-fluid"
      data-aos="fade-down"
      data-aos-easing="ease-in-out"
      data-aos-duration={data.duration}
    >
      <h4 className="text-start fw-bold d-flex align-items-center gap-2">
        {data.icon}
        {data.title}
      </h4>
      <ul className="list-group list-group-flush">
        {data.items.map((item, index) => (
          <li
            key={index}
            className={`${css.connectList} list-group-item text-start d-flex align-items-center gap-2`}
            style={listStyle}
          >
            {item.icon} {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoList;
