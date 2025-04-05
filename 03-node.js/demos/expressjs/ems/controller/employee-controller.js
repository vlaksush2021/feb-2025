const employeeDetails = require('../data/employee-data')

//get all employees
const getEmployees = (req, res) => {
    res.json(employeeDetails)
}
//OR
// exports.getEmployees = (req, res) => {
//     res.json(employeeDetails)
// }



//get particular employee
const getEmployeeById = (req, res) => {
    const id = parseInt(req.params.id);
    const employee = employeeDetails.find((emp) => emp.id === id) 
    if (employee)
        res.json(employee)
    else {
        res.status(404).json({ message: `Given id ${id} is an invalid` })
    }
}

//add employee
const addEmployee = (req, res) => {
   const emp = req.body
   console.log(emp);
   employeeDetails.push(emp)
    res.status(201).json(emp)
}



module.exports = {getEmployees,getEmployeeById,addEmployee}