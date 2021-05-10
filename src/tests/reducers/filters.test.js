import filtersReducer from '../../reducers/filters';
import moment from 'moment';


test ('should setup default filter value',()=>{
    const state=filtersReducer(undefined,{type :'@@INIT'});
    expect(state).toEqual({
         text :'',
         sortBy: 'date', 
         startDate: moment().startOf('month'),
         endDate: moment().endOf('month')
    });
});

test ('should set sort by to amount', ()=>{
    const state=filtersReducer(undefined,{ type :'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount');
})

test ('should set sortBy to date', ()=>{
    const currentState={
   text :'',
   startDate : undefined,
   endDate: undefined,
   sortBy : 'amount'
    };
    const state=filtersReducer(currentState,{ type :'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date');
});

test ('should set text filter', ()=>{
    const action={
      type : 'SET_TEXT_FILTER',
      text : 'marioo'
    };
    const state=filtersReducer(undefined,action)
    expect(state.text).toEqual('marioo');
});

test ('should set startDate filter', ()=>{
    const action={
      type : 'SET_START_DATE',
      date : moment(1)
    };
    const state=filtersReducer(undefined,action)
    expect(state.startDate).toEqual(moment(1));
});

test ('should set endDate filter', ()=>{
    const action={
      type : 'SET_END_DATE',
      date : moment(1)
    };
    const state=filtersReducer(undefined,action)
    expect(state.endDate).toEqual(moment(1));
});

