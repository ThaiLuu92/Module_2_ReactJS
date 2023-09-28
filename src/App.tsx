import React, { Component } from "react";
import "./App.css";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";

export default class App extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control />

            <ListStudent />
          </div>
        </div>

        <Form />
      </div>
    );
  }
}
