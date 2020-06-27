import React from "react";
import Main from 'page/Main';
import {
	BrowserRouter as BRouter,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Header from 'layout/Header';
import Gnb from 'layout/Gnb';
import Footer from 'layout/Footer';

const RouterSet = () => {
	return (
		<BRouter>
			<Header />
			<Gnb />
			<div id="container">
				<Switch>
					<Route path="/" exact component={Main} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
			<Footer />
		</BRouter>
	);
}

export default RouterSet;