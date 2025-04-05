/*
The HTTP modue in Node.js allows creating web servers and making http requests as a client.
Its widely used to handle both server side and client side http communication

http.crateServer
http.request

*/

// http client
const http = require('http');
const options = {hostname:'www.google.co.in',path:'/',method:'GET'}
const client = http.request(options,(res) => {

    let data = ""
    res.on('data',(chunk) => {
        data += chunk;
    })
    // res.on('end' , () => {
    //     try{
    //         console.log(data)
    //     }
    //     catch(e){
    //         console.log("error : "+e)
    //     }
    // })
console.log("----------------------")
res.on('end', () => {
    console.log("data ready")
    console.log(data)
})
console.log("----------------------")

    console.log(data)

    client.on('error', (e) => {
        console.log(' error in client')
    })
})

client.end();