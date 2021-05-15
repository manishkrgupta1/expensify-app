import {login , logout} from '../../actions/auth';

test('should return login action',()=>{
    const uid =5433433;
   

    const state=login(uid );
    expect (state).toEqual({
        type : 'LOGIN',
        uid
    });
});

test('should return logout action',()=>{
   
   

    const state=logout( );
    expect (state).toEqual({
        type : 'LOGOUT'
    });
});