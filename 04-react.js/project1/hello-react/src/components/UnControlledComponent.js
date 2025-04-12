import React, { useRef, useState } from 'react'

export default function UnControlledComponent() {
  const usernameRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = usernameRef.current.value
    console.log('User name is '+username)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >

        <input type="text" ref={usernameRef} />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}
