import React from "react";

export const Handle = ({
  handle: { id, value, percent }, // you get an id, the value and the percentage to place it.
  getHandleProps
}) => (
  <div
    style={{
      left: `${percent}%`,
      position: "absolute",
      marginLeft: "-11px",
      marginTop: "-6px",
      zIndex: 2,
      width: 24,
      height: 24,
      cursor: "pointer",
      borderRadius: "50%",
      boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#34568f"
    }}
    {...getHandleProps(id)} // pass in the id
  >
    <div style={{ fontSize: 11, marginTop: -20 }}>{value}</div>
  </div>
);
