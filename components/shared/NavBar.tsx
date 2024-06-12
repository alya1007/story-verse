"use client";

import { navLinks } from "@/app/constants";
import {
	Bookmark,
	BookMarked,
	Feather,
	House,
	Settings,
	TableOfContents,
	Timer,
} from "lucide-react";
import Link from "next/link";
import Route from "../ui/Route";
import Image from "next/image";

const Navbar = () => {
	return (
		<div className="py-3">
			<div className="flex flex-col justify-between h-full border-r-[2.5px] border-shadow px-3">
				<Link href={"/"} className="flex items-center justify-center pt-3">
					<Image alt="logo" width={40} height={40} src={"/logo.png"}></Image>
				</Link>
				<nav className="py-4 h-full flex flex-col justify-center items-center">
					<ul className="h-full flex flex-col justify-center items-center gap-5">
						<li className="hover:text-white hover:bg-primary p-3 rounded-full transition-all ease-in-out duration-100 cursor-pointer">
							<Route route={"/"} label={<House />}></Route>
						</li>
						<li className="hover:text-white hover:bg-primary p-3 rounded-full transition-all ease-in-out duration-100 cursor-pointer">
							<Route route={"/"} label={<BookMarked />}></Route>
						</li>
						<li className="hover:text-white hover:bg-primary p-3 rounded-full transition-all ease-in-out duration-100 cursor-pointer">
							<Route route={"/"} label={<Timer />}></Route>
						</li>
						<li className="hover:text-white hover:bg-primary p-3 rounded-full transition-all ease-in-out duration-100 cursor-pointer">
							<Route route={"/"} label={<Settings />}></Route>
						</li>
					</ul>
				</nav>
				<div className="p-3">
					<TableOfContents />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
