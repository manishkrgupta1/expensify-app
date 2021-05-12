import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import expenseTotal from '../selectors/expenseTotal';
import numeral from 'numeral';

export const ExpenseSummary =({expenseCount , expenseTotal})=>{
    const expenseWord = expenseCount == 1 ?'expense':'expenses';
    const formattedTotalExpenses=numeral(expenseTotal /100).format('$0,0.00');
    return(
     <div>
      {
            <h1>{`viewing ${expenseCount} ${expenseWord} totaling ${formattedTotalExpenses}`}</h1>
      }
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