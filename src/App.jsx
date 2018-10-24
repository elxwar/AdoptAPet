import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed={"Havanese"} />
        <Pet name="Elvis" animal="cat" breed={"Moggy"} />
        <Pet name="Poly" animal="cat" breed="Tortoise shell" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
