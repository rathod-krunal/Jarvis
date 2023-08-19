import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement("h1", {}, "Hello Worold From React");

const NestedHeading = React.createElement("div", {}, [
  React.createElement("h1", {}, "this is nested Element"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(NestedHeading);
