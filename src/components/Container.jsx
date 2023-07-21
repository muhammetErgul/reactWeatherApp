import React from "react";
import Dropdown from "./Dropdown";
import Days from "./Days";

function Container() {
  return (
    <div className="container">
      <h1 className="title">WeatherApp</h1>
      <Dropdown />
      <Days />
    </div>
  );
}

export default Container;
