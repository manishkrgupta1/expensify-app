import React from 'react';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';
import {shallow} from 'enzyme';

test ('should render header',()=>{

    const wrapper=shallow(<ExpenseDashBoard/>);
    expect(wrapper).toMatchSnapshot();

 
});