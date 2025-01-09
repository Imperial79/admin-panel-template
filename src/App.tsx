import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import DashboardUI from "./Pages/DashboardUI";
import LoginUI from "./Pages/Auth/LoginUI";

function App() {
	return (
		<BrowserRouter>
			<div className="flex">
				<Sidebar />
				<div
					id="content"
					className="w-full bg-gray-100 overflow-auto min-h-screen"
				>
					<Routes>
						<Route path="/" element={<DashboardUI />} />
						<Route path="/login" element={<LoginUI />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
