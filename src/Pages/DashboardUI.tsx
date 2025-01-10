import { formatDate } from "../Utils/constants";

const DashboardUI = () => {
	return (
		<div className="p-5 text-start">
			{/* <BreadCrumbs labels={["Dashboard", "Home"]} links={["/", "/home"]} /> */}
			<h3 className="font-bold text-xl">
				<span className="font-normal">Hi there, </span>
				Username
			</h3>
			<h1 className="text-5xl font-bold mt-2">
				{formatDate(new Date(), "DD MMMM, YYYY")}
			</h1>
			{/* <Heading title="Dashboard" /> */}

			<div className="p-5 rounded-2xl border border-border bg-white mt-10 grid grid-cols-[30%_70%]">
				<div className="flex flex-col">
					<p className="font-bold text-xl">This month your stores have sold</p>
					<p className="font-normal text-[40px] mt-2">Rs. 10,000</p>
				</div>
				<div
					id="salesGraph"
					className="w-full bg-gray-100 rounded-xl min-h-[300px]"
				></div>
			</div>
		</div>
	);
};

export default DashboardUI;
