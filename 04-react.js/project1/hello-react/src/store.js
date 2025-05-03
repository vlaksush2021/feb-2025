// import {applyMiddleware, createStore} from 'redux';

// import logger from 'redux-logger'
// import thunk from 'redux-thunk';
// import reducer from './s/s-redux/reducer';

// const middleware = applyMiddleware(thunk,logger);
// const store = createStore(reducer,middleware);
// export default store;


// ////Lab
// // src/store.js
// import {applyMiddleware, createStore} from 'redux';
// import logger from 'redux-logger'
// import todoReducer from './s/s-redux/lab/reducers/todoReducer';

// const middleware = applyMiddleware(logger);
// //Lab Store
// export const store = createStore(todoReducer,middleware)



////rtk redux took kit
import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './s/s-redux/rtk-reducer';

const store = configureStore( {
    reducer:{
        counter: counterReducer
    }
})

export default store;