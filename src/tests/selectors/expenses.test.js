import selectExpenses from '../../redux/selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        id:'1',
        description:'Gum',
        note:'',
        amount: 100,
        createdAt:0
    },{
        id:'2',
        description:'Rent',
        note:'',
        amount: 50,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },{
        id:'3',
        description:'Credit',
        note:'',
        amount: 70,
        createdAt:moment(0).add(4, 'days').valueOf()
    }
];

test('Should filter by text', () => {
    const filters = {
        text:'e', 
        sortBy:'Date', 
        startDate: undefined, 
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2]]);
});

test('Should filter by date', () => {
    const filters = {
        text:'', 
        sortBy:'Date', 
        startDate: moment(0), 
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[2]]);
});
