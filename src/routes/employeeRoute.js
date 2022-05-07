const router = require("express").Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployeeList);
router.get("/employee", employeeController.getEmployeeById);
router.get("/employee/edit", employeeController.fetchEmployeeData);
router.post("/employee/edit", employeeController.updateEmployeeData);
router.get("/employee/add", employeeController.createEmployee);

module.exports = router;
