import React,{useReducer} from 'react';
import CountReducer from './CountReducer';
function Child2(){
    let [state,dispatch]=useReducer(CountReducer,1);
    return(
        
        <div>
            <h2>The value of reducer count is {state}</h2>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
            <button onClick={()=>dispatch('DECREMENT')}>Decrement Reducer</button>
        </div>
    );
}
export default Child2;