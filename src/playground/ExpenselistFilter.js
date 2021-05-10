import React from 'react';
import ReactDOM from 'react-dom';




  
import {DateRangePicker} from 'react-dates';


 class ExpenseListFilters extends React.Component{
   state={
     calenderFocused : null,
     sDate: undefined,
     endD : undefined
   };
   onFocusChange=({calenderFocused})=>{
    this.setState(()=>({calenderFocused }));

   };
   onDatesChange=({ startDate, endDate }) =>{
         this.setState(()=>{
            sDate =startDate;
            endD=endDate;
         })
  };
  render(){
    return(
        <div>
      <DateRangePicker 
      startDate={this.state.sDate}  
      
      endDate={this.state.endD}  
      
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calendarFocused}
      onFocusChange={this.onFocusChange} 
      showClearDates={true}
      numberOfMonths={1}
      isOutsideRange={()=>false}
      />
    </div>

    )
  }
};




ReactDOM.render(<ExpenseListFilters/>, document.getElementById('app'));  
  
  
  ReactDOM.render(<ExpenseListFilters/>,document.getElementById('app'));