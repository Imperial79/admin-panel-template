import Heading from "../Components/Heading";
import { formatDate } from "../Utils/constants";

const DashboardUI = () => {
	return (
		<div className="content flex flex-col gap-5">
			{/* <BreadCrumbs labels={["Dashboard", "Home"]} links={["/", "/home"]} /> */}
			<div>
				<h3 className="font-bold text-xl">
					<span className="font-normal">Hi there, </span>
					Username
				</h3>
				<Heading title={formatDate(new Date(), "DD MMMM, YYYY")} />
			</div>

			<div className="kCard grid grid-cols-[30%_70%]">
				<div className="flex flex-col">
					<p className="font-bold text-xl">This month your stores have sold</p>
					<p className="font-normal text-[40px] mt-1">Rs. 10,000</p>
				</div>
				<div
					id="salesGraph"
					className="w-full bg-gray-100 rounded-xl min-h-[300px]"
				></div>
			</div>

			<div className="kCard">
				<table className="min-w-full divide-y divide-gray-200">
					<thead>
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs text-gray-900 font-bold uppercase tracking-wider"
							>
								Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-left text-xs text-gray-900 font-bold uppercase tracking-wider"
							>
								Age
							</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Avishek
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								24
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								John Doe
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								30
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Jane Smith
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								28
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Jane Smith
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								28
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Jane Smith
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								28
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Jane Smith
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								28
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								Jane Smith
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								28
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default DashboardUI;
