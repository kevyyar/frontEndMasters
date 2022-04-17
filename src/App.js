import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", null, [
    React.createElement(Pet, {
      name: "Molly",
      animal: "Dog",
      breed: "Labrador",
    }),
    React.createElement(Pet, {
      name: "Gigi",
      animal: "Dog",
      breed: "Chihuahua",
    }),
    React.createElement(Pet, {
      name: "Figo",
      animal: "Dog",
      breed: "Shi Tzu",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
