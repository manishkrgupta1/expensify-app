import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';
import {Link} from 'react-router-dom';

export const ExpenseSummary =({expenseCount , expenseTotal})=>{
    const expenseWord = expenseCount == 1 ?'expense':'expenses';
    const formattedTotalExpenses=numeral(expenseTotal /100).format('$0,0.00');
    return(
     <div className="page-header">
       <div className="content-container">
        <h1 className="page-header__title">viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formattedTotalExpenses}</span></h1>
          <div className="page-header__actions">
             <Link className="button" to='/create'>Add Expense</Link>
           </div>
          </div> 
    </div>
        );

};

const mapStateToProps=(state) =>{
    const visibleExpenses =selectExpenses(state.expenses , state.filters);
    return {
       expenseCount :visibleExpenses.length ,
       expenseTotal : expenseTotal(visibleExpenses) 
    };
};

export default connect(mapStateToProps)(ExpenseSummary);