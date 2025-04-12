import React, { useState } from 'react'

export default function InputField() {
   const[text,setText] = useState('sample')

//    const handleChange = (event) => {
//     setText(event.target.value)
//    }

  return (
    <div>
        <h3>Input Field</h3>
        {/* <input type='text' value={text} onChange={handleChange} /> */}
        <input type='text' value={text} onChange={(event) => {setText(event.target.value)}} />
        <p>you entered {text}</p>
    </div>
  )
}
