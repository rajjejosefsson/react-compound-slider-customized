import React from "react";

export const Track = ({ source, target, getTrackProps }) => (
  <div
    style={{
      position: "absolute",
      height: 14,
      zIndex: 1,
      backgroundColor: "#7aa0c4",
      borderRadius: 2,
      cursor: "pointer",
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()} // this will set up events if you want it to be clickeable (optional)
  />
);
