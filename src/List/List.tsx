import React, { Component } from "react";
import "./List.css"

interface ListProps {
  items: string[];
}

export default class List extends Component<ListProps> {
  render() {
    const { items } = this.props;

    return (
      <div className="list">
        <ul>
          <h3>Ví dụ 3</h3>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
