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
				<div id="content" className="flex-1">
					<Routes>
						<Route path="/login" element={<LoginUI />} />
						<Route path="/" element={<DashboardUI />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
