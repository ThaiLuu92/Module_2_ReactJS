import React, { Component } from "react";
import "./App.css";
import Control from "./components/Control";
import Form from "./components/Form";
import ListStudent from "./components/ListStudent";
import { students, Student } from "./components/dataStudents";

interface AppProps {}

interface AppState {
  isFormVisible: boolean;
  selectedStudent: Student | null; // Thêm trạng thái selectedStudent
  keyword: string;
}

export default class App extends Component<AppProps, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isFormVisible: false,
      selectedStudent: null, // Khởi tạo selectedStudent là null
      keyword: ''
    };
  }

  handleShowForm = () => {
    this.setState((prevState) => ({
      isFormVisible: !prevState.isFormVisible, // Đảo ngược trạng thái
    }));
  };

  handleViewStudent = (student: Student) => {
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