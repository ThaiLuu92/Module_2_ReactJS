import React, { Component } from 'react'
import "./ColorChanger.css";
interface ColorChangerProps {
  state: ColorChangerState;
  handleColorChange: () => void; 
}

  interface ColorChangerState {
    backgroundColor: string;
  }
export default class ColorChanger extends React.Component<ColorChangerProps, ColorChangerState> {
  state: ColorChangerState = {
    backgroundColor: "white",
  };
  handleColorChange = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState({ backgroundColor: randomColor });
  };
  render() {
    const { backgroundColor } = this.state;
    return (
      <div id="backgroundColor" style={{ backgroundColor }}>
        <button onClick={this.handleColorChange}>Change Color</button>
      </div>
    );
  }
}
