import css from "./Hire.module.css";
import { LuRocket } from "react-icons/lu";
import { useContext } from "react";
import { ThemeChangeContext } from "../../store/themeChangeStore.jsx";
import { FaCheckCircle } from "react-icons/fa";
import { MdModelTraining } from "react-icons/md";
import { IoCodeWorkingSharp } from "react-icons/io5";

const Hire = () => {
  const { theme } = useContext(ThemeChangeContext);
  const style = {
    color: theme === "light" ? "#000000" : "#ffffff",
    backgroundColor: "transparent",
    textAlign: "left",
    border: "1px solid gray",
    borderRadius: "12px",
    marginBottom: "12px",
  };

  const hireItems = [
    { id: 1, icon: IoCodeWorkingSharp, text: "Open to New Opportunities" },
    { id: 2, icon: MdModelTraining, text: "Open to Training & Mentorship" },
    { id: 3, icon: FaCheckCircle, text: "Remote & On-site Available" },
  ];

  return (
    <div className="col-md-4">
      <div
        className={` ${css.hireMe} d-flex gap-2 p-4 justify-content-center align-items-start flex-column`}
      >
        <h4 className="d-flex gap-2 align-items-center fw-bold">
          <LuRocket />
          Open For Hire
        </h4>
        <ul className="list-group list-group-flush">
          {hireItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li
                key={item.id}
                className="list-group-item d-flex gap-2 align-items-center p-2"
                style={style}
              >
                <IconComponent />
                {item.text}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Hire;
