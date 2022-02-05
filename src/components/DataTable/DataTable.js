import React from "react";
import "./DataTable.css";
export default function DataTable({ summary, uniqueHeaderKeys }) {
  return (
    <div>
      {summary.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              {uniqueHeaderKeys.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {Object.values(summary).map((obj, index) => {
              return (
                <tr key={index}>
                  {Object.values(obj).map((value, key) => {
                    return <td key={key}>{value}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
