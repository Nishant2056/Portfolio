import css from "./SmartSolutions.module.css";
import InfoList from "./InfoList";

const SmartSolutions = ({ data }) => {
  const style = {
    backgroundColor: data.bgColor,
  };

  return (
    <div className={`${css.workplace} col-md-4`}>
      <div
        className={`${css.first} d-flex gap-4 align-items-start p-4`}
        style={style}
      >
        <div className="company-logo">
          <img src={data.logo} alt="Company Logo" />
        </div>
        <div className="company-description">
          <h4 className="text-start mb-1 fw-bold">{data.role}</h4>
          <p className="text-start mb-1 fw-bold">{data.company}</p>
          <p className="text-start mb-2 fw-bold">{data.date}</p>
          <p className="text-start mb-1">{data.description}</p>
          {data.infoList && <InfoList data={data.infoList} />}
        </div>
      </div>
    </div>
  );
};

export default SmartSolutions;
