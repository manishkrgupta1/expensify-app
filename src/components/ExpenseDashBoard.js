import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './expenseListFilters';
import ExpenseSummary from './ExpenseSummary';
import Header from '../components/Header';

const ExpenseDashBoard =() =>(
    <div>
      
      <ExpenseSummary />
      <ExpenseListFilters/>
      <ExpenseList/>
    </div>
  );
  
  export default ExpenseDashBoard;  