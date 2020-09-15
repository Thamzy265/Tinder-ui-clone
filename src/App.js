import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/chats/sarah'>
						<Header backBtn='/chats' />
						<ChatScreen />
					</Route>
					<Route path='/chats'>
						<Header backBtn='/' />
						<Chats />
					</Route>
					<Route path='/'>
						<Header />
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
