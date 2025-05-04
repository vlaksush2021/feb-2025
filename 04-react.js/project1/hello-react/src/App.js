import React, { useState } from 'react';
import FirstComponent from './components/FirstComponent';
import { Product } from './components/Product';
// import Counter from './components/Counter';
import InputField from './components/InputField';
import Employee from './components/Employee';
import Student from './components/Student';
import DataFetchingComponent from './components/DataFetchingComponent';
import ConditionalRenderingComponent from './components/ConditionalRenderingComponent';
import ControlledComponent from './components/ControlledComponent';
import UnControlledComponent from './components/UnControlledComponent';
import LoginForm from './components/LoginForm';
import LoginForm2 from './components/LoginForm2';
import A from './components/context/A';
import NameContext from './components/context/NameContext';
import ParentComponent from './components/performance/ParentComponent';
import EmployeeManagement from './components/performance/EmployeeManagement';
import EmployeeManagementComponent from './components/performance/EmployeeManagementComponent';
import Home from './components/routing/Home';
import About from './components/routing/About';
import Contact from './components/routing/Contact';

// below one line is for reach-router
import { Router, Link } from '@reach/router';
import RouterApp from './components/routing-lab-2/RouterApp';
// import RouterApp from './s/router-lab-2/RouterApp';
// import RouterApp from './components/nested-routing-demo/RouterApp';
// import RouterApp from './components/dynamic-routing-demo/RouterApp';
// import RouterApp from './components/routing-lab-1/RouterApp';


// import RouterApp from './s/router-lab-2/RouterApp';
// import RouterApp from './s/nested-routing-demo/RouterApp';


// below one line is for react router 
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import Counter from './s/s-redux/Counter';
import ToDoComponent from './s/s-redux/lab/ToDoComponent';
import RTKComponent from './s/s-redux/RTKComponent';
// import Counter from './components/redux-demos/Counter';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './components/redux-demos/CounterDemo';
import CounterDemo from './components/redux-demos/CounterDemo';
import RTKCounterDemo from './components/redux-demos/rtk/RTKCounterDemo';
import Button1 from './s/s-test/Button1';
import SGreeting from './s/s-test/SGreeting';
import MyButton from './components/testing/MyButton';
import Greeting from './components/testing/Greeting';


function App() {
  const productInfo = { name: 'Laptop', price: '$1000' };
  const name = "React.js";


  ////passing data between parent and child
  // const[empCount,setEmpCount] = useState(0)
  // const[studCount,setStudCount] = useState(0)

  // const empAddHandler = (count) => {
  //   setEmpCount(count)
  // }
  // const studAddHandler = (count) => {
  //   setStudCount(count)
  // }


  // Context API
  const orgName = "ABC Technologies"

  return (
    // <div style={{ textAlign: 'center' }}>
    <div>
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
      {/* <ControlledComponent /> */}

      {/* UnControlled Component */}
      {/* <UnControlledComponent /> */}

      {/* useReducer */}
      {/* <LoginForm /> */}

      {/* Custom Hook */}
      {/* <LoginForm2 /> */}

      {/* Context API */}
      {/* <NameContext.Provider value={{orgName,emp:{id:101,name:'krishna',salary:2000},numbers:[10,20,30,40]}}>
        <A />
      </NameContext.Provider> */}


      {/* Performance */}
      {/* <ParentComponent /> */}
      {/* <EmployeeManagement /> */}
      {/* <EmployeeManagementComponent /> */}


      {/* Routing - reach router */}
      {/* <hr />
      <div align="right">
        <Link to="/">Home</Link>  <Link to="/about">About</Link>   |   <Link to="/contact">Contact</Link>
      </div>
      <hr />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <Contact path="/contact" />
      </Router>
      <h3 style={{ marginTop: 300 }}>Footer Page</h3>  */}

      {/* Router Lab */}
      {/* <RouterApp /> */}

      {/* Dnamic Routing - demo */}
      {/* <RouterApp /> */}


      {/* Nested Routing */}
      {/* <RouterApp /> */}





      {/* Routing - react router */}
      {/* 
      <hr />
      <div align="right">
        <Router>
          <Link to="/">Home</Link>  <Link to="/about">About</Link>   |   <Link to="/contact">Contact</Link>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
      <hr />
      <h3 style={{ marginTop: 300 }}>Footer Page</h3> 
      */}


      {/* Router Lab1 */}
      {/* <RouterApp /> */}


      {/* Dnamic Routing - Demo */}
      {/* <RouterApp /> */}


      {/* Nested Routing - Demo */}
      {/* <RouterApp /> */}


      {/* Router Lab 2 (Dynamic Router) */}
      {/* <RouterApp /> */}


      {/* Redux Demo */}

      {/* <CounterDemo /> */}

      {/* ReduxTookKit */}
      {/* <RTKCounterDemo /> */}


        {/* Testing */}
        {/* <MyButton label="Submit Me" /> */}

        {/* <Greeting /> */}







      {/* stest */}
      {/* <Button1 label="Submit Me"/> */}
      {/* <SGreeting /> */}


      {/* Redux Lab  */}
      <ToDoComponent />

    </div>
  );
}

export default App;
