import SmartSolutionsLogo from "../../assets/Smart-solutions-logo.png";
import css from "./SmartSolutions.module.css";

const SmartSolutions = () => {
  return (
    <div className={`${css.workplace} container-fluid col-md-4`}>
      <div className={`${css.first} d-flex gap-4 align-items-start p-4`}>
        <div className="company-logo">
          <img src={SmartSolutionsLogo} alt="Company Logo" />
        </div>
        <div className="company-description">
          <h4 className="text-start mb-1 fw-bold">Web Develoepr</h4>
          <p className="text-start mb-1 fw-bold">Smart Solutions Technology</p>
          <p className="text-start mb-2 fw-bold">Dec 2024 - Present</p>
          <p className="text-start mb-1">
            As a developer, collaborating with clients and teams to build
            high-performance systems that solve complex challenges across
            industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartSolutions;
