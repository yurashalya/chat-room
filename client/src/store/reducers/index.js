import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import chatRooms from "./chatRooms";
import counter from "./counter";

export const history = createBrowserHistory({ basename: "/" });

const reducer = combineReducers({
	chatRooms,
	counter,
	router: connectRouter(history),
});

export default reducer;
