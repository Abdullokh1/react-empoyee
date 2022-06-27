import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from '../store/EmployeeSlice'

export default configureStore({
  reducer : {
    employee : employeeSlice,
  }
})


