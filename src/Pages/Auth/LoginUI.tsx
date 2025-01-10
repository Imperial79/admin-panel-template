import { useState } from "react";

const LoginUI = () => {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	return (
		<div className="relative min-h-screen flex flex-col lg:flex-row">
			<div className="flex-1 flex-grow flex items-center justify-center p-4 lg:p-0">
				<div className="text-center flex flex-col items-center text-white">
					<div className="circleAvatar mb-5"></div>
					<h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
					<p className="text-lg">Please log in to continue</p>
				</div>
			</div>
			<div className="flex-1 flex items-center justify-center p-4 lg:p-0">
				<div className="w-full max-w-md bg-white border rounded-[30px] md:p-7 p-6 flex flex-col items-start">
					<h2 className="font-medium text-xl mb-5">Enter login details</h2>

					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						placeholder="Enter username"
						className="mb-5"
					/>

					<label htmlFor="password">Password</label>
					<div className="flex gap-2 w-full">
						<input
							type={showPassword ? "text" : "password"}
							id="password"
							placeholder="Enter password"
							className="tracking-[10px] placeholder:tracking-normal flex-1"
						/>
						<button
							onClick={() => setShowPassword(!showPassword)}
							className="px-2 flex-shrink-0"
						>
							{!showPassword ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-4"
								>
									<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
									<path
										fillRule="evenodd"
										d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
										clipRule="evenodd"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
									className="size-4"
								>
									<path d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" />
									<path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" />
									<path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
								</svg>
							)}
						</button>
					</div>

					<button className="w-full p-3 mt-5 bg-black text-white hover:bg-gray-700 hover:text-white flex items-center justify-between">
						<p>Proceed</p>
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
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default LoginUI;
