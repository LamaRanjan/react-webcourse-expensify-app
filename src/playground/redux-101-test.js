import { createStore } from 'redux';

// action generators - functions that return action object
const incrementCount = (payload = {}) => ({
	type: 'INCREMENT',
	incrementBy: typeof payload.incrementBy == 'number' ? payload.incrementBy : 1
});
// createStore expects arguments - a function
// set default state in argument place since there is no constructor
const Store = createStore((state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
			return {
				count: state.count + incrementBy
			};

		case 'DECREMENT':
			const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
			return {
				count: state.count - decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};

		case 'RESET':
			return {
				count: 0
			};

		default:
			return state;
	}
});

const unsubscribe = Store.subscribe(() => {
	console.log(Store.getState());
});

// Actions to change redux store value
// pass Action to store using dispatch method

Store.dispatch({
	type: 'INCREMENT'
});

// call to unsubscribe stops computation after the call
//unsubscribe();
Store.dispatch(incrementCount());
Store.dispatch(incrementCount({ incrementBy: 3 }));

/* Store.dispatch({
	type: 'INCREMENT',
	incrementBy: 3
}); */

Store.dispatch({
	type: 'RESET'
});

Store.dispatch({
	type: 'DECREMENT',
	decrementBy: 10
});

Store.dispatch({
	type: 'SET',
	count: 101
});
