import React, { useState } from 'react'



//Rules of Hooks
// Hooks can be only used in functional component
//never call the hooks conditional or nested fuction
// Hooks has to be called on the to level

function Counter() {
        const [count,setCount]  = useState(0);

  return (
    <div className='container'>
        <h2>Counter</h2>
        <p>Count : {count}</p>
        <button className='btn btn-primary me-4' onClick={()=>{setCount(count+1)}}>Increment</button>
        <button className='btn btn-warning' onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter