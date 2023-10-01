import React, { Component } from 'react';
import { students, Student } from './dataStudents';


interface ListStudentProps {
  students: Student[]; // Nhận dữ liệu sinh viên từ props
  onViewStudent: (student: Student) => void; // Nhận sự kiện onViewStudent từ props
  keyword: string;
}
export default class ListStudent extends Component<ListStudentProps> {
 
  render() {
    const { students, onViewStudent } = this.props;
    const filtered = students.filter(
      s => s.studentName.includes(this.props.keyword)
    );


    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.studentId}</td>
                  <td>{student.studentName}</td>
                  <td>{student.studentAge}</td>
                  <td>{student.studentGender ? "Nam" : "Nữ"}</td>
                  <td>
                    <div className="template-demo">
                      <button
                        type="button"
                        className="btn btn-danger btn-icon-text"
                        onClick={() => onViewStudent(student)}
                      >
                        Xem
                      </button>
                      <button
                        type="button"
                        className="btn btn-warning btn-icon-text"
                        
                      >
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-success btn-icon-text"
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}