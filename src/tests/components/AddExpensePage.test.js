import React from 'react';
import {shallow } from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import {expenses} from '../fixtures(dummy).js/fixtures';

let onSubmit, history, wrapper;

beforeEach(()=>{
     onSubmit =jest.fn();
     history={push : jest.fn()};
     wrapper=shallow(<AddExpensePage addExpense={onSubmit}  history={history}/>);

})

test('should render addexpense correctly',()=>{
   
    expect(wrapper).toMatchSnapshot();


});

test('should render addexpense correctly',()=>{
   
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);



});


