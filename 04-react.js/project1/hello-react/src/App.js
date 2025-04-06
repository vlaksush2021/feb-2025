import React from 'react';
import FirstComponent from './components/FirstComponent';

function App() {
   const name = "React.js"

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello World</h1>
      <FirstComponent name={name} org="ABC" />
      
    </div>
  );
}

export default App;
