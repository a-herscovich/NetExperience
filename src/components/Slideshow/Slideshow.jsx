import { useEffect } from "react";
import "./Slideshow.scss";

const Slideshow = () => {

    useEffect(() => {
    const imagesRows = document.querySelectorAll('.imagesRow');
  
    imagesRows.forEach(imagesRow => {
      imagesRow.style.animationPlayState = "running";
  
      imagesRow.addEventListener('mouseover', event => {
        imagesRows.forEach(row => {
          row.style.animationPlayState = "paused";
        });
      });
  
      imagesRow.addEventListener('mouseout', event => {
        imagesRows.forEach(row => {
          row.style.animationPlayState = "running";
        });
      });
    });
  }, []);

  return (
    <div className="slideshow">
      <div className="imagesRow firstRow" id="firstRow">
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hotel_lobby.png"
            alt="hospitality"
          />
          <span className="imageOverlay">
            <span className="text">OpenWifi is ideal for hotels with great performance at a low TCO</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard1.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Monitor your network traffic</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/desk_setup.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Customers get dramatically improved Wi-Fi at low cost</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard4.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Determine which access points are online and serving clients</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Really fast, low latency Wi-Fi is what MDUs need today and forthe future, and we have it available today!</span>
          </span>
        </div>

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/laptop_outside.png"
            alt="remote work"
          />
          <span className="imageOverlay">
            <span className="text">Dense common areas and individual rooms are easily covered</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img className="slideshowImage" src="/network1.png" alt="dashboard" />
          <span className="imageOverlay">
            <span className="text">Monitor the details of your access points for better insights into predicted performance</span>
          </span>
        </div>

        {/* Repeating content to avoid "jumps" */}

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hotel_lobby.png"
            alt="hospitality"
          />
          <span className="imageOverlay">
            <span className="text">OpenWifi is ideal for hotels with great performance at a low TCO</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard1.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Monitor your network traffic</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/desk_setup.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Customers get dramatically improved Wi-Fi at low cost</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard4.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Determine which access points are online and serving clients</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Really fast, low latency Wi-Fi is what MDUs need today and forthe future, and we have it available today!</span>
          </span>
        </div>

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/laptop_outside.png"
            alt="remote work"
          />
          <span className="imageOverlay">
            <span className="text">Dense common areas and individual rooms are easily covered</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img className="slideshowImage" src="/network1.png" alt="dashboard" />
          <span className="imageOverlay">
            <span className="text">Monitor the details of your access points for better insights into predicted performance</span>
          </span>
        </div>
      </div>

      <div className="imagesRow secondRow">
        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard3.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Understand which clients are connected to each Wi-Fi band</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hospitality.png"
            alt="hospitality"
          />
          <span className="imageOverlay">
            <span className="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_library.png"
            alt="education"
          />
          <span className="imageOverlay">
            <span className="text">Dense college common areas are easily covered by OpenWifi using Wi-Fi6, 6E and soon Wi-Fi7</span>
          </span>
        </div>
        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh2.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Outfoor Wi-Fi? No problem for NetExperience and OpenWifi</span>
          </span>
        </div>
        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard2.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Real time alarms help with fast troubleshooting</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_campus.png"
            alt="education"
          />
          <span className="imageOverlay">
            <span className="text">Campus wide and student housing Wi-Fi, one of the highest volume users of OpenWifi today</span>
          </span>
        </div>

        {/* Repeating content to avoid "jumps" */}

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard3.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Understand which clients are connected to each Wi-Fi band</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hospitality.png"
            alt="hospitality"
          />
          <span className="imageOverlay">
            <span className="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_library.png"
            alt="education"
          />
          <span className="imageOverlay">
            <span className="text">Dense college common areas are easily covered by OpenWifi using Wi-Fi6, 6E and soon Wi-Fi7</span>
          </span>
        </div>
        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh2.png" alt="mdu" />
          <span className="imageOverlay">
            <span className="text">Outfoor Wi-Fi? No problem for NetExperience and OpenWifi</span>
          </span>
        </div>
        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard2.png"
            alt="dashboard"
          />
          <span className="imageOverlay">
            <span className="text">Real time alarms help with fast troubleshooting</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_campus.png"
            alt="education"
          />
          <span className="imageOverlay">
            <span className="text">Campus wide and student housing Wi-Fi, one of the highest volume users of OpenWifi today</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
