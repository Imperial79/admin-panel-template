const Heading = ({ title }: { title: string }) => {
	return (
		<div>
			<h1 className="text-start text-2xl my-5 font-bold">{title}</h1>
		</div>
	);
};

export default Heading;
