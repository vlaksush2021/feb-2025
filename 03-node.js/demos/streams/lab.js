const fs = require('fs');
const zlib = require('zlib');
const {pipeline} = require('stream')

const readableStream = fs.createReadStream("input.txt");
const gzipStream = zlib.createGzip();
const writableStream = fs.createWriteStream('output.zip');

pipeline(
    readableStream,
    gzipStream,
    writableStream,
    (err) => {
        if(err){
            console.log('error')
        }
        else{
            console.log('file compressd done')
        }
    }
)