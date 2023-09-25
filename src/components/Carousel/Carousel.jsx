import {useState, useEffect} from 'react';
import {OpenWifiTestimonial} from '../../components';
import "./Carousel.scss";


const Carousel = () => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);
    const [currentOpenWifiSlide, setCurrentOpenWifiSlide] = useState(0);
    const [animationKey, setAnimationKey] = useState(1);
  
    const handleMouseEnterLeft = () => {
      setIsLeftHovered(true);
    };
  
    const handleMouseLeaveLeft = () => {
      setIsLeftHovered(false);
    };
  
    const handleMouseEnterRight = () => {
      setIsRightHovered(true);
    };
  
    const handleMouseLeaveRight = () => {
      setIsRightHovered(false);
    };
  
    const autoChangeSlide = () => {
      const nextSlideIndex = (currentOpenWifiSlide + 1) % openWifiSlides.length;
      setCurrentOpenWifiSlide(nextSlideIndex);
    };
  
    useEffect(() => {
      const intervalId = setInterval(autoChangeSlide, 10000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [currentOpenWifiSlide]);
  
    const openWifiSlides = [
      {
        name: "Bernard Herscovici",
        quote: (
          <div>
            OpenWifi means an <b>open-source</b> architecture allowing Cloud
            platforms to{" "}
            <b>
              manage Access Points and Switches from multiple hardware providers
            </b>
            . It eliminates vendor lock and substantially{" "}
            <b>decreases the total cost of ownership</b> while maintaining a fast
            innovation pace driven by the open source community
          </div>
        ),
        title: "CEO",
        company: "NetExperience",
        image: "/bh_headshot.jpeg",
      },
      {
        name: "Jack Raynor",
        quote:
          "Jack's quote here about community - placeholder image used for now",
        title: "Co-Chair, TIP Open Converged Wireless",
        company: "Meta",
        image: "/bh_headshot.jpeg",
      },
    ];
  
    const nextSlide = () => {
      setCurrentOpenWifiSlide(
        (prevSlide) => (prevSlide + 1) % openWifiSlides.length
      );
    };
  
    const prevSlide = () => {
      setCurrentOpenWifiSlide(
        (prevSlide) =>
          (prevSlide - 1 + openWifiSlides.length) % openWifiSlides.length
      );
    };
  
    const currentSlideData = openWifiSlides[currentOpenWifiSlide];
  
    const handleAnimationReset = () => {
      setAnimationKey(animationKey + 1);
    };
  return (
    <div className="carouselWrapper">
      <div className="openWifiTestimonialCarousel">
        <div
          onMouseEnter={handleMouseEnterLeft}
          onMouseLeave={handleMouseLeaveLeft}
        >
          {isLeftHovered ? (
            <svg
              className="arrowIcon bi bi-arrow-left-circle-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => {
                prevSlide();
                handleAnimationReset();
              }}
            >
              <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
            </svg>
          ) : (
            <svg
              className="arrowIcon bi bi-arrow-left-circle"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => {
                prevSlide();
                handleAnimationReset();
              }}
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
              />
            </svg>
          )}
        </div>
        <OpenWifiTestimonial
          name={currentSlideData.name}
          quote={currentSlideData.quote}
          title={currentSlideData.title}
          company={currentSlideData.company}
          image={currentSlideData.image}
        />
        <div
          onMouseEnter={handleMouseEnterRight}
          onMouseLeave={handleMouseLeaveRight}
        >
          {isRightHovered ? (
            <svg
              className="arrowIcon bi bi-arrow-right-circle-fill"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => {
                nextSlide();
                handleAnimationReset();
              }}
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
            </svg>
          ) : (
            <svg
              className="arrowIcon bi bi-arrow-right-circle"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => {
                nextSlide();
                handleAnimationReset();
              }}
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
              />
            </svg>
          )}
        </div>
      </div>
      <div className="progressBar" key={animationKey}></div>
    </div>
  );
};
export default Carousel;
