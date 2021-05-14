import {startAddExpense, addExpense , editExpense , removeExpense} from '../../actions/expenses';
import {expenses} from '../fixtures(dummy).js/fixtures';
import thunk from 'redux-thunk';
import  configureMockStore from 'redux-mock-store';
import database from '../../firebase/firebase';

const createMockStore=configureMockStore([thunk]);

test ('should setup remove expense action' , ()=>{
    const action =removeExpense({id : '123abc'});
    expect (action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test ('should setup edit expense action object' , ()=>{
    const action =editExpense('123abc' ,{note :'test'});
    expect (action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note : 'test'
        }
    });
});

test ('should setup add action expense action object with provided value' , ()=>{
    
    const action =addExpense(expenses[2]);
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    });
    
});

test ('should add expense to data base and store' , (done)=>{
       const store = createMockStore({});
        const expenseData={
            description :'mouse',
            amount : 1000,
            createdAt : 1000,
            note :'this one is best' , 
        }

        store.dispatch(startAddExpense(expenseData)).then(()=>{
            const actions=store.getActions();
            expect(actions[0]).toEqual({
                type : 'ADD_EXPENSE',
                expense :{
                    id :expect.any(String),
                    ...expenseData
                }
            });

         return   database.ref(`expenses/${actions[0].expense.id}`).once('value');
            
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        });
});

test ('should add expense to data base and store' , (done)=>{
    const store = createMockStore({});
     const expenseDefault={
         description :'',
         amount : 0,
         createdAt : 0,
         note :'' , 
     }

     store.dispatch(startAddExpense({})).then(()=>{
         const actions=store.getActions();
         expect(actions[0]).toEqual({
             type : 'ADD_EXPENSE',
             expense :{
                 id :expect.any(String),
                 ...expenseDefault
             }
         });

      return   database.ref(`expenses/${actions[0].expense.id}`).once('value');
         
     }).then((snapshot) => {
         expect(snapshot.val()).toEqual(expenseDefault);
         done();
     });
});

/*test ('should add expense with defaults to database and store' , (done)=>{
    const store = createMockStore({});
     

     store.dispatch(startAddExpense({})).then(()=>{
         const actions=store.getActions();
         const defaultData={
            description :'',
            amount :0,
            createdAt  :0,
            note : ''

         };
         expect(actions[0]).toEqual({
             type : 'ADD_EXPENSE',
             expense :{
                 id :expect.any(String),
                 ...defaultData
             }
         });

      return   database.ref(`expenses/${actions[0].expense.id}`).once('value');
         
     }).then((snapshot) => {
         expect(snapshot.val()).toEqual(defaultData);
         done();
     });
});*/
/*test ('should setup add action expense action object with default value' , ()=>{
     const action=startAddExpense();
     expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description :'',
            amount : 0,
            createdAt : 0,
            note :'' ,
            id: expect.any(String)
        }
     });
});
*/