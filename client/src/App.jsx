import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, QaChatRoom, BackendChatRoom, FrontendChatRoom } from "pages";

const App = () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<Route path="/backend-chat" component={BackendChatRoom} />
			<Route path="/frontend-chat" component={FrontendChatRoom} />
			<Route path="/qa-chat" component={QaChatRoom} />
			<Route path="*" component={HomePage} />
		</Switch>
	);
};

export default App;
