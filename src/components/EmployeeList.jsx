import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
	const navigate = useNavigate();

	const [employees, setEmployees] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			setLoading(true);
			try {
				const response = await EmployeeService.fetchEmployees();
				console.log(response); // Add this line
				setEmployees(response.data); // Assuming data is the array of employees
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		}
		fetchData();
	}, []);

	function deleteEmployee(e, id) {
		e.preventDefault();
		EmployeeService.deleteEmployee(id).then((res) => {
			if (employees) {
				setEmployees((prevElement) => {
					return prevElement.filter((employee) => employee.id !== id);
				});
			}
		});
	}

	return (
		<div className="container mx-auto my-8 bg">
			{/* Responsive button */}
			<div className="flex justify-center sm:justify-start m-2">
				{' '}
				{/* Responsive layout: Center align on small screens, right align on larger screens */}
				<button
					className="font-bold tracking-wider border-none rounded-full bg-gray-800 cursor-pointer text-white px-4 py-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl active:scale-95"
					onClick={() => navigate('/addEmployee')}>
					Add Employee
				</button>
			</div>
			<div className="flex flex-col shadow border-b">
				<table className="min-w-full">
					<thead className="bg-green-50">
						<tr>
							<th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-3 sm:px-6">
								First Name
							</th>
							<th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-3 sm:px-6">
								Last Name
							</th>
							<th className="text-left font-medium text-grey-500 uppercase tracking-wider py-3 px-3 sm:px-6">
								Email Id
							</th>
							<th className="text-right mr font-medium text-grey-500 uppercase tracking-wider py-3 px-3 sm:px-6">
								Action
							</th>
						</tr>
					</thead>
					{/* Loading should be completed */}
					{!loading && (
						<tbody className="bg-white  border-b-2 border-b-purple-500">
							{employees.map((employee) => (
								<Employee
									employee={employee}
									key={employee.id}
									deleteEmployee={deleteEmployee}
								/>
							))}
						</tbody>
					)}
				</table>
			</div>
		</div>
	);
};

export default EmployeeList;
