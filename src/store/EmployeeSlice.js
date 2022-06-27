import { createSlice } from "@reduxjs/toolkit";
import data from '../Data/Data'

const initialState = data;

const employeeSlice = createSlice({
  name : "employee",
  initialState,
  reducers : {
    addEmployee : (state, action) =>{
      return [action.payload.data, ...state]
    },
   
    removeEmploye : (state, action) =>{
      if(window.confirm('Are you sure')){
        return state.filter(item => item.id !== action.payload.id)
      }
    },

    editEmployee : (state, action) => {
      state.filter(item => {
        if(item.id === action.payload.data.id){
          item.name = action.payload.data.name
          item.email = action.payload.data.email
          item.number = action.payload.data.number
          item.department = action.payload.data.department
        }
      })
    }
  }
});

export const {addEmployee, removeEmploye, editEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;