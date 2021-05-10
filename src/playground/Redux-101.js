import { createStore } from "redux";

const incrementCount=( {incrementBy = 1 }={})=>({
    type: 'INCREMENT',
   incrementBy 
});
const decrementCount=( {decrementBy= 1 } = {} )=>({
    type: 'DECREMENT',
   decrementBy 
});
const resetCount =()=>({
    type:'RESET'
});

const reducer=(state ={count : 0}, action)=>{
    
    switch(action.type){
      case 'INCREMENT':
          return{
              count : state.count + action.incrementBy
          };
      case 'RESET':
          return {
              count : 0
          };
      case 'DECREMENT':
           return {
              count :state.count - action.decrementBy
          };    


    }  
    
    return state;
}


const store= createStore(reducer);

const unsubscribe= store.subscribe(()=>{
    console.log(store.getState());
});





store.dispatch(incrementCount({incrementBy : 6}));

store.dispatch(incrementCount());

store.dispatch(decrementCount({decrementby : 11}));

store.dispatch(resetCount());

store.dispatch(decrementCount());





