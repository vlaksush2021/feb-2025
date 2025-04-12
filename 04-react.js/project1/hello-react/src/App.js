import React, { useState } from 'react';
import FirstComponent from './components/FirstComponent';
import { Product } from './components/Product';
import Counter from './components/Counter';
import InputField from './components/InputField';
import Employee from './components/Employee';
import Student from './components/Student';
import DataFetchingComponent from './components/DataFetchingComponent';
import ConditionalRenderingComponent from './components/ConditionalRenderingComponent';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';

function App() {
  const productInfo = { name: 'Laptop', price: '$1000' };
  const name = "React.js"


  ////passing data between parent and child
  // const[empCount,setEmpCount] = useState(0)
  // const[studCount,setStudCount] = useState(0)

  // const empAddHandler = (count) => {
  //   setEmpCount(count)
  // }
  // const studAddHandler = (count) => {
  //   setStudCount(count)
  // }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Hello React</h1>
      {/* <FirstComponent name={name} org="ABC" />

      // Lab2
      <Product {...productInfo} /> */}
      
      {/* useState */}
      {/* <Counter /> */}
      
      {/* Lab3 */}
      {/* <InputField /> */}


      {/* pasing data between components */}
     {/* <h3>Employee Count {empCount} </h3>
     <h3>Student Count {studCount} </h3>

     <Employee empCount={empCount} empAddHandler={empAddHandler} />
     <Student studCount={studCount} studAddHandler={studAddHandler} /> */}


     {/* useEffect Demo */}
      {/* <DataFetchingComponent /> */}

      {/* Conditional Rendering Demo */}
      {/* <ConditionalRenderingComponent /> */}


      {/* Control Component */}
      <ControlledComponent />

      {/* UnControlled Component */}
      {/* <UnControlledComponent /> */}


    </div>
  );
}

export default App;
