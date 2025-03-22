# Functional Programming
Functional programming is a programming paradigm that treats computaion as the evaluation of mathematical functions.

## Key concepts
* Pure Functions  
* Immutability  
* First-class Function  
* Higher-order functions

## Pure Function
Function that given the same inputs, will always return the same output witout altering any outside state.

total = 1
function add(a,b){ //1,2
    a=a+total;   // 2
    total = a; //2
    return(a+b) // 4
}

add (1,2)  => 3
add(1,2) => 4

## Immutability
let arr = [1,2,3] 
arr = [arr,4];

console.log(arr);


## First class function
In Js, functions are first class citizens, they can be stored in variable, passed as argument, and returned from other function.


let a = function(){}

## HOF
function that takes another function as an argument OR returns a function.
It enables powerful abstraction and code reuse.

# Asynchronous Programming

synchronous
single thread 

Event Loop - thread , main 

console.log("start");
fetch()... delay 

setTimeout() - 1000, 2000
promises - then..
