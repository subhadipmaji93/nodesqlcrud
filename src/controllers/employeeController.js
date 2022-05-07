const EmployeeModel = require("../models/employeeModel");
// const handlers = require('../handlers/handlers');

exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    if (err) console.log(err.code);
    if (employees) return res.render("home", { row: employees });
    res.render("home");
  });
};
exports.getEmployeeById = (req, res) => {
  EmployeeModel.getEmployeeById(req.query.id, (err, employee) => {
    if (err) res.send("Error fetching Empolyee by id");
    else res.render("employeeView", { empData: employee });
  });
};

exports.fetchEmployeeData = (req, res) => {
  EmployeeModel.getEmployeeById(req.query.id, (err, employee) => {
    if (err) res.send("Error fecthing Empolyee by id");
    else res.render("employeeEdit", { empData: employee });
  });
};
exports.updateEmployeeData = (req, res) => {
  const employeeData = new EmployeeModel(req.body);
  EmployeeModel.updateEmployee(req.query.id, employeeData, (err, response) => {
    if (err) res.send("Database Error");
    else {
      res.redirect(`/employee?id=${req.query.id}`);
    }
  });
};
exports.createEmployee = (req, res) => {
  res.render("employeeNew");
};
