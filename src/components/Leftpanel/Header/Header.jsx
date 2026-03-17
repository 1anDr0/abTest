import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaArrowRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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
      }, 400); // matchar animationstid
    }
  }, [visible]);

  if (!show) return null;
  return (
    <div className={`header-flydown${animateOut ? " hide" : ""}`}>
      <div className="header-flydown-inner">
        <span className="header-close-btn" onClick={onOk}>
          <IoClose />
        </span>
        <h2>Skapa och optimera dina A/B-hypoteser</h2>
        <p className="underSub-1">
          Följ dessa enkla steg för att formulera din hypotes och börja testa
          förbättringar på din webbplats.
        </p>
        {/* <p className="underSub-2">
          Fyll i stegen till vänster för att bygga din hypotes.
        </p> */}
        <div className="header-btn-row">
          <button className="header-ok-btn" onClick={onOk}>
            <span className="header-ok-label"> Kom igång</span>
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
