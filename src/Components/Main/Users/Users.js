import React, { useState } from 'react'
import './Users.css'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeEmploye } from '../../../store/EmployeeSlice';
import Modal from '../Modal/Modal'
import EditModal from '../EditModal/EditModal'

function Users() {
  let [id, setId] = useState();
  const employee  = useSelector((state) => state.employee);
  const dispatch = useDispatch();

  const removeHandler = (userId) => {
    dispatch(
      removeEmploye({id: userId})
    )
  }

  const editHandler = (editId) =>{
    setId(editId)
  }

  return (
   <div className="cards-wrapper cards p-5">
      <div className="cards__inner">
        <div className="d-flex justify-content-between align-items-center">
          <div className="cards__input">
            <i className="bx me-2 cards__icon fs-5 bx-search-alt-2" />
            <input className="cards__search" type="text" name="search-employee" id="SearchInput" />
            <span className="cards__info">Search Employees</span>
          </div>
          <button className="cards__btn d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal" id="addBtn">
            <i className="bx me-2 fs-4 bx-plus" />
            Add New
          </button>
          <Modal/>
          <EditModal id={id}/>
        </div>
        <table className="table list-unstyled mt-4">
          <thead>
            <tr>
              <th className="table__head">
                <button className="table__button">
                  Employee Name <i className="bx up-icon bx-up-arrow-alt" />
                </button> 
              </th>
              <th className="table__head">
                <button className="table__button">
                  Email Address(Personal) <i className="bx up-icon bx-up-arrow-alt" />
                </button> 
              </th>
              <th className="table__head">
                <button className="table__button">
                  Mobile Number <i className="bx up-icon bx-up-arrow-alt" />
                </button> 
              </th>
              <th className="table__head">
                <button className="table__button">
                  Department <i className="bx up-icon bx-up-arrow-alt" />
                </button> 
              </th>
              <th className="table__head">
                <button className="table__button">
                  Action <i className="bx up-icon bx-up-arrow-alt" />
                </button> 
              </th>
            </tr>
          </thead>
          <tbody>
            {employee.map(item =>{
              console.log(item.id);
              return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.number}</td>
                <td>{item.department}</td>
                <td>
                  <div className="d-flex edit-wrapper">
                    <button onClick={() => editHandler(item.id)} className="me-2 edit-btn" data-bs-toggle="modal"  data-bs-target="#exampleModal2">
                      <i className="bx  bx-edit-alt" />
                    </button>
                    <button onClick={() => removeHandler(item.id)} className="remove-btn">
                      <i className="bx bx-x" />
                    </button>
                  </div>
                </td>
              </tr>
              )
            })}
          </tbody>
        </table>

      </div>
   </div>
  )
}

export default Users












