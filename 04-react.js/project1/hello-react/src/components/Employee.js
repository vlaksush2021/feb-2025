import React from 'react'

export default function Employee({empCount,empAddHandler}) {

  const empHandler = () => {
    console.log(empCount);
    empCount++;
    // console.log(empCount)//1
    empAddHandler(empCount)
  }
  return (
    <div>
        <p>Employee count - {empCount}</p>
        <button onClick={empHandler}>Add Employee</button>
    </div>
    
  )
}
