import { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  // Adds background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 10) {
        document.querySelector(".header").classList.add("active");
      } else {
        document.querySelector(".header").classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default Header;
