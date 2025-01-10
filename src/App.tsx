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
					className="flex-1 bg-scaffold overflow-auto m-4 rounded-3xl"
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
