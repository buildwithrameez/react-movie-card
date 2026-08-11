import { useState } from "react";
export const LiftstateUp = () => {
    const [inputValue,setInputValue] = useState("");
    return (<>
       <InputComponent inputValue = {inputValue} setInputValue = {setInputValue}/>
       <DisplayeComponent inputValue = {inputValue}/>
    </>)
};


const InputComponent = ({inputValue,setInputValue}) => {
        return (<div className="mainDiv">
        <input
         type="text" 
         placeholder="Enter your name"
         value={inputValue} 
         onChange={(e) => setInputValue(e.target.value)}/>
    </div>)

};


const DisplayeComponent  = ({inputValue}) => {
    return <div className="mainDiv">
        <h1>User Name: {inputValue}</h1>  
    </div>
};