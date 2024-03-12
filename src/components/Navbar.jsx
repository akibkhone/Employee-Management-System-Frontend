import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="bg-gray-800 block">
			<div className="h-16 px-8 w-full flex items-center">
				<p className="text-white font-bold">
					<a
						className="cursor-pointer"
						onClick={() => navigate('/employeeList')}>
						Employee Management System
					</a>
				</p>
			</div>
		</div>
	);
}

export default Navbar;
