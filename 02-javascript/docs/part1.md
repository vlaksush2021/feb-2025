# Javascript Basics
## Overview of Javascript
### Notes
* JavaScript is a programming language used to make web pages interactive.  
* It adds behavior to website, allowing things like responding to clicks, updating content, or making animations.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Demo</title>
</head>
<body>
  <h1>Welcome to My Website</h1>
  <button onclick="showMessage()">Click Me!</button>

  <script>
    function showMessage() {
      alert('Hello! This is JavaScript in action.');
    }
  </script>
</body>
</html>

```
 Function : 
 Function: A function is a block of reusable code designed to perform a specific task. In the example, the addition() function retrieves values,calculates the sum, and updates the result on the webpage.


## Role of Javascript in Web Development
### Notes
* JavaScript enhances user interaction on web pages.  
* It can handle events like clicks, form submissions, and content updates without reloading the page.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript in Action</title>
</head>
<body>
  <h1>Interactive Page</h1>
  <button onclick="changeText()">Change Text</button>
  <p id="text">This is a simple paragraph.</p>

  <script>
    function changeText() {
      document.getElementById('text').innerText = 'Text changed using JavaScript!';
    }
  </script>
</body>
</html>
```
```note
Document Object: The document object represents the entire HTML document and allows access to elements via methods like getElementById(). Here, the document.getElementById() method is used to retrieve user inputs and display the result.
```

## Basics of JavaScript Syntax
### Notes
* JavaScript syntax includes variables, functions, and statements.  
* Variables store data, functions perform actions, and statements control the flow of the program.  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Syntax</title>
</head>
<body>
  <h1>Using Variables and Functions</h1>
  <button onclick="greetUser()">Greet</button>
  <p id="greeting"></p>

  <script>
    function greetUser() {
      let name = 'John';
      document.getElementById('greeting').innerText = 'Hello, ' + name + '!';
    }
  </script>
</body>
</html>
```


## Types of Variables
* There are 3 types of variables.  
* `var` , `let` and `const`.  

### Notes
`var` : Used to declare variables in older JavaScript; it's function-scoped.  

`let` : A modern way to declare variables that are block-scoped (within curly braces {}).  

`const` : Declares variables that cannot be reassigned (also block-scoped).  

### Demo
```html
<!DOCTYPE html>
<html>
<head>
  <title>Types of Variables</title>
</head>
<body>
  <h1>Check the Console</h1>

  <script>
    var oldVar = 'I can be redeclared and reassigned';
    let newLet = 'I can be reassigned but not redeclared';
    const constantValue = 'I cannot be changed';

    console.log(oldVar);
    console.log(newLet);
    console.log(constantValue);

    // Reassigning variables
    oldVar = 'Old var updated';
    newLet = 'Let updated';

    console.log(oldVar);
    console.log(newLet);
    
    // Uncommenting this line will cause an error:
    // constantValue = 'Attempting to update const will cause an error';
  </script>
</body>
</html>

```


## Dynamic Typing 


## Control Statements
conditional control statement
    decision making 
        if, if else , if else if else if .... , if if else  else 
        switch
    looping / iteration
        for
        while
        do while



unconditional control statement