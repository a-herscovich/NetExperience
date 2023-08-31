import "./OpenWifiTestimonial.scss";
const OpenWifiTestimonial = ({ name, quote, company, title, image, isActive }) => {
  return (
    <div className={`openWifiTestimonial ${isActive ? "active" : ""}`}>
      <div className="openWifiText">
        <p className="quote">{quote}</p>
        <div className="author">
          <p>{name}</p>
          <p>
             - {company}, {title}
          </p>
        </div>
      </div>
      <img
        className="image"
        src={image}
        alt=""
        title=""
      ></img>
    </div>
  );
};

export default OpenWifiTestimonial;
