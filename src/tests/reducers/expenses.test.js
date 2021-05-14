import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import {expenses} from '../fixtures(dummy).js/fixtures'; 

test ('should set default state',()=>{
    const state=expensesReducer(undefined ,{type : '@@INIT'});
    expect(state).toEqual([]);

});

test ('should remove expense by id',()=>{
    const action={
        type : 'REMOVE_EXPENSE',
        id :expenses[1].id
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})
test ('should not  remove expense by if id wrong',()=>{
    const action={
        type : 'REMOVE_EXPENSE',
        id : '-1'
    }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});
test ('should add expense ',()=>{
    const expense ={
        id : '4',
        description :'mario',
        note :'',
        amount: 500,
        createdAt: 11700
    };
    const action={
        type : 'ADD_EXPENSE',
        expense 
        }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual([ ...expenses , expense]);
});

test ('should edit expense ',()=>{
    const id =expenses[1].id;
    const updates ={
        amount: 500
       
    };
    const action={
        type : 'EDIT_EXPENSE',
        id,
        updates
        }
    const state=expensesReducer(expenses, action);
    expect(state[1].amount).toEqual(updates.amount);
});

test ('should  not edit expense  if id wrong',()=>{
    const id ='-1';
    const updates ={
        amount: 500
       
    };
    const action={
        type : 'EDIT_EXPENSE',
        id,
        updates
        }
    const state=expensesReducer(expenses, action);
    expect(state).toEqual(expenses );
});

test('should set expenses' , ()=>{
      const action={
          type: 'SET_EXPENSES',
          expenses: [expenses[1]]
      };
      const state=expensesReducer(expenses,action);
      expect (state).toEqual([expenses[1]]);
});






