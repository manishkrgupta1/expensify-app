import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import {expenses} from '../fixtures(dummy).js/fixtures';

test('should render ExpenseList with expenses',()=>{
    const wrapper=shallow(<ExpenseList expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseList with empty messege',()=>{
    const wrapper=shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
})