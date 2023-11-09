import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import chatRooms from "./chatRooms";
import loader from "./loader";

export const history = createBrowserHistory({ basename: "/" });

const reducer = combineReducers({
	chatRooms,
	loader,
	router: connectRouter(history),
});

export default reducer;
