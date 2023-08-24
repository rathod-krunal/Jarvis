import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";

// Nested Header With React.CreateElement
const Header = React.createElement("div", { className: "title" }, [
  React.createElement(
    "h1",
    { className: "h1" },
    "this is h1 From React Element"
  ),
  React.createElement(
    "h2",
    { className: "h2" },
    "this is h2  From React Element"
  ),
  React.createElement(
    "h3",
    { className: "h3" },
    "this is h3  From React Element"
  ),
]);

// Nested Header With JSX
const HeaderJsx = (
  <div className="title">
    <h1>this is h1 From React JSX </h1>
    <h1>this is h2 From React JSX</h1>
    <h1>this is h3 From React JSX</h1>
    {/* {Header} */}
  </div>
);

// Nested Header With Functional Component
// passsed className attribute to h1 tag.

const HeaderFunction = () => {
  return (
    <div className="title">
      <h1 className="h1">This is h1 from fucntion</h1>
      <h1 className="h2">This is h2 from fucntion</h1>
      <h1 className="h3">This is h3 from fucntion</h1>
    </div>
  );
};

//component composition

const Composition = () => {
  return (
    <div className="title">
      <h1> This Is Component Composition </h1>
      {HeaderJsx}   {// UnComment {Header} in {HeaderJsx}
      }
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
