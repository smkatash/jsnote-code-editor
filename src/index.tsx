import "bulmaswatch/slate/bulmaswatch.min.css"
import ReactDOM from "react-dom/client";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import { store } from "./state";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

//<CodeCell />
const App = () => {
	return (
		<Provider store={store}>
			<div>
				<TextEditor />
			</div>
		</Provider>
	);
};

root.render(<App />);