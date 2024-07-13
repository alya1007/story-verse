import clsx from "clsx";
import Link from "next/link";
import { FC, MouseEvent } from "react";

type RouteProps = {
	route: string;
	label: string;
	isActive: boolean;
	onClick: () => void;
};

const Route: FC<RouteProps> = ({ route, label, isActive, onClick }) => {
	return (
		<Link
			href={route}
			onClick={onClick}
			className={clsx(isActive && "text-primary rounded-none bg-transparent")}
		>
			{label}
		</Link>
	);
};

export default Route;
