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


### Rule for Hooks
useState or useEffect hooks are should be placed first statement of fun. component


### Conditional Rendering and List
* Conditional rendering allows us to show or hide components dynamically based on certain conditions, like state or props.

* Lists can be rendered efficiently using .map() in React, and each item in the list should have a unique key prop for better performance.


## Handling Forms and Input State with useState
### Note
* React forms can be either controlled (where React controls the input values) or uncontrolled (where the DOM controls the input values).  

* We manage form input state using the `useState` hook to track and handle user input and form submissions.  

### Controlled Components:
- A controlled component in React is where form data is handled by the React component state.  

- The input value is bound to a state variable and updates via an onChange event handler.  

- The component actively controls the form fields' behavior, and data is managed entirely by React.  

#### Advantages:
* Easier to validate and manipulate form data.  
* Provides real-time updates as the user types.  
* Good for more complex form logic (e.g., input validation). 

#### Example
```jsx
const [username, setUsername] = useState('');

<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
```


### Uncontrolled Components:
* An uncontrolled component uses the `DOM` itself to manage form data, not the React state.  

* The input’s value is accessed only when needed, often through `refs` or `event.target.elements` in a form submit handler.

* React doesn’t manage or track the form data until the form is submitted.  

#### Advantages:
Simple for quick forms that don't need real-time updates.  
Better for legacy forms or when migrating older HTML code.  


<input type="text" name="username" />
