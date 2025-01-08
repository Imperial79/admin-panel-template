import { ReactNode, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setShowMenu(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			{/* Toggle Button for Mobile */}
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="p-2 m-2 bg-gray-800 text-white rounded-md lg:hidden"
			>
				{isSidebarOpen ? "Close" : "Menu"}
			</button>

			{/* Sidebar */}
			<aside
				ref={sidebarRef}
				id="sidebar"
				className={`fixed top-0 left-0 h-screen bg-gray-50 w-64 transform transition-transform duration-300 ease-in-out z-40 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 lg:relative`}
			>
				<div className="flex items-center gap-2 p-2">
					<div className="rounded-full h-[40px] w-[40px] bg-gray-200 flex-shrink-0"></div>

					<div className="flex flex-col items-start">
						<h1 className="text-lg font-medium">Company Name</h1>
						<h1 className="text-[12px] font-normal text-white bg-orange-600 px-2 rounded-full">
							Admin
						</h1>
					</div>
				</div>
				<div className="w-full bg-gray-200 p-2 flex gap-2 items-center my-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
						/>
					</svg>

					<div className="flex-1 flex flex-col items-start">
						<p className="font-medium text-sm">John Doe</p>
						<p className="text-xs">jon@doe.com</p>
					</div>
					<div id="userMenu" className="relative" ref={menuRef}>
						<button onClick={() => setShowMenu(!showMenu)}>
							{showMenu ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18 18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
									/>
								</svg>
							)}
						</button>
						{showMenu && (
							<div
								className={`absolute py-2 bg-white rounded-xl border mt-2 flex flex-col items-start min-w-[200px] transition-all duration-300 ease-out transform ${
									showMenu ? "fade-up" : "opacity-0"
								}`}
							>
								<button className="w-full hover:bg-gray-100 p-2">
									Switch User
								</button>
								<button className="w-full hover:bg-red-100 p-2 text-red-900 font-medium">
									Log Out
								</button>
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col w-full">
					<Btn
						path="/"
						childLink="/"
						label="Dashboard"
						currentPage={"/items/manage"}
						ext={false}
						startIcon={
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
								/>
							</svg>
						}
						subLinks={undefined}
					/>
					<Btn
						path="/items"
						childLink="/manage"
						label="Items"
						currentPage={"/items/manage"}
						ext={false}
						subLinks={
							<>
								<SubLink
									path="/items/manage"
									label="Transactions"
									currentPage={"/items/manage"}
								/>
								<SubLink
									path="/items/edit"
									label="Transactions"
									currentPage={"/items/manage"}
								/>
							</>
						}
					/>
				</div>
			</aside>
			{/* Background Overlay */}
			{isSidebarOpen && (
				<div
					onClick={() => setIsSidebarOpen(false)}
					className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
				/>
			)}
		</>
	);
};

export default Sidebar;

function Btn({
	path = "",
	ext = false,
	label = "",
	childLink = "",
	startIcon,
	currentPage = "",
	subLinks = undefined,
}: {
	path: string;
	ext: boolean;
	label: string;
	childLink: string;
	startIcon?: ReactNode;
	currentPage: string;
	subLinks: ReactNode;
}) {
	const isActive = subLinks ? currentPage.includes(path) : currentPage === path;
	const contentRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState<number>(0);

	useEffect(() => {
		if (contentRef.current) {
			setContentHeight(contentRef.current.scrollHeight);
		}
	}, [subLinks]);
	return (
		<div className="w-full">
			<Link to={path + childLink} target={ext ? "_blank" : ""}>
				<div className={`${isActive ? "activeBtn" : "inActiveBtn"}`}>
					<div className="flex items-center gap-2 pl-2">
						<div
							className={`rounded-full p-1 ${
								isActive
									? "bg-gray-500 text-white"
									: "text-gray-700 bg-gray-200"
							}`}
						>
							{startIcon ?? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
									/>
								</svg>
							)}
						</div>
						<p className="font-medium truncate">{label}</p>
					</div>
				</div>
			</Link>

			<div
				ref={contentRef}
				style={{
					maxHeight: isActive ? `${contentHeight}px` : "0",
				}}
				className={`overflow-hidden transition-all duration-300 ease-in-out pl-5 ${
					subLinks && isActive ? "mt-2" : ""
				}`}
			>
				{subLinks}
			</div>
		</div>
	);
}

function SubLink({
	path = "",
	label = "",
	startIcon = null,
	currentPage = "",
}: {
	path: string;
	label: string;
	startIcon?: ReactNode;
	currentPage: string;
}) {
	const isActive = currentPage === path;
	const baseClasses =
		"items-center gap-1 p-2 w-full text-[.8rem] tracking-wide py-2";
	const activeClasses = isActive
		? "text-black font-bold"
		: "text-black font-medium";
	const iconClasses = isActive ? "text-black" : "text-gray-400";

	return (
		<Link to={path}>
			<div className={`${baseClasses} ${activeClasses} group`}>
				<div className="flex items-center gap-1">
					<div
						className={`h-1.5 w-1.5 rounded-full ${
							isActive ? "bg-black" : "bg-transparent"
						} mr-1`}
					/>
					<span className={iconClasses}>{startIcon}</span>
					<p className="truncate group-hover:underline underline-offset-[3px]">
						{label}
					</p>
				</div>
			</div>
		</Link>
	);
}
