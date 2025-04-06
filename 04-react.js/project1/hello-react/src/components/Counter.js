import React, { useState } from 'react'

export default function Counter() {
//state / model
const [count,setCount] = useState(0)

//controller
const incrementCount = () => {
    setCount(count+1)
}

// view
  return (
    <div>
        <h2>Counter : {count} </h2>
        {/* <button onClick={incrementCount}>Increment</button> */}
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>

  )
}

//Context API - react
//Redux - 3rd party library

