import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
	const [employee, setEmployee] = useState({
		id: '',
		firstName: '',
		lastName: '',
		email: '',
	});

	const navigate = useNavigate();

	function handleChange(e) {
		const value = e.target.value;
		setEmployee({ ...employee, [e.target.name]: value });
	}

	function saveEmployee(e) {
		e.preventDefault();
		console.log('Save button clicked');
		EmployeeService.saveEmployee(employee)
			.then((response) => {
				console.log(response);
				navigate('/employeeList');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function clear(e) {
		e.preventDefault();
		setEmployee({
			id: '',
			firstName: '',
			lastName: '',
			email: '',
		});
	}

	return (
		<div className="flex flex-col justify-center items-center mt-10 max-w-xl max-w-screen-md mx-3.5">
			<div className="w-full bg-white shadow-md rounded-2xl px-8 py-8">
				<h1 className="text-2xl font-normal tracking-wider text-center mb-4">Add New Employee</h1>
				<div className="my-4">
					<label className="block text-gray-600 text-sm font-normal mb-2">First Name</label>
					<input
						type="text"
						name="firstName"
						value={employee.firstName}
						placeholder="Enter your first name..."
						className="w-full h-10 px-2 py-2 bg-gray-100 rounded-md shadow-md"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="my-4">
					<label className="block text-gray-600 text-sm font-normal mb-2">Last Name</label>
					<input
						type="text"
						name="lastName"
						value={employee.lastName}
						placeholder="Enter your last name..."
						className="w-full h-10 px-2 py-2 bg-gray-100 rounded-md shadow-md"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="my-4">
					<label className="block text-gray-600 text-sm font-normal mb-2">Email</label>
					<input
						type="email"
						name="email"
						value={employee.email}
						placeholder="Enter your email..."
						className="w-full h-10 px-2 py-2 bg-gray-100 rounded-md shadow-md"
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex justify-center mt-6 space-x-4">
					<Button
						buttonName="Save"
						color="green"
						clickFunction={(e) => saveEmployee(e)}
					/>
					<Button
						buttonName="Clear"
						color="red"
						clickFunction={(e) => clear(e)}
					/>
				</div>
			</div>
		</div>
	);
}

export default AddEmployee;
