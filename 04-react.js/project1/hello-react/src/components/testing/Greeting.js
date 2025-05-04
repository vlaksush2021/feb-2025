import React, { useState } from 'react'

export default function Greeting() {
    const [greeting,setGreeting] = useState("Hello, User!");

  return (
    <div>
      <h1>{greeting}</h1>
      <button aria-label="Change Greeting" onClick={() =>setGreeting("Welcome, Guest!")}>Change Greeting</button>
    </div>
  )
}
