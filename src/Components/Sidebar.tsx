import { ReactNode, SetStateAction, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
	const menuRef = useRef<HTMLDivElement>(null);
	const sidebarRef = useRef<HTMLDivElement>(null);
	const location = useLocation();
	const [showSidebar, setShowSidebar] = useState<boolean>(true);
	const [selectedPage, setSelectedPage] = useState<string>("/");

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

	useEffect(() => {
		setSelectedPage(location.pathname);
		if (location.pathname === "/login") {
			setShowSidebar(false);
		} else {
			setShowSidebar(true);
		}
	}, [location]);

	return (
		<div className={`${showSidebar ? "block" : "hidden"}`}>
			<button
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}
				className="p-2 m-2 bg-secondary text-white rounded-md lg:hidden"
			>
				{isSidebarOpen ? "Close" : "Menu"}
			</button>

			<aside
				ref={sidebarRef}
				id="sidebar"
				className={`select-none fixed top-0 left-0 h-screen text-white w-[270px] transform transition-transform duration-300 ease-in-out z-40 ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} lg:translate-x-0 lg:relative flex flex-col`}
			>
				<h1 className="uppercase text-start m-5 text-2xl mb-12">
					Company Name
				</h1>

				<div className="flex flex-col flex-grow w-full" id="actions">
					<Btn
						path="/"
						childLink=""
						label="Dashboard"
						currentPage={selectedPage}
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
						currentPage={selectedPage}
						ext={false}
						subLinks={
							<>
								<SubLink
									path="/items/manage"
									label="Transactions"
									currentPage={selectedPage}
								/>
								<SubLink
									path="/items/edit"
									label="Transactions"
									currentPage={selectedPage}
								/>
							</>
						}
					/>
				</div>

				<div className="flex items-center justify-start p-4 gap-5">
					<div className="h-8 w-8 bg-primary rounded-full"></div>
					<h1 className="flex-1 text-start">Shasha</h1>

					<UserMenu
						showMenu={showMenu}
						setShowMenu={setShowMenu}
						menuRef={menuRef}
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
		</div>
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
				<div
					className={`${
						isActive
							? "border-l-primary bg-primary/10 rounded-r-full"
							: "border-l-transparent"
					} border-l-4 py-2`}
				>
					<div className="flex items-center gap-5 pl-5">
						{startIcon ?? (
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
									d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
								/>
							</svg>
						)}

						<p className="font-thin text-[18px] truncate">{label}</p>
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
		"items-center gap-1 p-2 w-full text-[.9rem] tracking-wide py-2";
	const activeClasses = isActive
		? "text-primary font-bold"
		: "text-gray-400 font-medium";
	const iconClasses = isActive ? "text-primary" : "text-gray-400";

	return (
		<Link to={path}>
			<div className={`${baseClasses} ${activeClasses} group`}>
				<div className="flex items-center gap-1">
					<div
						className={`h-1.5 w-1.5 rounded-full ${
							isActive ? "bg-primary" : "bg-gray-400"
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

function UserMenu({
	showMenu,
	setShowMenu,
	menuRef,
}: {
	showMenu: boolean;
	setShowMenu: React.Dispatch<SetStateAction<boolean>>;
	menuRef: React.RefObject<HTMLDivElement>;
}) {
	return (
		<div id="userMenu" className="relative" ref={menuRef}>
			{showMenu && (
				<div
					className={`absolute p-2 space-y-1 bg-white rounded-xl bottom-[40px] right-0 border mt-2 flex flex-col items-start min-w-[120px] transition-all duration-300 ease-out transform ${
						showMenu ? "fade-up" : "opacity-0"
					}`}
				>
					<button className="menuButton">Switch User</button>
					<button className="menuButton">Log Out</button>
				</div>
			)}
			<button
				onClick={() => setShowMenu(!showMenu)}
				className="bg-transparent text-white hover:bg-gray-800 hover:text-white p-2"
			>
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
						d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
					/>
				</svg>
			</button>
		</div>
	);
}
