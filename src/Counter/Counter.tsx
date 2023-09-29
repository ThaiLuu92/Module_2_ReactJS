import React from "react";
import "./Counter.css"



interface State {
  count: number;
}

export default class Counter extends React.Component<{}, State> {
  state: State = {
    count: 0,
  };

  handleIncrement = (): void => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = (): void => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Tăng giảm</h1>
        <div className="counter">
          <button onClick={this.handleDecrement}>-</button>
          <span>{this.state.count}</span>
          <button onClick={this.handleIncrement}>+</button>
        </div>
      </div>
    );
  }
}
