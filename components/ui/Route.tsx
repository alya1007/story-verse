import clsx from "clsx";
import Link from "next/link";
import { FC, MouseEvent } from "react";

type RouteProps = {
	route: string;
	label: React.ReactNode;
	isActive?: boolean;
	onClick?: () => void;
};

const Route: FC<RouteProps> = ({ route, label, isActive, onClick }) => {
	return (
		<Link
			href={route}
			onClick={onClick}
			className={clsx(isActive && "text-white bg-primary")}
		>
			{label}
		</Link>
	);
};

export default Route;
