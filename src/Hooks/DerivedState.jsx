import { useState } from "react";
import { State } from "./State";
import '../Hooks/style.css'
// challenge Test

// method 1 using map
const user = [
   {name : 'Rameez', age : 22},
   {name : 'Ahmad', age : 21},
   {name : 'Hassan', age : 22},
   {name : 'Tuqeer', age : 17}
];

// export const DericedState = () => {
//     return <div className="mainDev">
//        <h1>User</h1>
//        <ul>
//          {user.map((currElement,index) => {
//             const {name,age} = currElement;
//           return <li>
//                {name} - {age}
//           </li>
//          })};
//        </ul>
//     </div>
// };


// using state
export const DerivedState2 = () => {
  const [user, setuser] = useState([
   {name : 'Rameez', age : 22},
   {name : 'Ahmad', age : 21},
   {name : 'Hassan', age : 22},
   {name : 'Tuqeer', age : 17}
  ]);
  
  const userCount = user.length;
  const average = (user.reduce((accum,curEle) => accum + curEle.age, 0))/userCount;

    return <div className="mainDiv">
       <h1>User</h1>)
       <ul>
         {user.map((currElement,index) => {
            const {name,age} = currElement;
          return <>
          <li>
               {name} - {age}
          </li>
          </>
         })}
         <p>User Number: {userCount}</p>
         <p>Aerage age: {average}</p>

       </ul>
    </div>
};
