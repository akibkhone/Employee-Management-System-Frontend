import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // import the CSS
import Button from "./Button";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.fetchEmployeeById(id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  function handleChange(e) {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  }

  function updateEmployee(e) {
    e.preventDefault();
    EmployeeService.updateEmployeeById(id, employee)
      .then((response) => {
        navigate("/employeeList");
        if (response.status === 200) {
            setShowSuccessMessage(true);
            toast.success("Employee Updated successfully", {
              toastId: "success-toast",
              bodyClassName: "text-sm ",
            });
          }
      })
      .catch((err) => {
        alert("Error in updating employee");
      });
  }


  return (
    <div className="flex max-w-2xl mx-auto shadow border-b justify-center mt-10">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1> Update New Employee </h1>
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
          <Button
            buttonName="Update"
            color="green"
            clickFunction={(e) => updateEmployee(e, employee.id)}
          />
          <Button
            buttonName="Cancel"
            color="yellow"
            clickFunction={() => navigate("/employeeList")}
          />
        </div>
        {showSuccessMessage && (
          <div className="w-4 p-0">
            <ToastContainer // add a ToastContainer component
              position="bottom-right"
              style={{
                marginTop: "15px",
                textAlign: "center",
                fontWeight: "bold",
              }} // Adjust margin-top here
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
};

export default UpdateEmployee;
