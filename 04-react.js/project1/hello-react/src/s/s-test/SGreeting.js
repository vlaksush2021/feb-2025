import React, { useState } from 'react';

const SGreeting = () => {
  const [greeting, setGreeting] = useState('Hello, User!');

  const changeGreeting = () => {
    setGreeting('Welcome, Guest!');
  };

  return (
    <div>
      <h1 data-testid="greeting-message">{greeting}</h1>
      <button onClick={changeGreeting} aria-label="Change Greeting">
        Change Greeting
      </button>
    </div>
  );
};

export default SGreeting;