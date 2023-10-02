import React, { Component } from 'react';



interface ControlProps {
  onShowForm: () => void;
  onChange: (value: string) => void; 


}
export default class Control extends Component<ControlProps> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  }
  
  render() {
    
    
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3">
            <button type="button" className="btn btn-primary btn-icon-text" onClick={this.props.onShowForm}>
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                onChange={this.handleChange}
              />
              <button className="btn btn-primary btn-icon-text" >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control">
              <option value="">Sắp xếp</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
              <option value="">ABC def</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}