import React from "react";
import ReactDOM from "react-dom/client";

// React Element = Object -> HTML element(render)
// const heading = React.createElement("h1", {}, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// JSX -> JavaScript XML
// const jsxHeading = (
//   <h1 id="heading" className="heading">
//     Hello World
//   </h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Component
// Class based components - OLD
// Function based components - NEW

// Functional Component - just a normal JS function
// const HeadingComponent = () => {
//     return <h1> React Functional Component</h1>;
// }

const HeadingComponent = () => (
  <h1 className="heading"> React Functional Component</h1>
);

// can inject any javascript expression inside {} 
const Title = () => (
  <div>
    <HeadingComponent></HeadingComponent>
    <HeadingComponent />
    <h1>React Title</h1>
    <h2>React Subtitle</h2>
    {HeadingComponent()}
    {/* <HeadingComponent></HeadingComponent> */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);
