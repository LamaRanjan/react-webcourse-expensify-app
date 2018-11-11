import React from 'react';
import { connect } from 'react-redux'; //
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../redux/actions/expenses';

// add expense page needs to dispactch the given actions to redux store
const AddExpensePage = (props) => (
	<div>
		<h1>This is from my add expense component.</h1>
		<ExpenseForm
			onSubmit={(expense) => {
				props.dispatch(addExpense(expense));
				props.history.push('/'); // switch to page without refreshing - browser routing
			}}
		/>
	</div>
);
// connect to redux store
export default connect()(AddExpensePage);
