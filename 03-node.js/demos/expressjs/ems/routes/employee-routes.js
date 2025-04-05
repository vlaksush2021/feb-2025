const  controllers  = require("../controller/employee-controller");
//OR
// const  {getEmployees}  = require("../controller/employee-controller");

const routes = (app) => {
app.get('/employee', controllers.getEmployees);
app.get('/employee/:id',controllers.getEmployeeById);
app.post('/employee',controllers.addEmployee)
}

module.exports = routes;