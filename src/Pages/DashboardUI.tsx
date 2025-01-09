import BreadCrumbs from "../Components/BreadCrumbs";
import Heading from "../Components/Heading";

const DashboardUI = () => {
	return (
		<>
			<BreadCrumbs labels={["Dashboard", "Home"]} links={["/", "/home"]} />
			<Heading title="Dashboard" />
		</>
	);
};

export default DashboardUI;
