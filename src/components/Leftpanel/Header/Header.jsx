import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaArrowRight } from "react-icons/fa";
import { TbCircleLetterAFilled } from "react-icons/tb";
import { TbCircleLetterB } from "react-icons/tb";
import { HiSlash } from "react-icons/hi2";

const Header = ({ visible, onOk }) => {
  const [show, setShow] = useState(visible);
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    if (visible) setShow(true);
    else if (show) {
      setAnimateOut(true);
      setTimeout(() => {
        setShow(false);
        setAnimateOut(false);
      }, 500); // matcha exakt toast-out animationen i CSS
    }
  }, [visible]);

  if (!show) return null;
  // Only animate in on mount
  const flydownStyle = animateOut
    ? {}
    : { animation: "toast-in 0.5s cubic-bezier(0.6, 1.5, 0.5, 1) forwards" };
  return (
    <div
      className={`header-flydown${animateOut ? " hide" : ""}`}
      style={flydownStyle}
    >
      <div className="header-flydown-inner">
        <div className="header-star-icon">
          <TbCircleLetterAFilled />
          <HiSlash />
          <TbCircleLetterB />
        </div>
        <h2>Bygg din hypotes</h2>
        <div className="info-text">
          <p className="underSub-1">Fyll i stegen till vänster</p>
          <p className="underSub-2">
            - din färdiga hypotes skrivs ihop automatiskt till höger.
          </p>
          {/* <p className="underSub-3">
            Fyll i stegen så uppdateras den automatiskt.
          </p> */}
        </div>
        <div className="header-btn-row">
          <button className="header-ok-btn" onClick={onOk}>
            <span className="header-ok-label"> Börja med observation</span>
            <span className="header-ok-arrow">
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
