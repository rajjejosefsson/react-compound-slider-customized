import React, { Fragment } from "react";
import Markdown from "react-markdown";
import { CodeBlock } from "./codeblock";
import singleSlider from "./markdown/singleSlider.md";
import rangeSlider from "./markdown/rangeSlider.md";

import "./docs.css";

export const Docs = () => (
  <Fragment>
    <h1 style={{ marginBottom: "66px" }}>Documentation</h1>
    <section
      style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
    >
      <Markdown
        className="markdown-body"
        source={singleSlider}
        renderers={{ code: CodeBlock }}
      />
      <Markdown
        className="markdown-body"
        source={rangeSlider}
        renderers={{ code: CodeBlock }}
      />
    </section>
  </Fragment>
);
