import React, { Component, ChangeEvent } from 'react';
import { students, Student } from './dataStudents';

interface FormProps {
  selectedStudent: Student | null;
}

interface FormState {
  studentId: string;
  studentName: string;
  studentAge: number;
  studentGender: boolean;
  studentDateOfBirth: string;
  studenPlaceOfBirth: string;
  studentAddress: string;
}
export default class Form extends Component<FormProps, FormState> {
  state = {
    studentId: '',
    studentName: '',
    studentAge: 0,
    studentGender: false,
    studentDateOfBirth: '',
    studenPlaceOfBirth: '',
    studentAddress: '',
    
  }

  componentDidUpdate(prevProps: FormProps) {
    if (this.props.selectedStudent !== prevProps.selectedStudent) {
      this.setState({
        studentId: this.props.selectedStudent?.studentId ?? '',
        studentName: this.props.selectedStudent?.studentName ?? '',
        studentAge: this.props.selectedStudent?.studentAge ?? 0,
        studentGender: this.props.selectedStudent?.studentGender ?? true,
        studentDateOfBirth: this.props.selectedStudent?.studentDateOfBirth?? '',
        studenPlaceOfBirth: this.props.selectedStudent?.studenPlaceOfBirth?? '',
        studentAddress: this.props.selectedStudent?.studentAddress?? '',
      });
    }
  }
  render() {

    const { studentId, studentName, studentAge, studentGender,studentDateOfBirth,studenPlaceOfBirth,studentAddress } = this.state;

    return (
      <div className="col-5 grid-margin">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">Thông tin sinh viên</h3>
            <form className="form-sample">
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    name="idStudent"
                    value={studentId} readOnly
                 
                  />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="name" value={studentName} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Tuổi</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="age" value={studentAge} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Giới tính</label>
                <div className="col-sm-9">
                  <select name="gender" className="form-control" value={studentGender ? 'male' : 'female' }>
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                <div className="col-sm-9">
                  <input className="form-control" placeholder="dd/mm/yyyy" value={studentDateOfBirth} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="placeOfBirth" value={studenPlaceOfBirth} />
                </div>
              </div>
              <div className="form-group row">
                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                <div className="col-sm-9">
                  <textarea className="form-control" value={studentAddress} />
                </div>
              </div>
                
            
              <button type="submit" className="btn btn-primary me-2 add-student">
                Add new student
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}