import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const[count,setCount] = useState(0);
  return (
    <div>
        <h3>Counter:{count}</h3>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <ChildComponent />
    </div>
  )
}
