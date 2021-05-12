import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashBoard =() =>(
    <div>
      <ExpenseSummary />
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
  );
  
  export default ExpenseDashBoard;  