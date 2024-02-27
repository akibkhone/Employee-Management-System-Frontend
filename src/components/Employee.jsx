import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmployee }) => {

  const navigate = useNavigate();

  function editEmployee(e, id){
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }
 

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.email}</div>
      </td>
      <td className="flex justify-end  text-right font-medium text-sm px-6 py-4 whitespace-nowrap">
        <Button buttonName= "Edit" color= "green" clickFunction= {(e, id) => editEmployee(e, employee.id)}/>
        <span className="ml-2"></span> {/* Spacer */}
        <Button buttonName= "Delete" color= "red" clickFunction= {(e, id) => deleteEmployee(e, employee.id)}/>
      </td>
    </tr>
  );
};

export default Employee;
