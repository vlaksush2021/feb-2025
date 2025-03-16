# Primary Data Types and Objects

## ECMAScript
its official standard that javascript follows
ECMAScript 6 

## Primary Data Type
core type : number, string , boolean
object :Math, Array, DateTime


## Object
Date
Math
Array

## Array
* Arrays are used to store collection of data, making it easier to manage lists of values.
* Arrays are versatile and come with build-in functions for adding/removing and manipulating data.

### Properties:
The most important property of an array is its length, which tells us how many elements are in the array.

### Methods:
push() - Adds an element to the end of the array.
pop() - Removes the last element from the array.
shift() - Removes the first element from the array.
unshift() - Adds an element to the beginning of the array.
map() - Transforms each element in the array based on a function and returns a new array.
filter() - Filters elements that meet certain criteria and returns a new array.
reduce() - Reduces the array to a single value based on a function.
forEach() - Executes a function on each array element.
find() - Returns the first element that meets certain criteria.

### When to use Arrays and Object Together
```
In real-world applications, we often need to work with arrays of objects. For example, instead of just having an array of course names, we might store each course as an object with properties like title, instructor, and duration. This allows us to represent complex data structures and perform operations based on specific attributes. Arrays are perfect for handling lists of data, and when combined with objects, they become very powerful for handling real-world information.
```
Array = [] or new Array()

Object = {} or new Object()

Array of Object = [ {id:101,name:abc,phone:[123,345],}, {}, {} ]


### Arrays and Object
* Arrays in JavaScript are indeed a special type of object.   

* Arrays are actually a specialized kind of object in JavaScript. While objects store data in key-value pairs, arrays store data in an ordered list with indexed keys.  

* Objects allow us to group related data and functions together, such as all the properties of a course (title, instructor, duration), making them essential for more complex data handling.



# Functions and Events
* Functions in javascript let us define reusable blocks of code that perform specific task.  
* Events are actions or occurences that happens in the browser, like click, key press.. and we can write code to responde to that events.

## Attaching Event Listeners
* We use something called `addEventListener` to respone to events.  
* Eg: addEventListener('click',functionName);