import React, { Component } from 'react';
import './App.css';

class App extends Component {
  // Chạy đầu - init
  constructor() {
    super({});
    console.log("App constructor");
  }

  // Chạy Mounting -1
  componentWillMount() {
    console.log("App componentWillMount- Khi Component được gắn vào - chạy lần đầu");
  }

  // Chạy Mounting -3
  componentDidMount() {
    console.log("App componentDidMount - Khi Component được gắn vào - chạy lần đầu ( sau render)");
  }

  // Chạy Update -2
  componentDidUpdate() {
    console.log("App componentDidUpdate");
  }

  // Chạy Update -1
  changeState = () => {
    this.setState({ someState: 'newState' });
  }
  // Các trường hợp gọi render
  // 1. Mounting chạy sau component WillMount
  // 1. Updation chạy sau component WillUpdate

  render() {
    console.log("App render");
    return (
      <div>
        <h1>App Component</h1>
        <button onClick={this.changeState}>Change State</button>
        <Children count={10} />
      </div>
    )
  }
}

class Children extends Component<{ count: number}> {
  // Chạy đầu - init
  constructor(props: { count: number }) {
    super(props);
    console.log("Children constructor");
  }

  componentWillReceiveProps() {
    console.log("Children componentWillReceiveProps");
  }

  shouldComponentUpdate() {
    console.log("Children shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("Children componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Children componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Children componentWillUnmount");
  }

  render() {
    console.log("Children render");
    return (
      <div>
        <h2>Children Component</h2>
        <p>Count: {this.props.count}</p>
      </div>
    )
  }
}

export default App;