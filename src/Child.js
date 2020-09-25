import React,{useContext} from 'react';
import CounterContext from './CounterContext';
function Child(){
    let counterValue=useContext(CounterContext);
    return(
        <div>
            <h1>This is arbaz khan kaser</h1>
            <h2>Value of context is : {counterValue[0]}</h2>
            <button onClick={()=>counterValue[1](++counterValue[0])}>Increment Context</button>
            <button onClick={()=>counterValue[1](--counterValue[0])}>Decrement Context</button>
        </div>
    );
}
export default Child;