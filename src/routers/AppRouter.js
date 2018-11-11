import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';

// use route to render multiple pages of websites
const AppRouter =()=>(
    <BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true} />
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={PageNotFound} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;

