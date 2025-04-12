import React, { useState } from 'react'

export default function ControlledComponent() {
    const [username, setUsername] = useState('user');

  return (
    <div>
    <p>Welcome {username}</p> 

    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value);console.log(username)}} />

    </div>
  )
}
