import React, { useEffect } from 'react'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from '../../../store/EmployeeSlice';

function EditModal({id}) {
  const dispatch = useDispatch();
  const employee = useSelector((state) => state.employee);
  let [emptyData, setEmptyData] = useState([]);

  useEffect(() => {
    employee.filter((item) => {
      if(item.id === id){
        setEmptyData({
          id: item.id,
          name: item.name,
          email: item.email,
          number: item.number,
          department: item.department
        })
      }
    });
  }, [id]);

  const editHandler = (e) => {
    e.preventDefault()
    dispatch(
      editEmployee({data: emptyData})
    );
  };

  return (
    <div
    className="modal fade"
    id="exampleModal2"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel2"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Employee Form
          </h5>
          <button
            type="button"
            className="btn-close btn-danger"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <div>
            <form action="#" className="d-flex form">
              <div className="left-modal">
                <div className="inputs-wrapper">
                  <input
                    className="modal__input mt-1"
                    type="text"
                    name="Fullname"
                    placeholder="Full Name"
                    id="NameInput"
                    value={emptyData.name}
                    onChange={(e) => setEmptyData({...emptyData, name: e.target.value})}
                    required
                  />
                  <p className="m-0 name-warning p-0 mb-4" />
                  <input
                    className="modal__input"
                    type="text"
                    name="Email"
                    placeholder="Email"
                    id="EmailInput"
                    required
                    value={emptyData.email}
                    onChange={(e) => setEmptyData({...emptyData, email: e.target.value})}
                  />
                  <p className="m-0 name-warning email-warning p-0 mb-4" />
                  <input
                    className="modal__input"
                    name="Mobile"
                    placeholder="Mobile"
                    id="MobileInput"
                    value={emptyData.number}
                    onChange={(e) => setEmptyData({...emptyData, number: e.target.value})}
                    required
                  />
                </div>
              </div>
              <div className="ps-5">
                <label htmlFor="gender">Gender</label>
                <br />
                <div className="d-flex mt-2 mb-3">
                  <div className="form-check me-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Female
                    </label>
                  </div>
                </div>
                <input
                  list="data"
                  className="modal__input mb-4"
                  value={emptyData.department}
                  onChange={(e) => setEmptyData({...emptyData, department: e.target.value})}
                  required
                />
                <datalist id="data">
                  <option value="Development"></option>
                  <option value="Marketing"></option>
                  <option value="Accounting"></option>
                  <option value="Hr"></option>
                </datalist>
                <input type="date" className="modal__input mb-4" />
                <div>
                  <button
                    type="submit"
                    className="btn submit-btn me-2"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={editHandler}
                  >
                    Submit
                  </button>
                  <button type="submit" className="btn reset-btn">
                    Reset
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  </div>
  )
}

export default EditModal



