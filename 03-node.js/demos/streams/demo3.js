/*
Streams in Node.js process data in small chunks, making them efficient for tasks like reading/writing large files or handling HTTP requests.

They include Readable, Writable, Duplex, and Transform streams.

Common Streams
Readable Streams: For reading data, e.g., fs.createReadStream()
Writable Streams: For writing data, e.g., fs.createWriteStream()
Duplex Streams: Both readable and writable, e.g., net.Socket
Transform Streams: Allows modification of data, e.g., zlib.createGzip() (compression)
*/

// //writable stream
// const fs = require('fs')
// const writableStream = fs.createWriteStream("output.txt");
// writableStream.write("Node.js stream demo \n");
// writableStream.write("This is a writable steam");

// writableStream.end();

// writableStream.on('finish',() => {
//     console.log("write done")
// })

// // readable stream using readable event

// const fs = require('fs')
// const readableStream = fs.createReadStream("output.txt",{encoding:'utf-8'});

// readableStream.on('end', () => {
//     console.log("read op. done")
// })


// readableStream.on('readable', () => {
//     const data = readableStream.read();
//     if(!data) {
//         return;
//     }
//     console.log(data)
// })


// // readable stream using data event
// const fs = require('fs')
// const readableStream = fs.createReadStream("output.txt",{encoding:'utf-8'});

// readableStream.on('end', () => {
//     console.log("read op. done")
// })


// readableStream.on('data', (chunk) => {

//     if(!chunk) {
//         return;
//     }
//     console.log(chunk)
// })


// //Duplex stream without pipe

// const fs = require('fs');

// const readableStream = fs.createReadStream('output.txt');
// const writableStream = fs.createWriteStream('output2.txt');

// readableStream.on('data', (chunk) => {
//     writableStream.write(chunk);
// });

// // readableStream.on('end', () => {
// //     writableStream.end();
// //     console.log('File copied successfully');
// // });




// //Duplex stream with pipe

// const fs = require('fs');

// const readableStream = fs.createReadStream('output.txt');
// const writableStream = fs.createWriteStream('output2.txt');

// readableStream.pipe(
//     writableStream
// )



//Transform stream with pipeline
const fs = require('fs');
const { Transform, pipeline } = require('stream');
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})
const readableStream = fs.createReadStream('output.txt');
const writableStream = fs.createWriteStream('uppercaseOutput2.txt');
pipeline(
    readableStream,
    uppercaseTransform,
    writableStream,
    (err) => {
        if (err)
            console.log('error: ' + err)
        else {
            console.log('file written successfully')
        }
    }
)
// readableStream.on('end', () => {
//     writableStream.end();
//     console.log('File transformed and written to uppercaseOutput.txt.');
// });