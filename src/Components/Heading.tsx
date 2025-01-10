const Heading = ({ title }: { title: string }) => {
	return (
		<div>
			<h1 className="text-5xl font-bold mt-2">{title}</h1>
		</div>
	);
};

export default Heading;
