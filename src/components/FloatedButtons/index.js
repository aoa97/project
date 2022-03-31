import { useEffect, useRef } from "react";
import { IconArrowUp, IconSettings } from "../SVG/IconSvg";
import "./styles.css";

const FloatedButtons = () => {
  const pushToTop = useRef();

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 400) {
        pushToTop.current.style.opacity = "1";
      } else {
        pushToTop.current.style.opacity = "0";
      }
    };
  }, []);

  const handlePageUp = (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* BuyNow Red Icon */}
      <button className="btn-floated buyNow">Buy Now</button>

      {/* PushToTop Icon */}
      <button ref={pushToTop} className="btn-floated up" onClick={handlePageUp}>
        <IconArrowUp />
      </button>

      {/* PushToTop Icon */}
      <button className="btn-floated settings">
        <IconSettings />
      </button>
    </>
  );
};

export default FloatedButtons;
