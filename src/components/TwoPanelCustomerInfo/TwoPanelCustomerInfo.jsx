import "./TwoPanelCustomerInfo.scss";
const TwoPanelCustomerInfo = ({ title, description, image, reverse }) => {
  return reverse ? (
    <div className="twoPanels customerIntro">
      <img className="customerSectionImage" src={image} alt={title} />
      <div className="introText">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <div
          className="customerCTA"
          onClick={() => console.log("todo - redirect")}
        >
          Learn more
        </div> */}
        <div className="learnMoreCTA">
          Learn about xyz {'\u2192'}
        </div>
      </div>
    </div>
  ) : (
    <div className="twoPanels customerIntro">
      <div className="introText">
        <h1>{title}</h1>
        <p>{description}</p>
        {/* <div
          className="customerCTA"
          onClick={() => console.log("todo - redirect")}
        >
          Learn more
        </div> */}
        <div className="learnMoreCTA">
          Learn about xyz {'\u2192'}
        </div>
      </div>
      <img className="customerSectionImage" src={image} alt={title} />
    </div>
  );
};

export default TwoPanelCustomerInfo;
