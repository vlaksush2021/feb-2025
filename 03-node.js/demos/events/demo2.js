/*
Events module:
The events module allows creating and handling custom events, 
following an event-driven architecture.
It's useful for triggering and responding to specific actions in your application.
*/

const EventEmitter  = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('greet',(name) => {
    console.log("Hello "+name)
})

eventEmitter.on('login',(username) => {
    console.log("Hello "+username)
})

eventEmitter.emit('greet','ABC');
eventEmitter.emit('greet','XYZ');

eventEmitter.emit('login','user1');
eventEmitter.emit('login','user2');