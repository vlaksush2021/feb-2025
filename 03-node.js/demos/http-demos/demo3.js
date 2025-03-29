const http = require('http');

const options = {
    hostname: 'www.google.co.in',
    path: '/',
    method: 'GET'
}

const client = http.request(options, (res) => {

    let data = ""
    res.on('data', (chunk) => {
        data += chunk;
    })
    res.on('end', () => {
        const server = http.createServer((req, res) => {
            res.writeHead(200, { 'content-type': 'text/html' })
            res.write(data)
            res.end();
        })
        server.listen('4000', () => {
            console.log('server started in 4000')
        })

    })

    client.on('error', (e) => {
        console.log(' error in client')
    })
})
client.end();