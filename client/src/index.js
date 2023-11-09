import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxStoreProvider } from "react-redux";

import { ConnectedRouter } from "connected-react-router";

import store from "./store/store";
import { history } from "./store/reducers";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
if (root) {
	root.render(
		<ReduxStoreProvider store={store}>
			<ConnectedRouter history={history}>
				<App />
			</ConnectedRouter>
		</ReduxStoreProvider>,
	);
}

reportWebVitals();
