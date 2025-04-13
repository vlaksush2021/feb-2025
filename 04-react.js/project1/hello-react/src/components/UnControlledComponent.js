// import React, { useRef, useState } from 'react'

// export default function UnControlledComponent() {
//   const usernameRef = useRef();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const username = usernameRef.current.value
//     console.log('User name is '+username)
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit} >

//         <input type="text" ref={usernameRef} />
//         <button type='submit'>Login</button>
//       </form>
//     </div>
//   )
// }


// without useRef
import React from 'react'

export default function UnControlledComponent() {


  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log('User name is '+username)
    document.getElementById("displayUsername").innerHTML=username
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >

        <input type="text" name="username" />
        <button type='submit'>Login</button>
        <div id="displayUsername"></div>
      </form>
    </div>
  )
}


