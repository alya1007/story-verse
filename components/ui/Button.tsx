import React, { FC } from "react";

type ButtonProps = {
	text: string;
	onClick: () => void;
	aria: string;
};

const Button: FC<ButtonProps> = ({ text, onClick, aria }) => {
	return (
		<button
			className="bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-300 inline-block text-white"
			onClick={onClick}
			aria-label={aria}
		>
			{text}
		</button>
	);
};

export default Button;
