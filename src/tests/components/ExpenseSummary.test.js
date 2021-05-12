import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';


test ('should correctly render ExpensesSummary with one expense',()=>{
    const wrapper=shallow(<ExpenseSummary expenseCount={1} expenseTotal={222}/>)
    expect(wrapper).toMatchSnapshot();

});

test ('should correctly render expense Summary with multple expenses',()=>{
    const wrapper=shallow(<ExpenseSummary expenseCount={2} expenseTotal={224542}/>)
    expect(wrapper).toMatchSnapshot();    

});