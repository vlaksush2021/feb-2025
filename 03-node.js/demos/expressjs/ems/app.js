const express = require('express');
const routes = require('./routes/employee-routes');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
routes(app)


app.listen(3000, () => {
    console.log('server started')
})