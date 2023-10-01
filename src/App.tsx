import React, { Component } from "react";
import "./App.css";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";

interface AppState {
  isFormVisible: boolean;
}

export default class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isFormVisible: false,
    };
  }

  handleShowForm = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible, // Đảo ngược trạng thái
    }));
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control onShowForm={this.handleShowForm} />
            <ListStudent />
          </div>
        </div>
        {this.state.isFormVisible && <Form />}
      </div>
    );
  }
}