import React from "react";
import "./TopDashBar.css";
import { BsFillBellFill } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
export default function TopDashBar({ sideBar, sideBarToggle }) {
  return (
    <header className="top-dashbar">
      <section className="top-dashbar-container">
        <div className="left-bar">
          {sideBar ? (
            <AiOutlineClose className="toggler-icon" onClick={sideBarToggle} />
          ) : (
            <GiHamburgerMenu onClick={sideBarToggle} className="toggler-icon" />
          )}
          <h1 className="logo">Test Results</h1>
        </div>
        <div className="right-bar">
          <div data-tooltip="Notifications" className="right-bar-icons">
            <BsFillBellFill className="icon" />
            <span className="icon-badge">2</span>
          </div>
          <div data-tooltip="Settings" className="right-bar-icons">
            <AiOutlineSetting className="icon" />
          </div>
          <div data-tooltip="User" className="right-bar-icons">
            <FaUserCircle className="icon" />
          </div>
        </div>
      </section>
    </header>
  );
}
