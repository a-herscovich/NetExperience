import "./MDUBenefit.scss";

const MDUBenefit = ({ icon, title, benefits }) => {
  return (
    <div className="MDUBenefit">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
      <div className="benefitsList">
        {benefits.map((benefit) => {
          return <p className="benefit">&#8227; {benefit}</p>;
        })}
      </div>
    </div>
  );
};

export default MDUBenefit;
