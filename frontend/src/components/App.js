import React, { Component } from "react";
import { render } from "react-dom";
import Body from "./Body";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Body />
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
