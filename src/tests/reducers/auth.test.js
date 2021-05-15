import authReducer from '../../reducers/auth';

test('should return uid on login',()=>{

    const uid =5433433;
    const action={
        type :'LOGIN',
        uid
    };

    const state=authReducer(state , action );
    expect (state.uid).toEqual(uid);
});


test('should return nothing on logout',()=>{
    
    const action={
        type :'LOGOUT'
       
    };

    const state=authReducer({uid : 32432432} , action );
    expect (state).toEqual({ });
});
