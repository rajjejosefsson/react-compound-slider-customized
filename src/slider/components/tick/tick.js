import React from "react";

export const Tick = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: "absolute",
        marginTop: 14,
        width: 1,
        height: 5,
        backgroundColor: "rgb(200,200,200)",
        left: `${tick.percent}%`
      }}
    />
    <div
      style={{
        position: "absolute",
        marginTop: 22,
        fontSize: 10,
        textAlign: "center",
        marginLeft: `${-(100 / count) / 2}%`,
        width: `${100 / count}%`,
        left: `${tick.percent}%`
      }}
    >
      {tick.value}
    </div>
  </div>
);
