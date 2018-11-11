import { addExpense, removeExpense, editExpense } from '../../../redux/actions/expenses';

test('Should setup remove expense action object', () => {
	const action = removeExpense({ id: '123abc' });
	expect(action).toEqual({
		type: 'REMOVE_EXPENSE',
		id: '123abc'
	});
});

test('Should setup edit expense action object', () => {
	const action = editExpense('123abc', { note: 'yes' });
	expect(action).toEqual({
		type: 'EDIT_EXPENSE',
		id: '123abc',
		updates: {
			note: 'yes'
		}
	});
});

test('Should setup add expense action object', () => {
	const expenseData = {
		description: 'Rent',
		note: 'This was last month rent',
		amount: 109500,
		createdAt: 1000
	};

	const action = addExpense(expenseData);
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
			...expenseData,
			id: expect.any(String)
		}
	});
});

test('Should setup default add expense action object', () => {
	const action = addExpense();
	expect(action).toEqual({
		type: 'ADD_EXPENSE',
		expense: {
      id:expect.any(String),
			description: '', 
			note: '',
			amount: 0,
			createdAt: 0
		}
	});
});
