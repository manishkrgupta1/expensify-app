import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import React from 'react';
import {expenses} from '../fixtures(dummy).js/fixtures';


test('should render Expense List Item',()=>{
    const wrapper=shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
    console.log('happy me');
})