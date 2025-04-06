import React from 'react';
import FirstComponent from './components/FirstComponent';
import { Product } from './components/Product';
import Counter from './components/Counter';

function App() {
  const productInfo = { name: 'Laptop', price: '$1000' };
  const name = "React.js"

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello React</h1>
      {/* <FirstComponent name={name} org="ABC" />
      <Product {...productInfo} /> */}
      <Counter />

    </div>
  );
}

export default App;
