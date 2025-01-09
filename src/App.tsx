import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import DashboardUI from "./Pages/DashboardUI";

function App() {
	return (
		<BrowserRouter>
			<div className="flex">
				<Sidebar />
				<div id="content" className="w-full bg-gray-100 p-5 overflow-auto">
					<Routes>
						<Route path="/" element={<DashboardUI />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
