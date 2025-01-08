import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";

function App() {
	return (
		<BrowserRouter>
			<div className="flex">
				<Sidebar />
				<div id="content"></div>
			</div>
		</BrowserRouter>
	);
}

export default App;
