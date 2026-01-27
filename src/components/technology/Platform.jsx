import css from "./Platform.module.css";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";

const Platform = ({ name, image }) => {
  const { theme } = useContext(ThemeChangeContext);
  const style = {
    color: theme === "light" ? "#000000" : "#ffffff",
  };

  return (
    <div
      className={`${css.technologyCard} card`}
      style={{ width: "13rem", padding: "16px" }}
    >
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body p-0 mt-4">
        <p className="card-text fw-bold" style={style}>
          {name}
        </p>
      </div>
    </div>
  );
};

export default Platform;
