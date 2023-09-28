import React, { Component } from 'react'

interface AdditionProps {
  num1: number;
  num2: number;
}
export default class Addition extends React.Component<AdditionProps> {
  render() {
    const { num1, num2 } = this.props;
    const sum = num1 + num2;
    return (
      <div>
        Tổng của số {num1} và số {num2} là {sum}
      </div>
    );
  }
}
