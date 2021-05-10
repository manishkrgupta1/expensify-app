import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import {expenses} from '../fixtures(dummy).js/fixtures';
import moment from 'moment';

//moment ki wajah se time changes so snapshot results in an error
// use  Manual mocks to create mock of the moment
// create __mocks__ folder

test ('should render ExpenseForm correctly' ,()=>{
      const wrapper=shallow(<ExpenseForm />);
      expect(wrapper).toMatchSnapshot();
});

test ('should render ExpenseForm correctly with data' ,()=>{
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});

// simulation is done using enzyme -> can find in enzyme doc
// faking preventdefault by defining it simulate function
test ('should render error for invalid submission',()=>{
    const wrapper = shallow (<ExpenseForm />);
    expect (wrapper).toMatchSnapshot();
    wrapper.find ('form').simulate('submit',{
        preventDefault : ()=>{}
    });
    expect( wrapper.state('error').length).toBeGreaterThan(0);
    expect (wrapper).toMatchSnapshot();
});
test ('should set description on input change' ,()=>{
    const value ="new Description";
    const wrapper=shallow(<ExpenseForm  />);
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on text area change',()=>{
    const value = "new note";
    const wrapper =shallow (<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
            target : {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount on  valid amount change',()=>{
    const value = "100.50";
    const wrapper =shallow (<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
            target : {value}
    })
    expect(wrapper.state('amount')).toEqual(value);
});

test('should not set  ampunt  on  invalid amount change',()=>{
    const value = "100.5011";
    const wrapper =shallow (<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
            target : {value}
    })
    expect(wrapper.state('amount')).toEqual("");
});

test('shouldcall onSubmit prop for valid form submission',()=>{
    const onSubmitSpy= jest.fn();
    const wrapper =shallow (<ExpenseForm  expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault : ()=>{}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt
    });
});

test('should set new date on date change',()=>{
     const now=moment();
    const wrapper =shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toBe(now);
});

test('should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
  });
  