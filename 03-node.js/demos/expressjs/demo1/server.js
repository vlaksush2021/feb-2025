const express = require('express');
const app = express()

//endpoints / api
//get post update delete
const m2 = (req,res,next) => {
    console.log(` ${req.method}`)
    next();
}

const m1 = (req,res,next) => {
    console.log(`${req.url} - ${req.method}`)
    next();
}

app.use(m1)

app.get("/", (req, res) => {
    res.send("Hello APIs")
})

app.get("/js", m2,(req, res) => {
    res.send("Hello Javascript")
})

app.get("/node", (req, res) => {
    res.send("Hello Node.js")
})

app.listen(3000, () => {
    console.log('server started ')
})