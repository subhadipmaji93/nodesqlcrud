// import Employee model
const EmployeeModel = require("../models/employeeModel");

// get employee list
exports.getEmployeeList = (req, res) => {
  EmployeeModel.getAllEmployees((err, employees) => {
    if (err) {
      res.send(err);
    } else res.send(employees);
  });
};

// get employee by id
exports.getEmployeeById = (req, res) => {
  EmployeeModel.getEmployeeById(req.params.id, (err, employee) => {
    if (err) {
      res.send(err);
    } else {
      console.log("single employee data");
      res.json(employee);
    }
  });
};

// create new employee data
exports.createNewEmployee = (req, res) => {
  //   console.log(req.body);
  const employeeReqData = new EmployeeModel(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send({ sucess: false, message: "Please fill the parameter" });
  } else {
    EmployeeModel.createEmployee(employeeReqData, (err, response) => {
      if (err) {
        // res.send(err);
        res.json({ status: false, message: "failed to create" });
      }
      // res.send(response);
      else res.json({ sucess: true, data: { id: response.insertId } });
    });
  }
};

// update employee data
exports.updateEmployeeData = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  // check null
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ sucess: false, message: "Please fill the parameter" });
  } else {
    EmployeeModel.updateEmployee(
      req.params.id,
      employeeReqData,
      (err, response) => {
        if (err) {
          // res.send(err);
          res.json({ status: false, message: "failed to create" });
        }
        // res.send(response);
        else res.json({ sucess: true, data: { id: response.insertId } });
      }
    );
  }
};

// delete employee data
exports.deleteEmployee = (req, res) => {
  EmployeeModel.deleteEmployee(req.params.id, (err, employee) => {
    if (err) res.send(err);
    else
      res.json({
        sucess: true,
        message: `${req.params.id} delete sucessfully`,
      });
  });
};
