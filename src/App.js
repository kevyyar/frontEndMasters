import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Chloe" animal="Dog" breed="Havanese" />
      <Pet name="Sasha" animal="Dog" breed="Pitbull" />
      <Pet name="Sophie" animal="Cat" breed="Persian" />
    </div>
  )
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
