import { Link } from "react-router-dom";
interface BreadCrumbsProps {
	labels: string[];

	links: string[];
}
const BreadCrumbs = ({ labels, links }: BreadCrumbsProps) => {
	return (
		<div className="flex gap-1">
			{labels.map((text, index) => (
				<div className="flex gap-1 items-center">
					<Link to={links[index]} key={index} className="group">
						<p className="font-medium group-hover:underline underline-offset-4 text-gray-500 group-hover:text-blue-700">
							{text}
						</p>
					</Link>
					{index == labels.length - 1 || (
						<div className=" bg-white rounded-full">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="size-4"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m8.25 4.5 7.5 7.5-7.5 7.5"
								/>
							</svg>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default BreadCrumbs;
