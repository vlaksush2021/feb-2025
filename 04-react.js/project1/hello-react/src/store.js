// import { applyMiddleware, createStore } from "redux";
// import reducerdemo from "./components/redux-demos/reducer-demo";
// // import reducer from '../src/components/redux-demos/reducer'
// import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'



// const middleware = composeWithDevTools(applyMiddleware(thunk,logger))

// const store = createStore(reducerdemo,middleware);
// export default store;


// import {configureStore} from '@reduxjs/toolkit';
// import counterReducer from './components/redux-demos/rtk/rtkreducer'


// const store = configureStore( {
//     reducer:{
//         counter: counterReducer
//     }
// })

// export default store;



import { createStore } from "redux";
import todoReducer from "./s/s-redux/lab/reducers/todoReducer";

const store = createStore(todoReducer)

export default store;