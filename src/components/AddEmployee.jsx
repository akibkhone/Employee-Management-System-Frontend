import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the CSS
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function AddEmployee() {

  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  }

  function saveEmployee(e) {
    e.preventDefault();
    console.log("Save button clicked");
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        navigate("/employeeList")
        if (response.status === 200) {
          setShowSuccessMessage(true);
          toast.success("Employee added successfully", {
            toastId: "success-toast",
            bodyClassName: "text-sm ",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function clear(e) {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
    });
  }  
  

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b justify-center mt-10">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1> Add New Employee </h1>
        </div>
        <div className="items-center justify-center  h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            className="h-10 w-96 border mt-2 px-2 py-2"
            placeholder="Enter your first name..."
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center  h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            placeholder="Enter your last name..."
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="items-center justify-center  h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            placeholder="Enter your email..."
            className="h-10 w-96 border mt-2 px-2 py-2"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <Button  buttonName= "Save" color= "green" clickFunction= {(e) => saveEmployee(e)} />
          <Button  buttonName= "Clear" color= "red" clickFunction= {(e) => clear(e)} />
        </div>
        {showSuccessMessage && (
          <div className="w-4 p-0">
            <ToastContainer // add a ToastContainer component
              position="bottom-right"
              style={{ marginTop: "15px" , textAlign: "center", fontWeight: "bold"}} // Adjust margin-top here
              autoClose={3000}
              hideProgressBar={false}
              width="10px"
              newestOnTop={false}
              closeOnClick
              rtl
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AddEmployee;
