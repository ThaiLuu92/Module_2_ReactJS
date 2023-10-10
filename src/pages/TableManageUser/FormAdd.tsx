import React from 'react'

function FormAdd() {
  return (
      <div id="addEmployeeModal">
          <div className="modal-dialog">
              <div className="modal-content">
                  <form>
                      <div className="modal-header">
                          <h4 className="modal-title">Add User</h4>
                          <button
                              id="close"
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-hidden="true"
                            //   onClick={() => handlePost()}
                          >
                              ×
                          </button>
                      </div>
                      <div className="modal-body">
                          <div className="form-group">
                              <label>Name</label>
                              <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label>Address</label>
                              <input type="email" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label>City</label>
                              <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label>Pin Code</label>
                              <input type="text" className="form-control" />
                          </div>
                          <div className="form-group">
                              <label>Country</label>
                              <input type="text" className="form-control" />
                          </div>
                      </div>
                      <div className="modal-footer">
                          <input
                              type="reset"
                              className="btn btn-default"
                              data-dismiss="modal"
                              defaultValue="Reset"
                          />
                          <input
                              type="submit"
                              className="btn btn-success"
                              defaultValue="Add"
                          />
                      </div>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default FormAdd
