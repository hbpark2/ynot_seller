import React from "react";
import Main from 'page/Main';
import FormItem from 'guide/FormItem';
import TableItem from 'guide/TableItem';
import TabItem from 'guide/TabItem';
import RegTemplate from 'guide/register_box_template';
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
					<Route path="/register_template" exact component={RegTemplate} />
					<Route path="/form_item" exact component={FormItem} />
					<Route path="/table_item" exact component={TableItem} />
					<Route path="/tab_item" exact component={TabItem} />
					<Redirect from="*" to="/" />
				</Switch>
			</div>
			<Footer />
		</BRouter>
	);
}

export default RouterSet;