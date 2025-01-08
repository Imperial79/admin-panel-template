import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import BreadCrumbs from "./Components/BreadCrumbs";
import Heading from "./Components/Heading";

function App() {
	return (
		<BrowserRouter>
			<div className="flex">
				<Sidebar />
				<div id="content" className="w-full bg-gray-100 p-5">
					<BreadCrumbs labels={["Dashboard", "Home"]} links={["/", "/home"]} />
					<Heading title="Dashboard" />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
