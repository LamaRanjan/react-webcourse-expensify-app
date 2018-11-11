import { createStore } from 'redux';

// action generators - functions that return action object
const incrementCount = ({ incrementBy = 1 } = {}) => ({
	type: 'INCREMENT',
	incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
	type: 'DECREMENT',
	decrementBy
});

const resetCount = ({ countReset = 0 } = {}) => ({
	type: 'RESET',
	countReset
});

const setCount = ({ count }) => ({
	type: 'SET',
	count
});

// reducers
const countReducer = (state = { count: 0 }, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return {
				count: state.count + action.incrementBy
			};

		case 'DECREMENT':
			return {
				count: state.count - action.decrementBy
			};
		case 'SET':
			return {
				count: action.count
			};

		case 'RESET':
			return {
				count: action.countReset
			};

		default:
			return state;
	}
};
// createStore expects arguments - a function
// set default state in argument place since there is no constructor
const Store = createStore(countReducer);

const unsubscribe = Store.subscribe(() => {
	console.log(Store.getState());
});

// Actions to change redux store value
// pass Action to store using dispatch method
Store.dispatch(incrementCount({ incrementBy: 3 }));

Store.dispatch(incrementCount());

Store.dispatch(resetCount());

Store.dispatch(decrementCount());

Store.dispatch(decrementCount({ decrementBy: 10 }));

Store.dispatch(setCount({ count: 201 }));
