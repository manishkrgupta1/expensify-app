import React from 'react';
import {shallow } from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import {expenses} from '../fixtures(dummy).js/fixtures';


let onSubmit,onClick, history , wrapper;

beforeEach(()=>{
     onSubmit=jest.fn();
     history={push : jest.fn()};
     onClick=jest.fn();
     wrapper=shallow(<EditExpensePage 
         startEditExpense ={onSubmit}
         startRemoveExpense={onClick}
         history={history}
         expense={expenses[2]}/>);
     
})



test('should render edit expense correctly',()=>{
      
       expect(wrapper).toMatchSnapshot();

});

test('should handle  edit expense correctly',()=>{
        
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
   expect(history.push).toHaveBeenLastCalledWith('/');
   expect(onSubmit).toHaveBeenLastCalledWith(expenses[2].id ,expenses[2]);
});


test('should handle  start remove expense correctly',()=>{
        
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onClick).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
 });