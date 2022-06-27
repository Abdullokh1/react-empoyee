import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeEmploye } from '../../../store/EmployeeSlice';
import './Table.css'

function Table() {
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
              <button onClick={() => editHandler(item.id)} className="me-2 edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
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

  )
}

export default Table