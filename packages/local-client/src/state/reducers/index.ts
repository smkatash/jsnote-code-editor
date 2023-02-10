import cellReducer from "./cell-reducer";
import { combineReducers } from "redux";
import bundlesReducer from "./bundles-reducer";

const reducers = combineReducers({
	cells: cellReducer,
	bundles: bundlesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
