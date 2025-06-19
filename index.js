import React from "react";

import ReactDom from "react-dom/client";

// core react
// const head = React.createElement("h1", { id: "parent"}, "NMR by core javascript");

// JSX (transpiled before it reaches the JS Engine) -> Parcel -> Babel

// JSX => Babel transpiles it to  React.createElement => ReactElement -> JS object => HTMLElement(render)

// React Element
// const jsxHead = <h1 id="head" className="head" >NMR by jsx</h1>

// component
const Title = () => (
  <h1 className="head" tabIndex={5}>
    NMR without parenthesis
  </h1>
);

// React Functional Component
const Headcomp = () => {
  return (
    <div id="container">
      <Title />;<h2>{console.log("any javascript expressions can be rendered inside paraentheses")}</h2>
      <h1>NMR creating Functional Component</h1>
    </div>
  );
};
// If there is no return parenthesis is not needed
// const Headcomp1 = () => (
//      <h1>NMR creating Functional Component</h1>
// );

const root = ReactDom.createRoot(document.getElementById("root"));

// to render react element
// root.render(jsxHead);

// to render react functional component
root.render(<Headcomp />);
