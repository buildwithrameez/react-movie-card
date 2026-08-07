export const Practice = () => {
    const students = [];
    return <>
             {/* First way */}
            {/* <p>{students.length == 0 && "No students found"}</p> */}
               
               {/* Second way */} 
            {/* <p>{!students.length  && "No students found"}</p> */}

               {/* Third way */} 
            <p>{Boolean(!students.length) && "No students found"}</p>
            <p>Number of students: {students.length}</p>
          </>
};