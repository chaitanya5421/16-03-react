import React from 'react'

function FuncComp(props) {
  
    console.log(props);

   let {courseName,Duration} = props;
  return (
    <div>
        <h2>functional Component</h2>
        <h3>CourseName :{courseName} and the CourseDuration is {Duration} </h3>
    </div>
  )
}

export default FuncComp