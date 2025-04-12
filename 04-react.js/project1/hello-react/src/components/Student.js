import React from 'react'

export default function Student({studCount,studAddHandler}) { 
  return (
    <div>
        <p>Student Count {studCount}</p>
        <button onClick={() => {studAddHandler(studCount++)}}>Add Student</button> 
    </div>
  )
}
