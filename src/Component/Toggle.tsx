import React, { Component } from "react";
interface ChangeColorProps {
  handleChangeBlue: Function;
  backgroundColor: string;
}
interface ToggleState {
  isVisible: boolean;
}

export default class Toggle extends Component<ChangeColorProps, ToggleState> {
  constructor(props: ChangeColorProps) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }

  handleToggle = () => {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }));
  };
  handleChangeBlue = () => {
    this.props.handleChangeBlue("blue");
  };

  render() {
    const { backgroundColor } = this.props;
    return (
      <div style={{ backgroundColor }}>
        <fieldset>
          <legend>Ví dụ về toggle</legend>
          <h2>Bật tắt Modal</h2>
          <button onClick={this.handleToggle}>Open</button>
          {this.state.isVisible && (
            <Modal
              handleToggle={this.handleToggle}
              backgroundColor={this.props.backgroundColor}
            />
          )}
        </fieldset>
      </div>
    );
  }
}
interface ModalProps {
  handleToggle: Function;
  backgroundColor: string;
}
interface ModalState {
  backgroundColor: string;
}

class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);

    this.state = { backgroundColor: "white" };
  }
  handleChangeBlue = (color: string) => {
    this.setState({ backgroundColor: color });
  };

  render() {
    const { backgroundColor } = this.state;
    return (
      <div style={{ backgroundColor }}>
        <h1>Đây là Modal</h1>
        <button onClick={() => this.handleChangeBlue("blue")}>Xanh</button>
        <button onClick={() => this.props.handleToggle()}>Close</button>
      </div>
    );
  }
}
