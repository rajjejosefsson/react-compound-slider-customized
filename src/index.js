import React from "react";
import ReactDOM from "react-dom";
import { SingleSlider } from "./slider/singleSlider";
import { RangeSlider } from "./slider/rangeSlider";
import { Docs } from "../docs/docs";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Docs />
      <h2>Single Slider</h2>
      <SingleSlider />

      <br />

      <h2>Range Slider</h2>
      <RangeSlider />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
