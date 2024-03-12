import React from 'react';

const Button = ({ buttonName, clickFunction }) => {
	const handleClick = (e) => {
		e.currentTarget.classList.toggle('bg-gray-400');
		clickFunction(e);
	};

	return (
		<button
			className="w-auto p-2 h-auto text-white text-center items-center justify-center border-none rounded-md text-sm font-bold cursor-pointer bg-gray-800 hover:bg-gray-400"
			onClick={(e) => handleClick(e)}>
			{buttonName}
		</button>
	);
};

export default Button;
