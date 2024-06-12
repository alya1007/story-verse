import { Search } from "lucide-react";
import { FC } from "react";

type HeaderProps = {
	title: string;
};

const Header: FC<HeaderProps> = ({ title }) => {
	return (
		<div className="flex items-center justify-between pt-5 absolute px-10">
			<div className="flex-1">
				<Search size={18} />
				
			</div>
			<div className="flex space-x-4">
				<div>Right Item 1</div>
				<div>Right Item 2</div>
			</div>
		</div>
	);
};

export default Header;
