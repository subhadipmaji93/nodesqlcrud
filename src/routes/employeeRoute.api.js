const router = require("express").Router();
const employeeController = require("../controllers/employeeController.api");

// get all employees list
router.get("/", employeeController.getEmployeeList);

// get employee by id
router.get("/:id", employeeController.getEmployeeById);

//  create new employee
router.post("/", employeeController.createNewEmployee);

// update employee data
router.put("/:id", employeeController.updateEmployeeData);
// delete employee data
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
