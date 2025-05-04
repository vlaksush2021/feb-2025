# Lab - Build a To-Do List App with Redux

## Objective
* Set up a Redux store using createStore.
* Create a To-Do List application where users can add, toggle, and delete tasks.
* Use redux-logger to observe actions and state changes.


## Steps
* Install redux, react-redux and redux-logger

* Set Up the Redux Store

* In the src folder, create a new file called store.js.
* Import the necessary functions and create a Redux store using createStore.
* Create the Root Reducer
* Create a new folder named reducers in the src directory.
* Inside reducers, create a file called todoReducer.js to manage the to-do tasks.
* Set Up the React App
* Open src/index.js and wrap the App component with Provider.
* In src/App.js or choose the location, connect the UI to Redux actions.
* Create a simple form to add, toggle, and delete to-do tasks.
* Observe Redux Logger in Action