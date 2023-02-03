import "bulmaswatch/nuclear/bulmaswatch.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state";
import CellList from "./components/cell-list";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
	return (
		<Provider store={store}>
			<div>
				<CellList />
			</div>
		</Provider>
	);
};

root.render(<App />);