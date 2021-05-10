import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
    <h1>Info</h1>
    <p>this is info :{props.info}</p>
    </div>
);

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
      <div>
      {props.isAuthenticated ?(<WrappedComponent  {...props}/>
        ):
        (<p>login to see Info</p>)}
      
      </div>
    );
};


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="fuck you user"/>, document.getElementById('app'));