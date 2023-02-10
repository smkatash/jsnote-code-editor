import { createStore, applyMiddleware } from "redux";
import { persistMiddleware } from "./middlewares/persist-middleware";
import thunk from "redux-thunk";
import reducers from "./reducers";

export const store = createStore(
	reducers, 
	{},
	applyMiddleware(persistMiddleware, thunk)
); 
