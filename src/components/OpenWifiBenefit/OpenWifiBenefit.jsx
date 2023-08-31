import "./OpenWifiBenefit.scss";


const OpenWifiBenefit = ({icon, title, description}) => {
  return (
    <div className="openWifiBenefit">
        <div>{icon}</div>
        <p className="benefitTitle">{title}</p>
        <div>{description}</div>
    </div>
  );
};

export default OpenWifiBenefit;