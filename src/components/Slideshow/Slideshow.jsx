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
          <span class="imageOverlay">
            <span class="text">Hospitality</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard1.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">product</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/desk_setup.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">MDU</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard4.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/laptop_outside.png"
            alt="remote work"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img className="slideshowImage" src="/network1.png" alt="dashboard" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        {/* Repeating content to avoid "jumps" */}

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hotel_lobby.png"
            alt="hospitality"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard1.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/desk_setup.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard4.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/laptop_outside.png"
            alt="remote work"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        <div className="imageContainer product">
          <img className="slideshowImage" src="/network1.png" alt="dashboard" />
          <span class="imageOverlay">
            <span class="text">Text</span>
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
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hospitality.png"
            alt="hospitality"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_library.png"
            alt="education"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh2.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard2.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_campus.png"
            alt="education"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>

        {/* Repeating content to avoid "jumps" */}

        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard3.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/hospitality.png"
            alt="hospitality"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_library.png"
            alt="education"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img className="slideshowImage" src="/mdu_wfh2.png" alt="mdu" />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer product">
          <img
            className="slideshowImage"
            src="/dashboard2.png"
            alt="dashboard"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
        <div className="imageContainer">
          <img
            className="slideshowImage"
            src="/uni_campus.png"
            alt="education"
          />
          <span class="imageOverlay">
            <span class="text">Text</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
