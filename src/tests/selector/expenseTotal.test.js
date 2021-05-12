import {expenses} from '../fixtures(dummy).js/fixtures';
import expenseTotal from '../../selectors/expenseTotal';
import selectExpenses from '../../selectors/expenses';

test ('should return zero if no expenses' , ()=>{
    const filters =  {
        text: 'bat',
        sortBy :'date',
        startDate : undefined,
        endDate : undefined
    };
    const filt =selectExpenses(expenses, filters);
    const  result=expenseTotal(filt);
    expect(result).toBe(0);
})

test ('should return amount total with one expense' , ()=>{
    const filters =  {
        text: 'card',
        sortBy :'date',
        startDate : undefined,
        endDate : undefined
    };
    const filt =selectExpenses(expenses, filters);
    const  result=expenseTotal(filt);
    expect(result).toBe(expenses[2].amount);
})
test ('should return zero if  expenses' , ()=>{
    const filters =  {
        text: '',
        sortBy :'date',
        startDate : undefined,
        endDate : undefined
    };
    const filt =selectExpenses(expenses, filters);
    const  result=expenseTotal(filt);
    expect(result).toBe(4500);
})
