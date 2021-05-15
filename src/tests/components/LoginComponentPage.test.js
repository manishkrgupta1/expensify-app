import {shallow} from 'enzyme';
import React from 'react';
import {LoginComponentPage} from '../../components/LoginComponentPage';

test('should correctly render login page',() =>{
    const wrapper=shallow(<LoginComponentPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should start call start logout on button on onclick',()=>{
    const startLogin=jest.fn();
    const wrapper=shallow (<LoginComponentPage startLogin={startLogin} />);

   wrapper.find('button').simulate('click');
   expect(startLogin).toHaveBeenLastCalledWith();

})