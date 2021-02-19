import React, { Component, RefObject } from "react";
import HomeScreen from "./Screens/HomeScreen";

export interface ScreenProps {
  section: JSX.Element;
}

export interface ScreenState {
  toDisplay: JSX.Element;
}

class Screen extends Component<ScreenProps, ScreenState> {
  state = {
    toDisplay: this.props.section,
  };

  render() {
    return <div className="bg-provider">{this.props.section}</div>;
  }
}

export default Screen;
