import React, { Component } from "react";
import Main from "./pages/Main";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings(["Unrecognized WebSocket connection option(s)"]);

export default class App extends Component {
  render() {
    return <Main />;
  }
}
