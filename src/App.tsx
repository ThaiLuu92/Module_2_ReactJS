import React, { Component } from "react";
import "./App.css";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";
import { students,  } from "./components/dataStudents";
import { IStudent } from "./types/type";


interface AppProps {}

interface AppState {
  isFormVisible: boolean;
  selectedStudent: IStudent | null; 
  keyword: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isFormVisible: false,
      selectedStudent: null, 
      keyword: ''
    };
  }

  handleShowForm = (): void => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible, 
    }));
  };

  handleViewStudent = (student: IStudent) => {
    this.setState({ 
      selectedStudent: student,
      isFormVisible: true,
    });
  };

  handleSearch = (value: string) => {
    this.setState({ keyword: value })
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-7 grid-margin stretch-card">
          <div className="card">
            <Control onShowForm={this.handleShowForm} onChange={this.handleSearch} />
            <ListStudent students={students} onViewStudent={this.handleViewStudent} keyword={this.state.keyword} />
          </div>
        </div>
        {this.state.isFormVisible && <Form selectedStudent={this.state.selectedStudent} />}
      </div>
    );
  }
}