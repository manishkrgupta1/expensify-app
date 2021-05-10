import {setStartDate , setEndDate, setTextFilter, sortByDate, sortByAmount} from '../../actions/filters';
import moment  from 'moment';

test('should generate set startDate action object', ()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date : moment(0)
    });
});
test('should generate set endDate action object', ()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date : moment(0)
    });
});
test('should generate setTextFilter action object', ()=>{
    const action=setTextFilter('mario');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'mario'
    });
});
test('should generate setTextFilter action object', ()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : ''
    });
});
test('should generate setTextFilter action object', ()=>{
    const action=sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
test('should generate setTextFilter action object', ()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});