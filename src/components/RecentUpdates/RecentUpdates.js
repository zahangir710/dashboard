import React from "react";
import "./RecentUpdates.css";
export default function RecentUpdates(props) {
  const { title, details, icon } = props.data;
  return (
    <div className="recent-update">
      <div className="recent-item">
        <div className="recent-update-icon">{icon}</div>
        <div className="recent-details">
          <h2 className="recent-title">{title}</h2>
          <p className="recent-update-info">{details}</p>
          <button className="recent-btn">Deatils</button>
        </div>
      </div>
    </div>
  );
}
