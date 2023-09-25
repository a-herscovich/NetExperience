import { useNavigate } from "react-router-dom";
import "./TwoPanelCustomerInfo.scss";
const TwoPanelCustomerInfo = ({
  title,
  description,
  image,
  reverse,
  cta,
  redirectLink,
}) => {
  const navigate = useNavigate();
  return reverse ? (
    <div className="twoPanels customerIntro">
      <img className="customerSectionImage" src={image} alt={title} />
      <div className="introText">
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          className="learnMoreCTA"
          onClick={() => navigate(`${redirectLink}`)}
        >
          {cta} {"\u2192"}
        </div>
      </div>
    </div>
  ) : (
    <div className="twoPanels customerIntro">
      <div className="introText">
        <h1>{title}</h1>
        <p>{description}</p>
        <div
          className="learnMoreCTA"
          onClick={() => navigate(`${redirectLink}`)}
        >
          {cta} {"\u2192"}
        </div>
      </div>
      <img className="customerSectionImage" src={image} alt={title} />
    </div>
  );
};

export default TwoPanelCustomerInfo;
