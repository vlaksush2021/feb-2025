import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';


//React version 16
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


//// The below one is for React version 18 and above

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);









//// redux demos
// function reducer1(state = 0, action) {
//   if (action.type === "INCREMENT") {
//     return state += 1;
//   }
//   else if (action.type === "DECREMENT") {
//     return state -= 1;
//   }
//   return state;
// }

// function reducer2(state = {name:'bala'}, action) {
//   if (action.type === "CHANGENAME") {
//     return {name:action.name};
//   }
//   else if (action.type === "RESETNAME") {
//     return {name:'bala'}
//   }
//   return state;
// }

// let reducer  = combineReducers({
// re1:reducer1,
// re2:reducer2
// })

// let store = createStore(reducer);//4 actions

// console.log(store.getState().re1)
// console.log(store.getState().re2.name)

// store.dispatch({type:"DECREMENT"})
// console.log(store.getState().re1)
// console.log(store.getState().re2.name)

// store.dispatch({type:"CHANGENAME",name:"ramesh"})
// console.log(store.getState().re1)
// console.log(store.getState().re2.name)


// store.dispatch({type:"DECREMENT"})
// store.dispatch({type:"RESETNAME"})

// console.log(store.getState().re1)
// console.log(store.getState().re2.name)