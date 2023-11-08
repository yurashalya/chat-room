import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxStoreProvider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import store from "./store/store";
import { history } from "./store/reducers";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { Home } from "pages";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ReduxStoreProvider store={store}>
		<ConnectedRouter history={history}>
			<App>
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
			</App>
		</ConnectedRouter>
	</ReduxStoreProvider>,
);

reportWebVitals();
