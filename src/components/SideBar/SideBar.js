import React from "react";
import "./SideBar.css";
import { sidebarData } from "../../assets/sidebarData";
export default function SideBar({ sideBar }) {
  return (
    <div className={sideBar ? "side-bar active" : "side-bar"}>
      <ul className="side-bar-list">
        {sidebarData.map((data) => {
          return (
            <li className="side-bar-row" key={data.id}>
              <div className="side-bar-icon">{data.icon}</div>
              <div className="side-bar-title">{data.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
