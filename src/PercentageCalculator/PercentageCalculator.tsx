import React, { Component } from 'react'
import "./PercentageCalculator.css";

interface PercentageCalculatorProps {
  number: number;
  percentage: number;
}

export default class PercentageCalculator extends React.Component<PercentageCalculatorProps> {
  render() {
    const { number, percentage } = this.props;
    const result = (number * percentage) / 100;
    return (
      <div id="percentageCalculator">
        <h1>Ví dụ 6</h1>
        {percentage}% of {number} is {result}
      </div>
    );
  }
}
