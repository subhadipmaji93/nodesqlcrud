const dbConn = require("../../config/db.config");

var Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.designation = employee.designation;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};
// get all employee
Employee.getAllEmployees = (result) => {
  dbConn.query(
    "SELECT id, first_name, last_name, email, phone FROM employees",
    (err, res) => {
      if (err) {
        console.log("Error while fetching eployees", err.code);
        result(null, res);
      } else {
        console.log("Employees details fetched succesfully");
        result(null, res);
      }
    }
  );
};

// get employee by id from database
Employee.getEmployeeById = (id, result) => {
  dbConn.query("SELECT * FROM employees WHERE id=?", id, (err, res) => {
    if (err) {
      console.log("Error fetching Employee details by id", err.code);
      //   result(null, err);
    } else result(null, res);
  });
};

// create new employee data
Employee.createEmployee = (employeeReqData, result) => {
  dbConn.query("INSERT INTO employees SET ?", employeeReqData, (err, res) => {
    if (err) {
      console.log("can't create new employee data");
      result(err, null);
    }
    result(null, res);
  });
};

// update employee data
Employee.updateEmployee = (id, employeeReqData, result) => {
  dbConn.query(
    "UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? WHERE id = ?",
    [
      employeeReqData.first_name,
      employeeReqData.last_name,
      employeeReqData.email,
      employeeReqData.phone,
      employeeReqData.organization,
      employeeReqData.designation,
      employeeReqData.salary,
      employeeReqData.status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("update not succesfull");
        result(null, err);
      }
      result(null, res);
    }
  );
};

// delete employee data
Employee.deleteEmployee = (id, result) => {
  dbConn.query("DELETE FROM employees WHERE id=?", [id], (err, res) => {
    if (err) {
      console.log("Delete failed");
      result(null, err);
    }
    result(null, res);
  });
};
module.exports = Employee;
