import express from 'express';
import EmployeeController from "../controllers/employee.controller.js";

const EmployeeRouter = express.Router();

EmployeeRouter.get('/', EmployeeController.getAllEmployee);
EmployeeRouter.get('/get/business/:id', EmployeeController.getAllEmployeeByBusiness);
EmployeeRouter.get('/:id', EmployeeController.getEmployeeById);
EmployeeRouter.post('/add', EmployeeController.createEmployee);
EmployeeRouter.patch('/update/:id', EmployeeController.updateEmployeeById);
EmployeeRouter.delete('/delete/:id', EmployeeController.deleteEmployeeById);

export default EmployeeRouter;