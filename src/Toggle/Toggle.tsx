import React, { Component } from 'react'
import "./Toggle.css";
import { isVisible } from '@testing-library/user-event/dist/utils';

interface ToggleState {
  isVisible: boolean;
}

class Toggle extends React.Component<{}, ToggleState> {
  state: ToggleState = {
    isVisible: true,
  };

  handleToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };

  render() {
    const { isVisible } = this.state;
    return (
      <div id="toggle">
        <h1>Ví dụ 5</h1>
        <button onClick={this.handleToggle}>Toggle Visibility</button>
        {isVisible && <p>This content is now visible!</p>}
      </div>
    );
  }
}

export default Toggle;
