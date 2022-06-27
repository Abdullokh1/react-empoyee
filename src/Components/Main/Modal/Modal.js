import React from "react";
import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee } from "../../../store/EmployeeSlice";

import "./Modal.css";

function Modal() {
  const dispatch = useDispatch();

  const employee = useSelector((state) => state.employee);
  let [isValidName, setValidName] = useState(false)
  let [isValidEmail, setValidEmail] = useState(false)
  let [isValidNumber, setValidNumber] = useState(false)



  let [userInfo, setUserInfo] = useState({
    id: '',
    name: "",
    email: "",
    number: "",
    department: "",
  });

  const addHandler = () => {
    dispatch(
      addEmployee({data: userInfo})
    )
  }

  const nameHandler = (e) =>{
    e == '' ? setValidName(true) : setValidName(false)
    setUserInfo({...userInfo, id: employee.length+1, name: e})
  }

  const emailHandler = (e) =>{
    !e.includes('@') ? setValidEmail(true) : setValidEmail(false)
    setUserInfo({...userInfo, email: e})
  }

  const numberHandler = (e) =>{
    e.length < 10 ? setValidNumber(true) : setValidNumber(false)
    setUserInfo({...userInfo, number: e})
  }
 
  const onSubmitHandle = (e) =>{
   e.preventDefault()
   e.target.reset()
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
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
              <form onSubmit={onSubmitHandle} action="#" className="d-flex form">
                <div className="left-modal">
                  <div className="inputs-wrapper">
                    <input
                      style={{borderColor: isValidName ? 'red' : '#333996'}}
                      className="modal__input mt-1 mb-3"
                      type="text"
                      name="Fullname"
                      placeholder="Full Name"
                      id="NameInput"
                      required
                      onChange={(e) => nameHandler(e.target.value)}/>
                     <p style={{display: isValidName ? 'block' : 'none'}}  className="m-0 error-text p-0 mb-2">
                      Name is required
                     </p>
                    <input
                      style={{borderColor: isValidEmail ? 'red' : '#333996'}}
                      className="modal__input mb-3"
                      type="text"
                      name="Email"
                      placeholder="Email"
                      id="EmailInput"
                      required
                      onChange={(e) => emailHandler(e.target.value)}/>
                      <p style={{display: isValidEmail ? 'block' : 'none'}} className="m-0 name-warning error-text p-0 mb-2">
                        Use @
                      </p>
                    <input
                      style={{borderColor: isValidNumber ? 'red' : '#333996'}}
                      className="modal__input"
                      type="number"
                      name="Mobile"
                      placeholder="Mobile"
                      id="MobileInput"
                      required
                      onChange={(e) => numberHandler(e.target.value) }/>
                     <p style={{display: isValidNumber ? 'block' : 'none'}} className="m-0 name-warning error-text p-0 mb-2">
                        More than 10 number
                      </p>
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
                    placeholder="Departure"
                    id="DepartInput"
                    required
                    onChange={(e) => setUserInfo({...userInfo, department: e.target.value})}
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
                      onClick={addHandler}
                      type="submit"
                      className="btn submit-btn me-2"
                      data-bs-dismiss="modal"
                      aria-label="Close"
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
  );
}

export default Modal;


