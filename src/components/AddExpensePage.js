import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from  'react-redux';
import {startAddExpense} from '../actions/expenses';


 export const AddExpensePage =(props) =>(
    <div>
    <h1>Add Expense</h1>
    <ExpenseForm 
      onSubmit={(expense)=>{
        //props.dispatch(addExpense(expense));
        props.startAddExpense(expense);
        props.history.push('/');
        //used to redirect to dash board after form submit
      }}
    />
    </div>
  );

  const mapDispatchToProps =(dispatch)=>({
         startAddExpense :(expense)=> dispatch(startAddExpense(expense))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddExpensePage);  