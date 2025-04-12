# React.js
* React is a JavaScript library used to build fast, interactive user interfaces (UI) for web applications, focusing on `component-based architecture`.
JSX is a syntax extension that allows you to write HTML-like code in JavaScript, which is then compiled into standard JavaScript.

```
servlet , jsp

angular 
    angular.js => v1 (controller based - MVC) , v2 angular,v4,v5,
```

react - MVC, component - v16 - next.js(ssr) , 18,19 (SSR)

component    
    functional component - function - state management  - hooks (javascript) 
    class component - class - manage state - java 

JSX = 
react component - with js => createComponent()
react component - with jsx => js code + html code



## Functional Component and Props

* Functional components in React are JavaScript functions that return JSX and are used to build UI components.

* Props allow you to pass data from one component to another, enabling dynamic content in your application.


## State Management with Hooks
* The `useState` hook allows functional components to manage and update state in React.
* By using `event handlers` like `onClick` and `onChange`, you can capture user interactions and trigger state updates.


## Component Lifecycle and Forms in Functional Components

### Demo - Passing data between component

parent component -> child component
parent component <- child component


### useEffect
* The `useEffect` hook allows you to handle side effects like data fetching, API calls, or subscriptions in functional components.

* It runs after the component renders and can clean up side effects when the component unmounts or re-renders.
