//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";


const CounterChallenge = () => {

const [number, setnumber] = useState(0);
const [step, setstep] = useState(1);

const handleincrement = () => {
    setnumber(number + step); 
};

const handledecrement = () => {
    setnumber(number - step); 
};

const handlereset = () => {
  setnumber(0);
  setstep(1);
};

return <div className="main">
       <p><span>{number}</span></p>
       <div>
        <label>
          Step: <input type="number" value={step} onChange={(e) => setstep(Number(e.target.value))} />
        </label>
       </div>

       <div className="btn">
        <button onClick={() => handleincrement()} disabled = {number >= 100}>Increment</button>
        <button onClick={() => handledecrement()} disabled = {number <= 0}>decrement</button>
        <button onClick={() => handlereset()}>Reset</button>
       </div>
</div>
};

export default CounterChallenge;
