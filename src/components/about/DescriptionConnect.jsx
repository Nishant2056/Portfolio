import { IoIosMailUnread } from "react-icons/io";
import { FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import css from "../about/DescriptionConnect.module.css";
import { VscDebugDisconnect } from "react-icons/vsc";

const DescriptionConnect = () => {
  const connectItems = [
    { name: "bhurtelnishant@gmail.com", icon: <IoIosMailUnread /> },
    { name: "nishantbhurtel.com.np", icon: <FaGlobe /> },
    { name: "Kathmandu, Nepal", icon: <FaMapMarkerAlt /> },
  ];
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
      data-aos-duration="600"
    >
      <h4 className="text-start fw-bold d-flex align-items-center gap-2">
        <VscDebugDisconnect />
        Let's Connect
      </h4>
      <ul className="list-group list-group-flush">
        {connectItems.map((item, index) => (
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

export default DescriptionConnect;
