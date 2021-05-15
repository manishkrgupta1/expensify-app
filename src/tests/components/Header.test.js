
import React from 'react';
import {Header} from '../../components/Header';
import {shallow} from 'enzyme';

test ('should render header',()=>{

    const wrapper=shallow(<Header startLogout={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();

  
});

test('should start call start login on button on onclick',()=>{
      const startLogout=jest.fn();
      const wrapper=shallow (<Header startLogout={startLogout} />);

     wrapper.find('button').simulate('click');
     expect(startLogout).toHaveBeenLastCalledWith();

})