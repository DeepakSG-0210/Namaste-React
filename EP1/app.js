// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React!!"
// );
// // return an object

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // converts the heading object and put it as a heading tag
// root.render(heading);

// Nested Structures(Child Structure)
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "I'm heading H1")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// Sibling Structure
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", { id: "heading" }, "I'm heading H1"),
//     React.createElement("h2", { id: "heading2" }, "I'm heading H2"),
//   ])
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//Complex Nested Structures
const parent = React.createElement(
  "div",
  { id: "parent" },[
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm heading H1"),
    React.createElement("h2", { id: "heading2" }, "I'm heading H2"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading1" }, "I'm heading H1"),
    React.createElement("h2", { id: "heading21" }, "I'm heading H2"),
  ])]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
